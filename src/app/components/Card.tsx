import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

function Card() {
  
  return (
    <>
    <div>
      <div className='h-screen inter w-full flex items-center justify-center'>
          <div className='flex md:gap-4 gap-0 cardWrapper'>
            <div  id='card' className='item bg-white bg text-black border-2 border-amber-200 h-[700px] w-[472px] md:py-[40px] py-[20px] md:px-[32px] px-[24px] rounded-md text-start md:hover:scale-110 hover:scale-105  hover:text-white card transition-transform duration-300 '>
              <div className=''>
                <h1 className='font-medium md:text-[26px] text-[16px]'>Free</h1>
                <p className='md:mt-4 mt-2 font-bold md:text-[28px] text-[18px] text'>$0</p>
                <p className='md:mt-4 mt-2 font-medium md:text-[19px] text-[13px]'>Capture ideas and find them quickly</p>
              </div>
              <div className='md:mt-8 mt-6 md:pb-4 pb-2'>
                <ul className='md:space-y-6 space-y-4 md:text-[16px] text-[12px] font-normal '>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />Sync unlimited devices</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />10 GB Monthly uploads</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />200 MB max. note size</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Customize Home dashboard and access widgets</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Connect primary Google Calendar account</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Add dates, reminders, and notifications to tasks</li>
                </ul>
              </div>
              <button className='md:mt-6 mt-3 lg:-mt-5 xl:mt-6 btn md:py-2 py-1 md:px-4 px-2 font-normal md:text-[19px] text-[12px] lg:text-[12px] xl:text-[19px] border-2 border-amber-200 rounded text-black'>Get Started</button>
            </div>
            <div id='card' className='item bg-white  text-black border-2 border-amber-200 h-[700px]  w-[472px] md:py-[40px] py-[20px] md:px-[32px] px-[24px] rounded-md text-start md:hover:scale-110 hover:scale-105 hover:text-white card transition-transform duration-300 '>
              <div className=''>
                <h1 className='font-medium md:text-[26px] text-[16px]'>Personal</h1>
                <p className='md:mt-4 mt-2 font-bold md:text-[28px] text-[18px] text'>$11.99</p>
                <p className='md:mt-4 mt-2 font-medium md:text-[19px] text-[13px]'>Capture ideas and find them quickly</p>
              </div>
              <div className='md:mt-8 mt-6 md:pb-4 pb-2'>
                <ul className='md:space-y-6 space-y-4 md:text-[16px] text-[12px] font-normal '>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />Sync unlimited devices</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />10 GB Monthly uploads</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />200 MB max. note size</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Customize Home dashboard and access widgets</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Connect primary Google Calendar account</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Add dates, reminders, and notifications to tasks</li>
                </ul>
              </div>
              <button className='md:mt-6 mt-3 lg:-mt-5 xl:mt-6 btn md:py-2 py-1 md:px-4 px-2 font-normal md:text-[19px] text-[12px] lg:text-[12px] xl:text-[19px] border-2 border-amber-200 rounded text-black'>Get Started</button>
            </div>
            <div id='card' className='item bg-white  text-black border-2 border-amber-200 h-[700px]  w-[472px] md:py-[40px] py-[20px] md:px-[32px] px-[24px] rounded-md text-start md:hover:scale-110 hover:scale-105 hover:text-white card transition-transform duration-300 '>
              <div className=''>
                <h1 className='font-medium md:text-[26px] text-[16px]'>Organization</h1>
                <p className='md:mt-4 mt-2 font-bold md:text-[28px] text-[18px] text'>$49.99</p>
                <p className='md:mt-4 mt-2 font-medium md:text-[19px] text-[13px]'>Capture ideas and find them quickly</p>
              </div>
              <div className='md:mt-8 mt-6 md:pb-4 pb-2'>
                <ul className='md:space-y-6 space-y-4 md:text-[16px] text-[12px] font-normal '>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />Sync unlimited devices</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />10 GB Monthly uploads</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text md:text-[24px] text-[16px]' />200 MB max. note size</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Customize Home dashboard and access widgets</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Connect primary Google Calendar account</li>
                  <li className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text text-[24px]' />Add dates, reminders, and notifications to tasks</li>
                </ul>
              </div>
              <button className='md:mt-6 mt-3 lg:-mt-5 xl:mt-6 btn md:py-2 py-1 md:px-4 px-2 font-normal md:text-[19px] lg:text-[12px] xl:text-[19px] text-[12px] border-2 border-amber-200 rounded text-black'>Get Started</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Card
