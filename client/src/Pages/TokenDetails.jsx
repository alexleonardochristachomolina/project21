import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useStateContext} from '../Context';
import { useNavigate } from 'react-router-dom';

import Custombutton from '../components/custombutton';

import Loader from '../components/Loader';




const TokenDetails = () => {
  const { state } = useLocation();
  const {address, buyNFT} = useStateContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyToken = async() => {
      setIsLoading(true);
      if(address){
        const data = await buyNFT(state.pId, state.cost);
        console.log("data in token details component: " + data);
        setIsLoading(false);
        navigate('/');
      }
      else{
        alert('Add metamask wallet extension to your browser');
        navigate('/');
      }
  } 

  

  return (
    <div className=' mb-auto bg-[#1c1c24] rounded-[20px] p-[10px]'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className= 'w-auto flex md:flex-row flex-col bg-[#1c1c24] h-auto'>  
          <img src={state.image} alt={state.title} className='w-auto h-[400px] object-contain rounded-[10px]' />
          
          <div className='w-full mx-[auto] sm:mt-[10px] md:mt-[15px] px-5 space-y-3 truncate text-wrap'>
            <h1 className='text-sans font-bold text-[30px] '>{state.title}</h1>
            <p className='text-sans font-semibold text-[15px]'><span className='text-[#B3B3B3]'>Owned by: </span> {state.owner}</p>
            <p className='text-sans text-semibold text-[15px]'><span className='text-[#B3B3B3]'>Description: </span>{state.description}</p>
            <p className='text-sans text-semibold text-[15px]'><span className='text-[#B3B3B3]'>Purchased: </span>{state.purchasecount}</p>
            {state.buyers.length > 0 && <p className='text-sans font-semibold text-[15px]'><span className='text-[#B3B3B3]'>Purchased by: </span>{state.buyers}</p>}
            <p className='text-sans text-semibold text-[15px]'><span className='text-[#B3B3B3]'>Volume: </span>{state.volume} ETH</p>
            <p className='text-[#B3B3B3] text-[16px]'>Current Price:</p>
            <p className='text-sans font-bold text-[30px]'>{state.cost} ETH</p>

            <div className=''>
            <Custombutton
            btnType='button'
            title= {'Buy Now'} 
            styles= {'bg-[#1dc071] object-contain h-auto w-full flex-wrap items-center justify-center'}
            handleClick = {handleBuyToken}
            />
          </div>
          </div>
        </div>
        
      )}
    </div>
  )
}

export default TokenDetails;