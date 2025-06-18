import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'
import {Routes,Route} from 'react-router-dom';
import AppLayout from './Components/Layout/AppLayout'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Routes>
      <Route path="/" element={<AppLayout><Home/></AppLayout>}/>
      <Route path="/login" element={<AppLayout><Login/></AppLayout>}/>
    </Routes>
    </>
  )
}

export default App
