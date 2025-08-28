'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { CgMenuRightAlt, CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    toggle === false ? setToggle(true) : setToggle(false)
  }
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(true);
  }
  return (
    <>
      <div className={`flex fixed justify-between items-center backdrop-blur-sm bg-black/45 shadow-lg/20 shadow-blue-400 p-3 py-4.5 w-full sm:px-40 z-50 ${toggle ? 'inline-block' : 'flex'} md:${toggle ? 'flex' : 'flex'}`} >
        <div className="logo flex gap-3">
          <p className='flex justify-center items-center text-3xl font-bold bg-gradient-to-r active:from-blue-200 active:to-blue-500 from-blue-500 to-blue-200 bg-clip-text text-transparent cursor-pointer'>Tejas Chaudhari</p>
        </div>
        {!toggle ? <CgMenuRightAlt className='text-3xl font-bold cursor-pointer absolute right-4 top-3 md:hidden' onClick={toggleNav} /> :
          <CgMenuRight className='text-3xl font-bold cursor-pointer absolute right-4 top-3 md:hidden' onClick={toggleNav} />
        }
        <div className={`list space-y-1 space-x-3 md:space-y-0 mt-5 md:mt-0 md:flex w-full md:w-fit justify-center items-center hidden ${toggle ? 'inline-block' : 'hidden'}`}>
          <Link href="#home" className='flex justify-end text-center'>
            <p className='bg-gradient-to-r active:from-blue-500 active:to-blue-400 md:hover:from-blue-500  md:hover:to-blue-400 px-2 py-0.5 rounded-2xl'>Home</p>
          </Link>
          <Link href="#about" className='flex justify-end text-center'>
            <p className='bg-gradient-to-r active:from-blue-500 active:to-blue-400 md:hover:from-blue-500 md:hover:to-blue-400 px-2 rounded-2xl'>About</p>
          </Link>
          <Link href="#A&E" className='flex justify-end text-center'>
            <p className='bg-gradient-to-r active:from-blue-500 active:to-blue-400 md:hover:from-blue-500 md:hover:to-blue-400 px-2 rounded-2xl'>AchieveExperience</p>
          </Link>
          <Link href="#projects" className='flex justify-end text-center'>
            <p className='bg-gradient-to-r active:from-blue-500 active:to-blue-400 md:hover:from-blue-500 md:hover:to-blue-400 px-2 rounded-2xl'>Projects</p>
          </Link>
          <Link href="#contact" className='flex justify-end text-center'>
            <p className='bg-gradient-to-r active:from-blue-500 active:to-blue-400 md:hover:from-blue-500  md:hover:to-blue-400 px-2 rounded-2xl'>Connect</p>
          </Link>
          <Link href="" className='flex justify-end text-center'>
            <button onClick={handleModal} className='bg-gradient-to-r from-blue-500 active:from-blue-500 active:to-blue-400 to-blue-400 rounded text-sm  md:hover:to-blue-500  md:hover:from-blue-400 transition duration-300 mx-2 px-4 py-1.5 cursor-pointer' suppressHydrationWarning={true}>Resume</button>
          </Link>
        </div>
      </div>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto py-5">
          <div className="flex flex-col gap-4 bg-gray-800 rounded-lg shadow-xl h-full w-full max-w-2xl mx-4 my-10 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Resume
            </h3>
            <iframe
              src="/resume/rsm.pdf"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 'none'}}
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md bg-red-500 text-white  md:hover:bg-red-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header