import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#1DD65F] p-4 py-[100px] '>
        <div className='max-w-[1240px] mx-auto md:flex justify-between'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] text-bold '>Hello how you doing??</h1>
                <span>well it is what it is</span>
            </div>
            <div className='m-2'>
                <input type='text' className='sm:w-full p-2 mr-2 text-slate-600 rounded mb-2 ' placeholder="Email"/>
                <button className="p-2 bg-black text-white rounded">Get Started</button>
                <br/>
                <p className='text-white'>
                    We care about your music test we don't share your <br/>
                    <a href='' className='text-black'>Privacy Policy</a> 
                </p>
            </div>
        </div>
    </div>
  )
}
