import React, { useState } from 'react'
import CopyButton from './CopyButton';
const UrlBox = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        setshorturl("shorurl//http://localhost");
    }
  return (
    <div className='w-96 h-fit bg-gradient-to-tr from-black to-gray-400 p-5 rounded-xl border-2 border-black shadow-xl flex flex-col gap-5'>
        <h1 className='text-3xl text-center text-white'>URL-SHORTNER</h1>
        <form className='flex flex-col gap-3' onSubmit={(e)=>handleSubmit(e)}>
            <label className='text-2xl text-white'>Enter your url</label>
            <input type='url' aria-required value={url} onChange={(e)=>seturl(e.target.value)} className=' w-72 h-fit py-2 bg-gray-400' />
            <button type='submit' className='px-3 py-2 bg-slate-500 hover:bg-slate-700'>Submit</button>
        </form>
        <div className='w-full h-fit'>
           {shorturl?
           <div className='flex flex-col justify-center w-full h-fit'>
           <h1  className='bg-white border-2 border-black p-5 rounded w-full h-fit'>{shorturl}</h1>
           <CopyButton text={shorturl}/>
            </div>
           :
           <h1 >Enter a correct url to get shortend url</h1>
           }
        </div>
    </div>
  )
}

export default UrlBox