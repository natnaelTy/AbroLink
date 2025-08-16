import React from 'react'
import Image from 'next/image'
import { Star, BadgeCheck , PlaneTakeoff  } from 'lucide-react';
import { IoCheckmarkCircle } from "react-icons/io5";


export default function TopRatedTravelers() {
  return (
    <section className='flex items-start justify-start flex-col gap-4 max-h-screen max-w-6xl mx-auto w-full p-2'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-slate-950'>Top rated travelers</h1>
        <div className="flex items-start justify-center gap-3">
            <ul className='mt-5 space-y-8'>
                <li className='flex items-start gap-3 justify-between border-b-1 border-gray-300 w-full gap-4 p-2'>
                    <Image src="/images/me.jpg" alt='pic' width={60} height={60} objectFit='cover' className='rounded-full'/>
                    <div className='flex flex-col items-start gap-1'>
                    <p className='text-base md:text-lg font-semibold flex items-center gap-2'>Natnael taye <span className='text-blue-600'><IoCheckmarkCircle/></span></p>
                    <div className='flex items-center gap-1 text-yellow-500'>
                      <Star className='size-4 md:size-5'/>
                      <Star className='size-4 md:size-5'/>
                      <Star className='size-4 md:size-5'/>
                      <Star className='size-4 md:size-5'/>
                      <Star className='size-4 md:size-5'/>
                      </div>
                    </div>
                     <div className='flex items-center gap-5 text-slate-900 text-sm md:text-base font-medium'>
                         <p><span className='text-gray-600 font-normal text-sm'>From :</span> Ethiopia</p>
                         <PlaneTakeoff />
                         <p><span className='text-gray-600 font-normal text-sm'>To :</span> Germany</p>
                     </div>
                </li>
            </ul>
        </div>
    </section>

  )
}
