import React from 'react'
import {Route,Routes} from 'react-router-dom';

import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import TokenDetails from './Pages/TokenDetails';
import CreateToken from './Pages/CreateToken';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <div className='relative sm:p-8 p-4 bg-[#13131a] text-white min-h-screen flex flex-row'>
    <div className='sm:flex hidden mr-10 relative'>
        <Sidebar />
    </div>
    <div className='flex flex-1  flex-col max-sm: w-full max-w-[1280px] mx-auto sm:pr-5'>
    <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
            <Route path='/CreateToken' element={<CreateToken />} />
            <Route path='/token-details/:id' element={<TokenDetails />} />
            <Route path='/Profile' element={<Profile />} />
        </Routes>
    </div>
    </div>
  )
}

export default App