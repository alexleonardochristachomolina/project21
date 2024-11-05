import React from 'react'
import Category from '../Assets/category.svg';

const TokenCard = ({image, owner, title, purchasecount, volume, cost, handleClick}) => {
  return (
    <div className='sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer mt-5' onClick= {handleClick}>
        <img src={image} className='w-full h-[260px] object-cover rounded-[15px]'/>
        <div className='flex flex-row flex-wrap p-3 gap-2 flex-between'>
        <img className='w-[15px] h-[15px] object-contain hover:{`${owner}`}' src={Category} alt='category image' />    
        <p className='font-medium font-sans text-[12px] text-[#808191]'>Anime</p>
        <p className='text-[10px] ml-4 truncate flex-1'>{owner}</p>
        </div>
        <div className='p-3 gap-1 flex flex-row justify-between'>
        <h3 className='place-self-end'>{title}</h3>
        <p className='text-[15px] font-sans'>Floor: {cost} ETH</p>
        </div>
        <div className='flex flex-row justify-between'>
        <p className='text-[15px] font-sans mx-3 mb-2'> Purchased: {purchasecount}</p>
        <p className='text-[15px] font-sans mx-3 mb-2'> Volume: {volume}</p>
        </div>
    </div>
  )
}

export default TokenCard