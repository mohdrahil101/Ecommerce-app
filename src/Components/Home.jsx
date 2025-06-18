import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container text-center'>
        <h1>Welcome to ECommerce App</h1>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Home