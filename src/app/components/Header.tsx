import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  return (
    <div className='blue w-full flex items-center justify-between py-4 px-[40px] lg:px-[80px]'>
      <div className='md:h-[60px] h-[30px] md:w-[200px] w-[100px] flex items-center'>
        <Image src={'/logo.png'} alt='logo' height={60} width={200} />
      </div>
      <div className='gap-8 text-white items-center text-md font-sans flex'>
        <div className='xl:flex gap-[32px] hidden '>
        <Link href={'/'}> <p>Products ▾</p></Link>
        <Link href={'/'}> <p>Solutions ▾</p></Link>
        <Link href={'/'}> <p>Resources ▾</p></Link>
        <Link href={'/'}> <p>Pricing ▾</p></Link>
       </div>
      <div className='lg:gap-[24px] md:flex hidden gap-[15px]'>
        <button className='inter font-medium lg:text-[18px] text-[14px] px-8 gap-[10px] rounded-md text-sky-950 btnLogin'>Login</button>
        <button className='inter font-medium lg:text-[18px] text-[14px] bg-blue-400 rounded-md lg:leading-6 leading-3 p-[16px] gap-[10px]'>Try Whitepace free ➔</button>
      </div>
      <div className='xl:hidden flex font-medium text-[28px] sm:text-[36px] md:text-[44px]'>
      <CiMenuBurger />
      </div>
      </div>
      
      
    </div>
  )
}

export default Header
