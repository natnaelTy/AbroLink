import React from 'react'
import Image from 'next/image'
import { Star, BadgeCheck , PlaneTakeoff  } from 'lucide-react';


export default function TopRatedTravelers() {
  return (
    <section className='flex items-start justify-start flex-col gap-4 max-h-screen max-w-6xl mx-auto w-full p-2'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-slate-900'>Our Top Rated Travelers</h1>
        <div className="flex items-start justify-center gap-3">
            <ul className='mt-5 space-y-8'>
                <li className='flex items-start gap-3 justify-between border-b-1 border-gray-300 w-full gap-4 p-2'>
                    <Image src="/images/me.jpg" alt='pic' width={60} height={60} objectFit='cover' className='rounded-full'/>
                    <div className='flex flex-col items-start gap-1'>
                    <p className='text-slate-900 text-base md:text-xl font-semibold flex items-center gap-2'>Natnael taye <span className='text-blue-600 text-sm'><BadgeCheck/></span></p>
                    <div className='flex items-center gap-1'>
                      <Star/>
                      <Star/>
                      <Star/>
                      <Star/>
                      <Star/>
                      </div>
                    </div>
                     <div className='flex items-center gap-5 text-slate-900 text-base md:text-lg'>
                         <p><span className='text-gray-400'>From :</span> Ethiopia</p>
                         <PlaneTakeoff />
                         <p><span className='text-gray-400'>To :</span> Germany</p>
                     </div>
                </li>
            </ul>
        </div>
    </section>

  )
}
