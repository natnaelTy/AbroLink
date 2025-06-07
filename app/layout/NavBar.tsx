import React from 'react'
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';


export default function () {
  return (
    <nav className='max-w-6xl w-full flex items-center justify-between p-2 py-4 mx-auto'>
    
    <div className='flex items-center gap-1'>
      <Package className='size-7'/>
      <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600'>AbroLink<span className='text-slate-900'>.</span></h1>
    </div>

      <div className='flex items-center gap-5'>
        <button className='bg-transparent hover:bg-slate-900 hover:text-white rounded-md border-2 border-slate-900 px-5 py-2.5 hover:shadow-xl'>Log in</button>
        <Button>Sign up</Button>
      </div>
    </nav>
  )
}
