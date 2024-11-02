import React from 'react'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import Image from 'next/image'


function Clientcard() {
  return (
    <div>
      <div className='md:h-[530px] xl:-mt-20 -mt-6 sm:-mt-2 md:-mt-0 inter w-full sm:items-end sm:overflow-x-scroll sm:grid-flow-col lg:grid-cols-none lg:overflow-x-hidden flex items-center md:justify-start justify-center xl:justify-center'>
        <div className='md:flex md:gap-4 grid grid-cols-1 gap-6 '>
          <div  id='clientCard' className='item bg-white text-black shadow-lg xl:h-[400px] md:h-[500px] sm:h-[350px] h-[400px] xl:w-[400px]  md:w-[300px] w-[250px] md:py-[40px] py-[20px] px-[24px] rounded-md text-start hover:text-white hover:bg-blue-400 transition-color duration-300 '>
            <div className='pb-6 border-b-2'>            
                <h1 className='text-[62px] transition-color blueText font-bold text flex -space-x-5'><BiSolidQuoteSingleLeft /><BiSolidQuoteSingleLeft /></h1>
                <p className='md:mt-4 mt-2 font-medium md:text-[19px] text-[16px] '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>
            <div className='flex justify-between gap-6 sm:pt-6 pt-3'>
                <div>
                    <Image src={'/img8.png'} alt='' height={100} width={100} className='rounded-full' />
                </div>
                <div>
                    <h1 className='md:text-[24px] text-[20px] font-medium inter bluetext'>Oberon Shaw, MHC</h1>
                    <p className='md:text-[16px] text-[13px] leading-4'>Head of Talent Acquisition, North America</p>
                </div>
            </div>
          </div>
          <div  id='clientCard' className='item bg-white text-black shadow-lg xl:h-[400px] md:h-[500px] sm:h-[350px] h-[400px] xl:w-[400px] md:w-[300px] w-[250px] md:py-[40px] py-[20px] px-[24px] rounded-md text-start hover:text-white hover:bg-blue-400 transition-color duration-300 '>
            <div className='pb-6 border-b-2'>            
                <h1 className='text-[62px] transition-color blueText font-bold text flex -space-x-5'><BiSolidQuoteSingleLeft /><BiSolidQuoteSingleLeft /></h1>
                <p className='md:mt-4 mt-2 font-medium md:text-[19px] text-[16px] '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>
            <div className='flex justify-between gap-6 sm:pt-6 pt-3'>
                <div>
                    <Image src={'/img9.png'} alt='' height={100} width={100} className='rounded-full' />
                </div>
                <div>
                    <h1 className='md:text-[24px] text-[20px] font-medium inter bluetext'>Oberon Shaw, MHC</h1>
                    <p className='md:text-[16px] text-[15px] leading-4'>Head of Talent Acquisition, North America</p>
                </div>
            </div>
          </div>
          <div  id='clientCard' className='item bg-white text-black shadow-lg xl:h-[400px] md:h-[500px] h-[400px] xl:w-[400px] md:w-[300px] w-[250px] md:py-[40px] py-[20px] px-[24px] rounded-md text-start hover:text-white hover:bg-blue-400 transition-color duration-300 '>
            <div className='pb-6 border-b-2'>            
                <h1 className='text-[62px] transition-color blueText font-bold text flex -space-x-5'><BiSolidQuoteSingleLeft /><BiSolidQuoteSingleLeft /></h1>
                <p className='md:mt-4 mt-2 font-medium md:text-[19px] text-[16px] '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>
            <div className='flex justify-between gap-6 sm:pt-6 pt-3'>
                <div>
                    <Image src={'/img10.png'} alt='' height={100} width={100} className='rounded-full' />
                </div>
                <div>
                    <h1 className='md:text-[24px] text-[20px] font-medium inter bluetext'>Oberon Shaw, MHC</h1>
                    <p className='md:text-[16px] text-[14px] md:leading-4'>Head of Talent Acquisition, North America</p>
                </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Clientcard
