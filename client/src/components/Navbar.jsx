import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Custombutton from './custombutton';
import searchicon from '../Assets/search.svg';
import burger from '../Assets/burger.svg';
import rocket from '../Assets/rocket.svg';
import createtoken from '../Assets/create.svg';
import user from '../Assets/user.svg';
import Home from '../Assets/Home.svg';
import { useStateContext } from '../Context';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, SetIsActive] = useState('/');
  const [toggleDrawer, settoggleDrawer] = useState(false);
  const {address, connect, metamaskConfig}  = useStateContext();


  const handleConnect = () => {
    try{
      if(address){
        navigate('/CreateToken');
      } 
      else{
        if(typeof window.ethereum !== 'undefined'){
          connect(metamaskConfig);
          settoggleDrawer(false);
        }else{
          alert('Install metamask wallet extension to your browser');
          navigate('/');
          settoggleDrawer(false);
        }
        
      } 
    }
    catch(error){
      console.log('connect error: ' + error)
    }
    
  }

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mx-auto mb-auto w-full gap-6'>
      <div className='lg:flex-1 flex flex-row p-4 h-[80px] w-auto gap-3'>
        <input 
        type ='text'
        placeholder='Enter token name or address ex: 0x00898....'
        className='font-sans rounded-md h-[50px] text-[20px] px-3 w-[80%] bg-transparent outline-sky-600 outline-none' />

        <img
        src= {searchicon}
        alt='search'
        className='w-[10%] h-full object-contain cursor-pointer'
        />
      </div>
      <div className='sm:flex flex-row hidden justify-end gap-4'>

      <Custombutton 
      btnType='button'
      title= {address ? 'Create NFT': 'Connect Wallet'} 
      styles={address ? 'bg-[#1dc071]': 'bg-[#8c6dfd]'}
      handleClick = {handleConnect} />
      </div>

      {/* Small screen Navigation */}

      <div className='sm:hidden flex flex-items justify-between relative mt-5 gap-3'>
      <div className='h-[40px] rounded-full cursor-pointer'>
      <Link to = '/'>
         <img 
         src={rocket}
         className='w-full h-full object-contain'
         />
         </Link>
         </div>
      
      <img 
      src={burger}
      alt='Menu'
      className='w-[40px] h-[40px] object-contain cursor-pointer'
      onClick={() => settoggleDrawer(!toggleDrawer)}
      />

      <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]': '-translate-y-0'} translation-all duration-700`}>
        <ul className='mb-4'>
          <li className= {`flex flex-row gap-7 p-1 hover:bg-cyan-500 ${isActive === '/' ? 'bg-cyan-600' : 'grayscale'}`} onClick={() => {SetIsActive('/'); settoggleDrawer(false); navigate('/')}}>
            <img src={Home} alt='Home' className={`w-10 h-10 p-2 object-contain  rounded-lg`} />
            <p className='py-2 font-sans text-[15px]'>Home</p>
          </li>
          <li className= {`flex flex-row gap-7 p-1 hover:bg-cyan-500 ${isActive === '/createtoken' ? 'bg-cyan-600' : 'grayscale'}`} onClick={() => {SetIsActive('/createtoken'); settoggleDrawer(false); navigate('/createtoken')}}>
            <img src={createtoken} alt='createtoken' className={`w-10 h-10 p-2 object-contain  rounded-lg`} />
            <p className='py-2 font-sans text-[15px]'>Create Token</p>
          </li>
          <li className= {`flex flex-row gap-7 p-1 hover:bg-cyan-500 ${isActive === '/profile' ? 'bg-cyan-600' : 'grayscale'}`} onClick={() => {SetIsActive('/profile'); settoggleDrawer(false); navigate('/profile')}}>
            <img src={user} alt='user' className={`w-10 h-10 p-2 object-contain  rounded-lg`} />
            <p className='py-2 font-sans text-[15px]'>Profile</p>
          </li>
        </ul>
        <div className='mx-4'>
        <Custombutton 
          btnType='button'
          title= {address ? 'Create NFT': 'Connect Wallet'} 
          styles={address ? 'bg-[#1dc071]': 'bg-[#8c6dfd]'}
          handleClick = {handleConnect} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar