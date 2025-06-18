import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
    <div className='container-fluid d-flex flex-column border border-secondary p-3 align-items-center w-50 mx-auto'>
        <h2 className='mb-3'>Sign in to Continue</h2>
        <table className='p-3'>
            <tr className=''>
                <td className=''>Username:</td><td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
                <td>Password:</td><td><input type="password" name="" id="" /></td>
            </tr>
        </table>
        <input className='btn btn-lg btn-primary mt-3' type="submit" value="Submit" />
    </div>
    <Link to='/'>Home</Link>
    </>
    
  )
}

export default Login