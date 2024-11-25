import React, {useState, useEffect} from 'react'
import  {useStateContext} from '../Context';
import DisplayTokens from '../components/DisplayTokens';


const Profile = () => {

  const [isloading, setisloading] = useState(false);
  const [getallUserTokens, setallUserTokens] = useState([]);

  const {address, contract, getUserTokens} = useStateContext();

  const fetchTokens = async () => {
    setisloading(true);
    const all_tokens = await getUserTokens();
    setallUserTokens(all_tokens);
    setisloading(false);
  }

  useEffect(() => {
    if(contract) fetchTokens();
  },[address, contract])

  return (
    <div className='mb-auto'>
      <DisplayTokens 
      title='User Tokens'
      isloading={isloading}
      tokens = {getallUserTokens}
      />
    </div>
  )
}

export default Profile