import React from 'react';
import Image from 'next/image';
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='md:h-[400px] h-[800px] sm:h-[1000px] blue flex md:justify-center justify-start w-full items-center'>
      <div className='grid md:grid-cols-5 grid-cols-1 lg:gap-8 gap-4 inter pb-16 text-white px-6 lg:border-b-2 border-gray-500'>
        <div className='xl:w-[250px] w-[150px]'>
            <Image src={'/logo.png'} alt='' height={70} width={230} className='xl:h-[40px] xl:w-[200px] h-[32px] w-[130px]'></Image>
            <p className='xl:text-[18px] text-[14px] font-light lg:leading-6 leading-4 mt-5'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>
        <div className='xl:w-[250px] w-[150px] inter mt-1'>
            <h1 className='xl:text-[25px] text-[20px] font-bold'>Product</h1>
            <ul className='xl:text-[18px] text-[14px] lg:space-y-3 space-y-1 font-light mt-5'>
                <li className='hover:text-amber-200 transition-colors'>Overview</li>
                <li className='hover:text-amber-200 transition-colors'>Pricing</li>
                <li className='hover:text-amber-200 transition-colors'>Customer stories</li>
            </ul>
        </div>
        <div className='xl:w-[250px] w-[150px] inter mt-1'>
            <h1 className='xl:text-[25px] text-[20px] font-bold'>Resources</h1>
            <ul className='xl:text-[18px] text-[14px] lg:space-y-3 space-y-1 font-light mt-5'>
                <li className='hover:text-amber-200 transition-colors'>Blogs</li>
                <li className='hover:text-amber-200 transition-colors'>Guides & Tutorials</li>
                <li className='hover:text-amber-200 transition-colors'>Help center</li>
            </ul>
        </div>
        <div className='xl:w-[250px] w-[150px] inter mt-1'>
            <h1 className='xl:text-[25px] text-[20px] font-bold'>Company</h1>
            <ul className='xl:text-[18px] text-[14px] lg:space-y-3 space-y-1 font-light mt-5'>
                <li className='hover:text-amber-200 transition-colors'>About us</li>
                <li className='hover:text-amber-200 transition-colors'>Careers</li>
                <li className='hover:text-amber-200 transition-colors'>Media Kit</li>
            </ul>
        </div>
        <div className='xl:w-[250px] w-[150px] inter mt-1 sm:mt-0'>
            <h1 className='xl:text-[35px] text-[22px] font-bold inter'>Try it today</h1>
            <p className='xl:text-[17px] text-[14px] mt-5 sm:mt-6'>Get started for free.
            Add your whole team as your needs grow.</p>
            <button className='inter font-medium xl:text-[18px] sm:text-[12px] text-[8px] bg-blue-400 rounded-md xl:leading-6 leading-[18px] xl:px-[28px] sm:px-[15px] px-[10px] sm:py-[10px] py-[8px] gap-[10px] mt-6 sm:mt-4 md:mt-2 lg:mt-10 hover:bg-transparent hover:border-2 transition-all duration-200'>start today ➔</button>
        </div>
      </div>
    </div>
    <div className='text-white lg:px-12 md:px-8 px-1 lg:justify-between w-full lg:flex lg:h-[40px] h-[100px] blue'>
     <ul className='lg:text-[18px] xl:gap-16 gap-2 md:gap-8 text-[10px] flex font-light lg:border-b-0 border-b-2 border-gray-500'>
          <li className='hover:text-amber-200 transition-colors items-center gap-2 flex pb-4 xl:pb-0'><TbWorld className='lg:text-[22px] md:text-[18px] md:flex hidden' />English ▾</li>
          <li className='hover:text-amber-200 transition-colors'>Terms & Privacy</li>
          <li className='hover:text-amber-200 transition-colors'>Security</li>
          <li className='hover:text-amber-200 transition-colors'>Status</li>
          <li className='hover:text-amber-200 transition-colors'>©2024 Whitespace LLC</li>
      </ul>
      <ul className='lg:text-[24px] text-[16px] text-white gap-4 flex mt-4 lg:mt-0'>
        <li><FaFacebook/></li>
        <li><FaTwitter/></li>
        <li><FaLinkedinIn/></li>
      </ul>
    </div>
</>
  )
}

export default Footer
