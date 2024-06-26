import React, { useEffect } from 'react'
import UrlBox from './Components/UrlBox'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
       document.body.style.overflow = 'auto'
    }
  }, []);
  return (
    <div style={{backgroundImage:'url(/urlbg.png)'}} className='w-full h-screen flex justify-center items-center bg-cover'>
      <UrlBox/>
      <ToastContainer/>
    </div>
  )
}

export default App