import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';

function Login({updateUserDetails}) {

  const [formData,setformData] =useState({
    username:"",
    password:""
  });

  const [error,setError] =useState({})
  const [message,setMessage]=useState(null);

  const handleChange = (event) => {
      const name=event.target.name;
      const value=event.target.value;

      setformData({     //capturing user values one by one
        ...formData,
        [name]:value
      });
  }

  const validate = () =>{
    let newErrors={};
    let isValid=true;
    if(formData.username.length===0){
      newErrors.username="Username is mandatory!";
      isValid=false;
    }
    if(formData.password.length===0){
      newErrors.password="Password is mandatory!";
      isValid=false;
    }
    setError(newErrors);
    return isValid;
  }

  const handleSubmit= async (event)=>{
    event.preventDefault();   //prevent default behaviour of HTML of reloading the form 

    if(validate()){    
      const body={
        username:formData.username,
        password:formData.password
      }
      const configuration={
        withCredentials:true     //we want to send extra header files like cookies also to the server
      }
      try{
        const response = await axios.post('http://localhost:5001/auth/login',body,configuration);
        updateUserDetails(response.data.userDetails);
      }
      catch(err){
        setError({message:'Something went wrong, please try again!'})
      }
  }
}
  
  return (
    <>
    <div className='container-fluid d-flex flex-column border border-secondary p-3 align-items-center w-50 mx-auto my-3'>
        <h2 className='mb-3'>Sign in to Continue</h2>
        {message && (message)}
        {error.message && (error.message)}
        <form action="" onSubmit={handleSubmit}>
        <table className='p-3'>
          <tbody>
            <tr className=''>
                <td className=''>Username:</td>
                <td><input type="text" name="username" value={formData.username} onChange={handleChange} id="" /> {error.username && (error.username)}</td>  
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" name="password"  value={formData.password} onChange={handleChange} id="" /> {error.password && (error.password)}</td>
            </tr>
            </tbody>
        </table>
        <input className='btn btn-lg btn-primary mt-3' type="submit" value="Submit" />
        </form>
    </div>
    </>
    
  )
}

export default Login