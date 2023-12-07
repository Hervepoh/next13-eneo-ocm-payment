import Image from 'next/image'
import React from 'react'

function SideDrawer({ place, close }: any) {

    return (
        <div className='h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20'>
            <button onClick={() => close()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 bg-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
            <h2 className='line-clamp-2 text-[20px] font-semibold mb-3'>

            </h2>
            <Image src='/placehoder.jpeg' alt='' width={200} height={80} className='w-full h-[150px] object-cover rounded-t-xl' />
        </div>
    )
}

export default SideDrawer