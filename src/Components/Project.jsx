'use client'
import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { JsonDataContext } from "@/app/Context/JsonProvider";
import Link from 'next/link';

const ProjectCarousel = () => {
    const allApiData = useContext(JsonDataContext);
    const projects = allApiData?.projects || [];
    const totalProjects = projects.length;

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(false);

    const [isClient, setIsClient] = useState(false);

    const handleModal = (event) => {
        setModalData(event);
        setOpen(true);
    }

    useEffect(() => {
        setIsClient(true);
    }, []);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const cardWidth = 345;
    const transitionDuration = 300;
    const slideInterval = 3000;

    const extendedProjects = [...projects, ...projects]; // 🔁 duplicated list

    // Next Slide
    const handleNext = () => {
        if (window.innerWidth < 768) return; // disable loop in mobile
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => prevIndex + 1);
    };

    // Prev Slide
    const handlePrev = () => {
        if (window.innerWidth < 768) return;
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => prevIndex - 1);
    };

    // Auto Slide (only desktop)
    useEffect(() => {
        if (window.innerWidth < 768) return;
        const timer = setInterval(() => {
            handleNext();
        }, slideInterval);
        return () => clearInterval(timer);
    }, []);

    // Infinite looping fix
    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);

                // If we reach end of first set → reset instantly (no transition)
                if (activeIndex >= projects.length) {
                    setIsTransitioning(false);
                    setActiveIndex(0);
                }
                // If we go back before 0 → reset to end
                if (activeIndex < 0) {
                    setIsTransitioning(false);
                    setActiveIndex(projects.length - 1);
                }
            }, transitionDuration);
            return () => clearTimeout(timer);
        }
    }, [activeIndex, isTransitioning, projects.length]);

    // Transform only on desktop
    const translateStyle =
        isClient && window.innerWidth >= 768
            ? {
                transform: `translateX(-${activeIndex * cardWidth}px)`,
                transition: isTransitioning
                    ? `transform ${transitionDuration}ms linear`
                    : "none", // no jump visible
            }
            : {};

    return (
        <div className="projects flex flex-col md:m-10" id='projects'>
            <div className="flex justify-center w-full">
                <h1 className='text-center text-3xl font-bold border-b-4 w-fit hover:w-40 relative border-b-blue-500 my-5'>Projects</h1>
            </div>

            <div className="relative py-5 ">
                {/* Navigation Arrows (visible only on md screens and up) */}
                <div className='flex justify-between items-center px-10 md:px-18 w-full absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex'>
                    <RiArrowLeftSLine
                        className='text-4xl hover:shadow-lg shadow-blue-400 rounded-full bg-white/50 backdrop-blur-sm p-1 cursor-pointer'
                        onClick={handlePrev}
                    />
                    <RiArrowRightSLine
                        className='text-4xl hover:shadow-lg shadow-blue-400 rounded-full bg-white/50 backdrop-blur-sm p-1 cursor-pointer'
                        onClick={handleNext}
                    />
                </div>

                {/* Carousel Container */}
                <div className="overflow-hidden md:mx-20 md:mask-x-from-90% px-6 py-2">
                    <div
                        className={`flex flex-wrap gap-5 justify-center md:justify-start md:flex-nowrap transition-transform duration-${transitionDuration} ease-in-out`}
                        style={translateStyle}
                    >
                        {(isClient && window.innerWidth >= 768 ? projects.concat(projects) : projects).map((project, index) => (
                            <div
                                key={`${project.id}-${index}`}
                                className="card flex flex-shrink-0 flex-col gap-3 shadow-md/30 hover:shadow-lg/40 border border-blue-400/25 shadow-blue-400 p-2 rounded-lg w-2xs md:w-2xs md:mr-5 transform hover:-translate-y-2 duration-150"
                            >
                                <div className="image flex justify-center relative items-start h-50 rounded">
                                    <Image
                                        alt="img"
                                        className="rounded h-fit w-fit"
                                        src={project.img}
                                        height={150}
                                        width={250}
                                    />
                                    <span className="bg-gray-300 text-black text-sm px-4 py-0.5 rounded-2xl absolute bottom-3 right-3">
                                        {project.year}
                                    </span>
                                </div>
                                <div className="data p-2 pb-0 flex flex-col mb-3">
                                    <div className="heading text-xl text-blue-400 font-bold mb-2">
                                        {project.name && project.name.length > 5
                                            ? project.name.slice(0, 20) + "..."
                                            : project.name}
                                    </div>
                                    <div className="desc">
                                        {project.desc && project.desc.length > 5
                                            ? project.desc.slice(0, 100) + "..."
                                            : project.desc}
                                    </div>
                                    <div className="flex justify-between mt-3 bottom-1">
                                        <button
                                            onClick={() => handleModal(project)}
                                            className="bg-gradient-to-r from-blue-500 to-blue-400 px-4 py-1 rounded cursor-pointer hover:bg-blue-300"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm transition-opacity duration-300 ">
                    <div className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6 mb-5">
                        <div className="flex flex-wrap justify-between text-2xl font-semibold text-white mb-3 gap-2">
                            {modalData.name}
                            <div className='flex flex-wrap gap-2 h-fit'>
                                {modalData.tech.map((techs, index) =>
                                    (<span key={index} className='bg-black shadow shadow-blue-400 hover:shadow-md hover:scale-105 duration-110 px-3 py-1 text-sm rounded-2xl font-light'>{techs}</span>)
                                )}
                            </div>
                        </div>

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

                        <div className="flex justify-end gap-3 mt-4">
                            <Link href={modalData.link} className='bg-gradient-to-r from-blue-500 to-blue-400 px-4 py-1 rounded cursor-pointer hover:bg-blue-300'>Visit</Link>
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-1 rounded bg-red-500 cursor-pointer text-white hover:bg-red-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCarousel;
