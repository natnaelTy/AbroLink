import React from 'react'
import { Button } from '@/components/ui/button';



export default function () {
  return (
    <nav className='max-w-6xl w-full flex items-center justify-between px-6 py-4 mx-auto'>
    
      <h1 className='text-3xl font-bold text-orange-500'>AbroLink<span className='text-slate-900'>.</span></h1>

      <div className='flex items-center gap-5'>
        <button className='bg-transparent hover:bg-slate-900 hover:text-white rounded-md border-2 border-slate-900 px-5 py-2.5 hover:shadow-xl'>Log in</button>
        <Button>Sign up</Button>
      </div>
    </nav>
  )
}
