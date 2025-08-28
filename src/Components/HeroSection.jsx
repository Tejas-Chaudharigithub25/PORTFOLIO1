import Image from 'next/image'
import React, { useState } from 'react'
import Photo from '@/app/photo.png'
import Blob from '@/app/blob.png'

const HeroSection = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(true);
    }
    return (
        <>
            <div className="flex flex-wrap justify-evenly items-center md:px-30 pt-30 pb-10 bg-blue-500/5 overflow-x-hidden">
                <div className="second flex justify-center items-center bg-cover md:order-2" data-aos="fade-right">
                    <Image src={Blob} width={400} height={500} alt="Hero section background" className="object-cover z-0 relative w-80 md:w-100" />
                    <Image src={Photo} width={230} height={100} alt="user image" className="absolute active:scale-110 active:shadow-black/60 md:hover:scale-110 shadow-xl md:hover:shadow-black/60 duration-200 z-10 w-50 md:w-60 rounded-full border-8 border-blue-500" />
                </div>
                <div className="first flex flex-col justify-center items-center md:items-start gap-4 md:order-1 m-10" data-aos="fade-left">
                    <div className="text-5xl text-center font-bold bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent active:to-blue-700 active:from-blue-300 md:hover:to-blue-700 md:hover:from-blue-300 transition duration-300">
                        Tejas Chaudhari
                    </div>
                    <p className='ps-1 text-xl text-center'>A full-stack developer passionate about building scalable and efficient applications.</p>
                    <button onClick={handleModal} className='bg-gradient-to-r from-blue-500 to-blue-400 ms-1 py-2 px-7 w-fit rounded cursor-pointer hover:shadow-sm hover:scale-105 duration-700 md:duration-150 shadow-blue-300 hover:to-blue-500 hover:from-blue-400 transition' suppressHydrationWarning={true}>View Resume</button>
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
                            src={'/resume/rsm.pdf'}
                            width="100%"
                            className='h-full cursor-copy'
                            style={{ border: 'none' }}
                        />
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-400"
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

export default HeroSection