import React from 'react'
import laptop from '../ass/img/laptop.jpg';
export default function Expert() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 p-2 md:grid grid-cols-2">
        <div className="col-span-1 md:w-[80%]">
            <img src={laptop} alt=""/>
        </div>
        <div className="col-span-1 justify-center flex flex-col" >
            <h1 className="font-bold text-[#05396B] text-xl my-2">WELL is HELL </h1>
            <p className='my-2 text-justify'>
            In a React project, TypeScript allows you to write HTML code directly. TypeScript delivers superior IntelliSense and code completion for JSX when used with React. JavaScript XM is abbreviated as JSX.
            </p>
            <button className="w-[30%] p-3 bg-black text-white rounded">Get Started</button>
        </div>
    </div>
  )
}
