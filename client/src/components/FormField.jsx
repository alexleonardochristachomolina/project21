import React from 'react'

const FormField = ({ labelname, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
        {labelname && (
            <span className='font-sans font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{labelname}</span>
        )}
        {isTextArea ? (<textarea
            required
            rows={10}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-sans text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
            
         />): (
            <input
            required
            type={inputType}
            placeholder={placeholder}
            value={value}
            step = "0.1"
            onChange={handleChange}
            className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-sans text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
            />
        )}
    </label>
  )
}

export default FormField