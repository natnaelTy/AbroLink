import React from 'react'
import Image from 'next/image'



export default function TopRatedTravelers() {
  return (
    <section className='flex items-start justify-start flex-col gap-4 max-h-screen max-w-6xl mx-auto w-full'>
        <h1>Our Top Rated Traveler's</h1>
        <div className="flex items-start justify-center gap-3">
            <ul>
                <li>
                    <Image src="/public/next.svg" alt='pic' width={100} height={100} objectFit='cover'/>
                </li>
            </ul>
        </div>
    </section>

  )
}
