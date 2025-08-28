'use client'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { JsonDataContext } from '@/app/Context/JsonProvider'
import { PiCertificate } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";


const AchievEx = () => {

    const allApiData = useContext(JsonDataContext);
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(false);
    const handleModal = (event) => {
        setModalData(event);
        setOpen(true);
    }
    return (
        <>
            <div className="achievEx flex flex-col justify-center items-center my-10 mx-8 md:mx-20" id='A&E'>
                <div className="title flex justify-center items-center w-full gap-2 my-5">
                    <p className='flex justify-center font-bold text-3xl text-center w-fit md:hover:w-110 hover:w-full border-b-4 mx-8 border-b-[#0f98f6]'>Achievement & Experience</p>
                </div>
                <div className="flex flex-wrap justify-center w-full gap-3">
                    <div className="Certificates flex flex-col gap-y-[7px] mt-5 mb-10">
                        <div className="title flex text-xl font-bold border-l-4 border-l-blue-400 mb-5.5">
                            <span className='ms-3'>Certificates</span>
                        </div>

                        {allApiData?.certificates.map((certi) => {
                            return (
                                <div key={certi.id} className="card group flex w-85 md:w-100 items-center gap-5 my-1.5 border p-1 py-1 mt-5 rounded hover:-translate-y-1" data-aos="fade-up">
                                    <PiCertificate className='w-35 h-20 text-amber-200' />
                                    <div className='flex flex-col bg-cover relative'>
                                        <div className='flex justify-between w-57 md:w-70'>
                                            <div className="title text-md font-bold text-blue-400">{certi.name && certi.name.length > 5 ? certi.name.slice(0, 27) + '...' : certi.name}</div>
                                            <div className="year flex items-center text-sm h-6 bg-gray-500 px-2 rounded-2xl text-wrap">{certi.year}</div>
                                        </div>
                                        <div className="desc flex my-1">{certi.desc && certi.desc.length > 5 ? certi.desc.slice(0, 70) + '...' : certi.desc}</div>
                                        <button onClick={(e) => handleModal(certi)} className='lg:opacity-0 group-hover:opacity-100 bg-blue-400 text-sm px-3 py-1 rounded-2xl absolute bottom-0 right-0 duration-200 cursor-pointer'>View</button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className="Internship flex flex-col mt-5 mb-10">
                        <div className="title flex text-xl font-bold border-l-4 border-l-blue-400 mb-5">
                            <span className='ms-3'>Internship</span>
                        </div>
                        {allApiData?.internship.map((intern) => {
                            return (
                                <div key={intern.id} className='flex flex-col justify-between w-85 md:w-full bg-gray-700 gap-5 rounded mt-5 hover:scale-102' data-aos="fade-up">
                                    <div className="card group flex items-center w-full gap-5 p-1.5 rounded">
                                        <FaUserGraduate className='w-30 h-22 text-white' />
                                        <div className='flex flex-col bg-cover relative w-77 py-1'>
                                            <div className='flex justify-between'>
                                                <div className="title text-lg text-blue-400 font-bold">{intern.name && intern.name.length > 5 ? intern.name.slice(0, 25) + '...' : intern.name}</div>
                                                <div className="year flex items-center text-sm h-6 bg-gray-500 px-2 rounded-2xl">{intern.year}</div>
                                            </div>
                                            <div className="desc flex my-1">{intern.desc && intern.desc.length > 5 ? intern.desc.slice(0, 70) + '...' : intern.desc}</div>
                                            <button onClick={(e) => handleModal(intern)} className='lg:opacity-0 group-hover:md:opacity-100 bg-blue-400 text-sm px-3 py-1 rounded-2xl absolute bottom-0 right-0 duration-200 cursor-pointer'>View</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="Hackethons flex flex-col gap-y-[7px] mt-5 mb-10">
                        <div className="title flex text-xl font-bold border-l-4 border-l-blue-400 mb-5.5">
                            <span className='ms-3'>Hackethons</span>
                        </div>

                        {allApiData?.hackathone.map((hcktn) => {
                            return (
                                <div key={hcktn.id} className="card group flex w-85 md:w-100 items-center gap-5 my-1.5 border p-1 py-1 mt-5 rounded hover:-translate-y-1" data-aos="fade-up">
                                    <LiaLaptopCodeSolid className='w-35 h-20 text-teal-600' />
                                    <div className='flex flex-col bg-cover relative'>
                                        <div className='flex justify-between w-55 md:w-70'>
                                            <div className="title text-md text-blue-400 font-bold">{hcktn.name}</div>
                                            <div className="year flex items-center text-sm h-6 bg-gray-500 px-2 rounded-2xl text-wrap">{hcktn.year}</div>
                                        </div>
                                        <div className="desc flex my-1">{hcktn.desc && hcktn.desc.length > 5 ? hcktn.desc.slice(0, 70) + '...' : hcktn.desc}</div>
                                        <button onClick={(e) => handleModal(hcktn)} className='lg:opacity-0 group-hover:opacity-100 bg-blue-400 text-sm px-3 py-1 rounded-2xl absolute bottom-0 right-0 duration-200 cursor-pointer'>View</button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ">
                    <div className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                            {modalData.name}
                        </h3>

                        <p className="text-sm text-gray-300 mb-4">
                            {modalData.desc}
                        </p>

                        {modalData.img && (
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={modalData.img}
                                    alt={modalData.name || "Modal image"}
                                    width={600}
                                    height={250}
                                    className="rounded-md object-cover"
                                />
                                
                            </div>
                        )}

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

export default AchievEx