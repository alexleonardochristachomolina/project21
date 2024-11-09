import React from 'react'

const custombutton = ({btnType, title, styles, handleClick}) => {
  return (
    <button
    type= {btnType}
    className={`h-[55px] w-auto p-4 font-sans text-[16px] font-bold rounded-xl mt-3 ${styles}`}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default custombutton