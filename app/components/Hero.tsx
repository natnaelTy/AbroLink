import React from 'react'
import { Button } from '@/components/ui/button'



export default function Hero() {
  return (
    <section className='flex items-center flex-col justify-center h-96 py-8 mb-10 w-full p-3 text-center gap-5'>
        <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold max-w-4xl text-slate-900'>Send or recive anything, anywhere with <span className='text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600'>AbroLink</span>.</h1>
        <p className='text-gray-500 max-w-4xl'>AbroLink connects you with travelers who's heading to your desire destination to deliver your packages. securely and affordably.</p>
        <div className='flex items-center gap-8 w-full justify-center'>
        <Button>Get start</Button>
        <button className='bg-slate-900 px-5 py-2.5 rounded-md text-white border-2 transaition ease-in duration-1.6 border-slate-900 hover:bg-transparent hover:text-slate-800 '>Learn more</button>
        </div>
    </section>
  )
}
