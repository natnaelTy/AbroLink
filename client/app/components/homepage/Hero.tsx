"use client"
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Search from './Search'


export default function Hero() {

  const [message, setMessage] = React.useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  console.log(message)
  return (
    <section className='flex items-center flex-col justify-center min-h-screen w-full p-2 text-center gap-6'  style={{
        background:
          "radial-gradient(ellipse at center,rgba(255, 123, 0, 0.37),rgb(255, 255, 255),rgb(251, 251, 251))",
      }}>
        <div className='flex items-center flex-col justify-center gap-4 max-w-6xl'>
        <h1 className='text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold max-w-4xl text-slate-900'>Send or recive anything, anywhere with <span className='text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600'>AbroLink</span>.</h1>
        <p className='text-gray-500 max-w-4xl'>AbroLink connects you with travelers who's heading to your desire destination to deliver your packages. securely and affordably.</p>
        <div className='flex items-center gap-8 w-full justify-center'>
        <button className='bg-clip-bg bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 px-6 py-2.5 text-white font-medium rounded-full'>Get started</button>
        <button className='bg-slate-900 px-6 py-2.5 rounded-full text-white border-2 transaition ease-in duration-1.6 border-slate-900 hover:bg-transparent hover:text-slate-800 '>Learn more</button>
        </div>
        <Search/>
        </div>
    </section>
  )
}
