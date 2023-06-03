import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineCloseCircle} from 'react-icons/ai';
export default function Header() {
    const [toggle,setToggle]= useState(false);
  return (
    <div className="bg-[#1DD65F] p-4">
        <div className='max-w-[1240px] py-[15px] flex justify-between mx-auto'>
            <div className="text-[#FFFFFF] text-3xl font-bold">
                WELL WELL
            </div>
            {
                toggle ? 
                <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'></AiOutlineMenu>
                :
                <AiOutlineCloseCircle onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'></AiOutlineCloseCircle>
            }
            
            

            <ul className="text-white hidden md:flex gap-5 items-center">
                <li>
                    Home 
                </li>
                <li>
                    companys
                </li>
                <li>
                    resources
                </li>
                <li>
                    about
                </li>
                <li>
                    contact
                </li>
            </ul>
            {/* responsive menu */}

            <ul className={`duration-300 md:hidden w-full h-screen text-white font-Graphik  bg-[#273444] fixed top-[92px] 
               ${toggle ? 'left-[-100%]' :'left-[0%] '}  `}>
                <li className='p-3'>
                    Home 
                </li>
                <li className='p-3'>
                    companys
                </li>
                <li className='p-3'>
                    resources
                </li>
                <li className='p-3'>
                    about
                </li>
                <li className='p-3'>
                    contact
                </li>
            </ul>
        </div>
    </div>
  )
}
