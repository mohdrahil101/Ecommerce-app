import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'
import {Routes,Route} from 'react-router-dom';
import AppLayout from './Components/Layout/AppLayout'
import Dashboard from './Components/Dashboard'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  // Tracking user details in App because app is the component which decides where to navigate based on the current route and it needs to know whether the user is logged in or not. 
  const [userDetails,setUserDetails]=useState(null);

  // This function takes new value of userDetails and update it using setUserDetails function.
  const updateUserDetails= (updatedData) =>{
    setUserDetails(updatedData);
  };

  const isUserLoggedIn = async()=>{
    try{
      const response=await axios.post('http://localhost:5001/auth/is-user-logged-in',{},{withCredentials:true});
      updateUserDetails(response.data.userDetails);
      console.log(response)
    }
    catch(err){
      console.log('User not logged in', err);
    }
  }

  useEffect(()=>{
    isUserLoggedIn();
  },[]);

  const [count, setCount] = useState(0)
  return (
    <>
    <Routes>
      <Route path="/" 
      element={userDetails?<Navigate to='/dashboard'/>:<AppLayout><Home/></AppLayout>}/>
      
      {/* We are passing updateUserDetails function to login because thats where we will get user information for authentication */}
      <Route path="/login" 
      element={userDetails?<Navigate to ='/dashboard'/>:<AppLayout><Login updateUserDetails={updateUserDetails}/></AppLayout>}/>
      <Route path="/dashboard" 
      element={userDetails?<Dashboard/>:<Navigate to='/login'/>}/>
    </Routes>
    </>
  )
}

export default App
