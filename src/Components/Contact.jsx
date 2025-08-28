import React from 'react'
import { MdOutlineMarkunread } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className="contact flex flex-col items-center py-10 mx-5" id='contact'>
        <h2 className='flex justify-center items-center text-center text-3xl mb-5 w-fit hover:w-50 border-b-4 border-b-blue-500 font-bold'>Connect</h2>
        <div className="flex flex-wrap justify-evenly gap-5 w-full" data-aos="fade-up">
          <div className="first flex flex-col gap-4 items-start my-2 md:p-2 w-140">
            <div className="card p-4 rounded-md w-full transform border border-blue-400/20 shadow-md/30 shadow-blue-400 active:-translate-y-1 active:shadow-md/50 md:hover:-translate-y-1 md:hover:shadow-md/50 duration-300">
              <div className='flex gap-5'>
                <MdOutlineMarkunread className='w-6 h-6 text-blue-400'/>
                tejaschaudhari00001@gmail.com
              </div>
            </div>
            <div className="card p-4 rounded-md w-full transform border border-blue-400/20 shadow-md/30 shadow-blue-400 active:-translate-y-1 active:shadow-md/50 md:hover:-translate-y-1 md:hover:shadow-md/50 duration-200">
              <div className='flex gap-5'>
                <IoCallOutline className='w-6 h-6 text-blue-400' />
                +8275671462
              </div>
            </div>
          </div>

          <div className="second flex justify-center w-140">
            <div className="card p-7 my-5 w-full transform hover:scale-102 border border-blue-400/20 shadow-md/40 shadow-blue-400 hover:shadow-lg/40 duration-200 rounded-lg">
              <h2 className='text-2xl font-bold mb-5'>Message</h2>
              <div className='flex flex-col w-full gap-5'>
                <div className='w-full'>
                  <input suppressHydrationWarning={true} type="text" className='p-3 w-full bg-gray-900 rounded border-b-3 border-blue-400' placeholder='Enter Name' />
                </div>
                <div className='w-full'>
                  <input suppressHydrationWarning={true} type="text" className='p-3 w-full bg-gray-900 rounded border-b-3 border-blue-400' placeholder='Enter Email' />
                </div>
                <div className='w-full'>
                  <input suppressHydrationWarning={true} type="text" className='p-3 w-full bg-gray-900 rounded border-b-3 border-blue-400' placeholder='Subject' />
                </div>
                <div className='w-full'>
                  <textarea className='p-3 w-full bg-gray-900 rounded border-b-3 border-blue-400' placeholder='Message' />
                </div>
                <div className='w-full'>
                  <button
                   suppressHydrationWarning={true}
                    type="submit"
                    className="bg-blue-400 p-2.5 w-full rounded active:bg-blue-300 md:hover:bg-blue-300 cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact