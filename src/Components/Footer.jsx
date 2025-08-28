import Link from 'next/link';
import React from 'react'
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { TbBrandGmail } from "react-icons/tb";

export const Footer = () => {
    return (
        <>
            <div className="footer bg-blue-500/10 flex flex-col pt-4 overflow-hidden">
                <div className="footer-1 flex flex-col gap-4 items-center">
                    <div className='flex flex-col items-center justify-center my-5 mx-2'>
                        <p className='text-center text-3xl my-3' data-aos="fade-left">Want to Connect with me?</p>
                        <p className='text-center'>Connect me on following apps</p>
                        <div className="icons flex justify-center gap-15 mt-5 w-full">
                            <Link href={'https://www.linkedin.com/in/tejas-chaudhari-792113230'} data-aos="fade-up"><LuLinkedin className='flex text-blue-400 w-6 h-6 p-0.5 rounded text-sm hover:-translate-y-1 hover:bg-blue-500 hover:text-black duration-200' /></Link>
                            <Link href={'https://github.com/Tejas-Chaudharigithub25'} data-aos="fade-up"><LuGithub className='flex text-white w-6 h-6 p-0.5 rounded text-sm text- hover:-translate-y-1 hover:bg-white hover:text-black duration-200' /></Link>
                            <Link href={'mailto:tejaschaudhari00001@gmail.com'} data-aos="fade-up"><TbBrandGmail className='flex text-red-400 w-6 h-6 rounded text-sm hover:-translate-y-1 hover:bg-red-500 hover:text-black duration-200' /></Link>
                        </div>
                    </div>
                    <hr className='text-blue-400 w-80 md:w-200 mb-5' />
                    <div className="flex flex-wrap justify-start md:justify-evenly mb-10 gap-10 md:gap-40 w-fit" data-aos="fade-up">
                        <div className='flex flex-col items-center w-full md:w-fit'>
                            <h4 className="text-blue-400 font-bold mb-2 text-3xl">Tejas Chaudhari</h4>
                        </div>
                        <div className='mx-auto'>
                            <h4 className="text-blue-400 border-b-2 mb-1 text-lg">Quick Links</h4>
                            <p className='ms-3 hover:text-blue-400'><Link href="#home">Home</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="#project">Projects</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="#about">About</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="#A&E">Acievements</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="#contact">connect</Link></p>
                        </div>
                        {/* <div>
                            <h4 className="text-blue-400 border-b-2 mb-1 text-lg">Projects</h4>
                            <p className='ms-3 hover:text-blue-400'><Link href="w-full">Home</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="w-full">Projects</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="w-full">About</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="w-full">Certifications</Link></p>
                            <p className='ms-3 hover:text-blue-400'><Link href="w-full">connect</Link></p>
                        </div> */}
                        <div className='flex flex-col flex-wrap items-center w-full md:w-fit'>
                            <h4 className="text-blue-400 font-bold mb-2 text-2xl">Contact</h4>
                            <Link href='tel://8275671462' className='hover:text-blue-500'><p>+8275671462</p></Link>
                            <div className="icons flex justify-center item gap-8 mt-5 mx-1 w-full">
                                <Link href={'https://www.linkedin.com/in/tejas-chaudhari-792113230'}><LuLinkedin className='flex text-blue-400 w-6 h-6 p-0.5 rounded text-sm hover:-translate-y-1 hover:shadow-sm/75 hover:shadow-blue-400 duration-200' /></Link>
                                <Link href={'https://github.com/Tejas-Chaudharigithub25'}><LuGithub className='flex text-white w-6 h-6 p-0.5 rounded text-sm text- hover:-translate-y-1 hover:shadow-sm/75 hover:shadow-blue-400 duration-200' /></Link>
                                <Link href={'mailto:tejaschaudhari00001@gmail.com'}><TbBrandGmail className='flex text-red-400 w-6 h-6 p-0.5 rounded text-sm hover:-translate-y-1 hover:shadow-sm/75 hover:shadow-blue-400 duration-200' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-around items-center bg-blue-950/30 p-4  space-y-4 sm:space-y-0">
                    {/* Left section: Copyright */}
                    <div className="text-sm md:text-base">
                        © {new Date().toDateString()} Tejas Chaudhari.
                    </div>

                    {/* Center section: Navigation links */}
                    <div className="text-sm md:text-base">
                        Made with <span className='text-blue-400 font-bold'>😎🧑🏻‍💻 Tejas Chaudhari</span>
                    </div>
                </div>
            </div>
        </>
    )
}
