import React from 'react'

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
        {/* //1 */}

            <div className='shadow-xl pl-4 h-[400px] my-2 bg-gray-25 hover:scale-105 duration-500'>
            <h1 className='font-bold text-black text-3xl my-5'>Web Development</h1>
            <span className='font-bold text-xl my-3 '>$150</span>
            <p className='py-3'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            <button className="p-3 bg-black text-white rounded px-5">Get Started</button>           
            </div>
            {/* 2 */}

            <div className='shadow-xl pl-4  h-[400px] my-2 bg-gray-100 hover:scale-105 duration-500'>
            <h1 className='font-bold text-black text-3xl my-5'>Digital Marketing</h1>
            <span className='font-bold text-xl my-3'>$250</span>
            <p className='py-3'>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>
            <button className="p-3 bg-black text-white rounded px-5">Get Started</button>
            </div>
            {/* 3 */}

            <div className='shadow-xl pl-4 h-[400px] my-2 bg-gray-25 hover:scale-105 duration-500'>
            <h1 className='font-bold text-black text-3xl my-5'>App Development</h1>
            <span className='font-bold text-xl my-3'>$350</span>
            <p className='py-3 '>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>
            <button className="p-3 bg-black text-white rounded px-5">Get Started</button>
            </div>


        </div>
    </div>
  )
}
