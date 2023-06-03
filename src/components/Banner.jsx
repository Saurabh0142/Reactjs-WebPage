import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className="bg-[#1DD65F] w-full py-[50px]">
        <div className="max-w-[1240px] my-[100px] mx-auto text-center ">
            <div className="text-xl md:text-3xl mb-3 md:p-[24px]">
            Well square
            </div>
            <h2 className="text-3xl md:text-[60px] md:p-[24px] font-extrabold ">Little big WELL</h2>
            <div className="text-[30px] md:text-[40px] font-bold md:p-[24px] ">
            Learn
            <Typed
                    className='pl-3'
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                    loop={true}
                    backSpeed={50}
                />
            </div>
            <button className="p-3 bg-black text-white rounded">Get Started</button>
            
        </div>
    </div>
  )
}
