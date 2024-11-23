import React, {useState, useEffect} from 'react'
import  {useStateContext} from '../Context';
import DisplayTokens from '../components/DisplayTokens';


const Home = () => {

  const [isloading, setisloading] = useState(false);
  const [getalltokens, setgetalltokens] = useState([]);

  const {address, contract, getAllTokens} = useStateContext();

  const fetchTokens = async () => {
    setisloading(true);
    const all_tokens = await getAllTokens();
    setgetalltokens(all_tokens);
    setisloading(false);
  }

  useEffect(() => {
    if(contract) fetchTokens();
  },[address, contract])

  return (
    <div className='mb-auto mt-[50px] pl-[15px]'>
      <DisplayTokens 
      title='All Tokens'
      isloading={isloading}
      tokens = {getalltokens}
      />
    </div>
  )
}

export default Home