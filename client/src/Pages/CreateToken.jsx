import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import {ethers} from 'ethers';
import { useStateContext } from '../Context';
import Loader from '../components/Loader';

import Custombutton from '../components/custombutton';
import FormField from '../components/FormField';

const CreateToken = () => {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const {createTokens} = useStateContext();
  const [createform, setCreateForm] = useState({
    person:'',
    title:'',
    description:'',
    cost:'',
    image:''
  });
  const handleFormFieldChange = (fieldName, e) => {
    setCreateForm({ ...createform, [fieldName]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(createform);
      //const img = new Image();
      //img.src = createform.image;
      //if(img.onload){
        setIsLoading(true);
        await createTokens ({ ...createform, cost: ethers.utils.parseUnits(createform.cost, 18)});
        setIsLoading(false);
        navigate('/');
      //}else{
        //alert("Provide valid Image URL");
        //setCreateForm({...createform, image:''});
      //}
  }

  return (
    <div className='bg-[#1c1c24] my-auto flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 mt-[50px]'>
      {isloading && <Loader />}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-sans font-bold sm:text-[25px] text-[18px] leading-[38px]'>Create a Non-Fungible Token</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
        <div className='flex flex-wrap gap-[40px]'>
          < FormField 
          labelname = 'Name *'
          placeholder = 'Enter your Name'
          inputType = 'text'
          value = {createform.person}
          handleChange ={(e)=> {handleFormFieldChange('person', e)}}
          />
          < FormField 
          labelname = 'Title *'
          placeholder = 'Write a title for token'
          inputType = 'text'
          value = {createform.title}
          handleChange ={(e)=> {handleFormFieldChange('title', e)}}
          />
          < FormField 
          labelname = 'Description *'
          placeholder = 'Enter description'
          isTextArea
          value = {createform.description}
          handleChange ={(e)=> {handleFormFieldChange('description', e)}}
          />
          < FormField 
          labelname = 'Cost *'
          placeholder = 'ex: ETH 0.50'
          inputType = 'text'
          value = {createform.cost}
          handleChange ={(e)=> {handleFormFieldChange('cost', e)}}
          />
          < FormField 
          labelname = 'Image *'
          placeholder = 'Place image URL'
          inputType = 'url'
          value = {createform.image}
          handleChange ={(e)=> {handleFormFieldChange('image', e)}}
          />
        </div>
          <div className='flex justify-center items-center m-auto'>
            <Custombutton
            btnType='submit'
            title='Create Token'
            styles='bg-[#38bdf8]'
            />
          </div>
      </form>
    </div>
  )
}

export default CreateToken