import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import rocket from '../Assets/rocket.svg';
import createtoken from '../Assets/create.svg';
import user from '../Assets/user.svg';
import Home from '../Assets/Home.svg';

const sidebar = () => {
    const navigate = useNavigate();
    const [isActive, SetIsActive] = useState('/');

  return (

    <div>
        <div className='flex flex-col justify-between items-center' onClick={()=> {navigate('/'); SetIsActive('/')}}>
        <img src = {rocket} alt='rocket' className='w-16 h-16' />
        <p className='font-sans text-2xl'>StarShip</p>
        </div>

        <div className='flex flex-col justify-center gap-14 items-center sticky p-5 my-48 rounded-2xl'>
            <div>
                <img src={Home} alt='Home' className={`w-10 h-10 p-1 hover:bg-cyan-500 rounded-lg  ${isActive === '/' ? 'bg-cyan-600' : ''}`} onClick={() => {SetIsActive('/'); navigate('/')}} />
            </div>
            <div>
                <img src={createtoken} alt='create token' className={`w-10 h-10 p-1 hover:bg-cyan-500 rounded-lg ${isActive === '/CreateToken' ? 'bg-cyan-600': ''}`} onClick={() => {SetIsActive('/CreateToken'); navigate('/CreateToken')}} />
            </div>
            <div>
                <img src={user} alt='profile' className={`w-10 h-10 p-1 hover:bg-cyan-500 rounded-lg ${isActive === '/Profile' ? 'bg-cyan-600': ''}`} onClick={() => {SetIsActive('/Profile'); navigate('/Profile')}} />
            </div>
        </div>
    </div>
  )
}

export default sidebar