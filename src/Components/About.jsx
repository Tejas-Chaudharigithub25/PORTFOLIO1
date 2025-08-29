'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import Photo from '@/app/photo.png'
import { JsonDataContext } from '@/app/Context/JsonProvider'
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbBrandCpp } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { FaJava, FaReact, FaLaravel, FaJsSquare } from "react-icons/fa";
import { SiMysql, SiMongodb, SiPython, SiExpress, SiPhp, SiJquery, SiCss3 } from "react-icons/si";

const About = () => {
  const allApiData = useContext(JsonDataContext);
  const iconMap = {
    TiHtml5,
    FaBootstrap,
    FaJava,
    FaReact,
    FaLaravel,
    FaJsSquare,
    FaNode,
    RiTailwindCssFill,
    LiaLaptopCodeSolid,
    TbBrandCpp,
    SiMysql,
    SiMongodb,
    SiPython,
    SiExpress,
    SiPhp,
    SiJquery,
    SiCss3,
  };
  return (
    <>
      <div className="about flex flex-col py-5 mx-4 md:mx-30 my-5 overflow-x-hidden" id='about'>
        <div className="title flex flex-col items-center gap-4 mt-5 mb-7" data-aos="fade-up">
          <p className='font-bold text-3xl text-center text-white border-b-4 w-fit hover:w-50 border-b-[#0f98f6]'>About Me</p>
          <p className='text-lg text-center text-white'>Hi, I'm a passionate and results-driven <span className='text-blue-400 font-bold'>Web Developer and Softeware Developer</span> with a knack for turning problems into elegant solutions. With a focus on <span className='text-blue-300 font-bold'>HTML, CSS, JavaScript, PHP, Tailwind, React js, Node js, (MERN Stack) Python, UI/UX design</span>, I enjoy building projects that are not only functional but also intuitive and impactful.</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 text-center mb-5" data-aos="fade-up">
          <Image className='rounded-full shadow-sm active:scale-105 active:shadow-md/80 active:border-4 active:border-blue-400 md:hover:scale-105 md:hover:shadow-md/80 md:hover:border-4 md:hover:border-blue-400 shadow-blue-400 duration-300' src={Photo} width={230} height={230} alt='about' />
          <p className='md:mx-50 text-lg text-white'>I'm a Tejas Chaudhari passionate about Web Development Profession. With a focus on PHP and MERN, I specialize in building projects that are both functional and impactful.</p>
        </div>

        {/* education */}
        <div className='flex flex-col my-5 md:mx-10'>
          <div className="title flex w-fit text-2xl text-white font-bold mb-3 border-b-3 border-b-blue-400">
            Education
          </div>
          <div className="education-card flex flex-wrap md:flex-nowrap gap-3 justify-center">
            {allApiData?.education.map((degree) => {
              return (
                <div
                  key={degree.id}
                  className="card flex flex-col w-100 gap-3 p-3 my-3 border text-white border-blue-400/25 shadow-md/50 shadow-blue-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded bg-gradient-to-t from-blue-500/10"
                  data-aos="fade-up-left"
                >
                  <div className='flex justify-between items-center'>
                    <div className="degree flex font-bold">
                      {degree.name}
                    </div>
                    <span className='flex items-center bg-[#0f98f6] text-sm px-2 h-6 py-1 rounded-2xl'>{degree.marks}</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className="college">
                      {degree.university}
                    </div>
                    <span className='year text-gray-400 px-3'>{degree.year}</span>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>

        {/* skills */}
        <div className='flex flex-col md:mx-10 mb-10'>
          <div className="title flex w-fit text-2xl text-white font-bold mb-5 border-b-3 border-b-blue-400">
            Skills
          </div>
          <div className="education-card flex flex-wrap justify-center items-center md:mx-20 w-fit gap-3 gap-y-5" data-aos="fade-right">
            {allApiData?.skills.map((skill) => {
              const Icon = iconMap[skill.img];

              return (
                <div key={skill.id} className="group flex items-center text-white gap-2 px-3 py-1 rounded-2xl text-sm shadow-sm/50 shadow-blue-400 active:shadow-md active:bg-[#0f98f6] active:text-black md:hover:shadow-md transform md:hover:bg-[#0f98f6] md:hover:text-black hover:border-0 duration-100 bg-gradient-to-t from-blue-500/5">
                  <div className="w-0 h-0 overflow-hidden group-active:w-5 group-active:h-5 md:group-hover:w-5 md:group-hover:h-5 transition-all duration-300">
                    {Icon && <Icon className="w-5 h-5 text-black" />}
                  </div>
                  <span className='font-bold'>{skill.name}</span>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default About