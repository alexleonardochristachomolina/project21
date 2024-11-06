import React from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../Assets/loader.svg';
import TokenCard from './TokenCard';


const DisplayTokens = ({title, isloading, tokens}) => {
    const navigate = useNavigate();

    const handleNavigate = (token) => {
        navigate(`/token-details/${token.title}`, { state: token })
    }


  return (
    <div>
        <h1 className='font-sans text-[18px] text-left font-semibold'>{title} ({tokens.length})</h1>
        <div className='flex flex-wrap flex-row gap-[26px]'>
            {isloading && (
                <img src={Loader} alt='loader' className='w-[100px] h-[100px] object-contain'/>
            )}
            {!isloading && tokens.length === 0 && (
                <p className='font-sans font-[10px] text-[10px]'>No Available Tokens</p>
            )}
            {!isloading && tokens.length > 0 && tokens.map((token)=> <TokenCard 
               key = {token.id}
                {...token}
                handleClick= {() => handleNavigate(token)}
            />)}
        </div>
    </div>
  )
}

export default DisplayTokens