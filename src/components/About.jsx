import React from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import resumeFile from "../assets/resume.pdf"
import bg from '../assets/bg-main.jpg'
import profile from '../assets/Profile.jpg'
import { FaLine } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 
                            grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

                <div className="flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative group">

                        <div className="absolute inset-0 rounded-3xl 
                        bg-gradient-to-r from-purple-500 to-pink-500 
                        blur-2xl opacity-30 group-hover:opacity-60 transition"></div>

                        <img
                            src={profile}
                            alt="profile"
                            className="relative w-60 sm:w-72 md:w-96 rounded-3xl 
                            border-4 border-white shadow-2xl object-cover"
                        />
                    </div>
                </div>


                <div className="flex flex-col gap-6 text-white text-center md:text-left order-2 md:order-1">

                    <h1 className="text-lg sm:text-xl font-semibold">
                        Hello I'm
                    </h1>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold 
                                   bg-gradient-to-r from-purple-500 to-pink-500 
                                   bg-clip-text text-transparent">
                        Pakin Budpho
                    </h1>

                    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Back-end Developer
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed 
                                  text-gray-200 text-justify md:text-left">
                        Backend Developer with a strong interest in designing and developing scalable
                        server-side applications and RESTful APIs. Experienced in working with both SQL
                        and NoSQL databases, and writing clean, maintainable, and efficient code.
                        Familiar with OOP, design patterns, and best practices in software development.
                        A fast learner who is eager to explore new technologies and collaborate with
                        cross-functional teams to build reliable and high-performance systems.
                    </p>


                    <div className="flex flex-wrap justify-center md:justify-start gap-4">

                        <a
                            href="#Projects"
                            className="flex items-center justify-center gap-2 
                            px-6 py-3 rounded-full font-semibold 
                            bg-gradient-to-r from-purple-500 to-pink-500
                            hover:scale-105 transition shadow-lg"
                        >
                            ดูผลงาน
                        </a>

                        <a
                            href={resumeFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full border border-pink-500 
                            hover:bg-pink-500 hover:text-white transition"
                        >
                            Resume
                        </a>
                        

                        <a
                            href="https://github.com/PakinB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 
                            px-6 py-3 rounded-full font-semibold 
                            bg-gradient-to-r from-purple-500 to-pink-500
                            hover:scale-105 transition shadow-lg"
                        >
                            <FaGithub />
                            Github
                        </a>
                    </div>


                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="#Contact"
                            className="size-12 flex items-center justify-center 
                            rounded-full bg-gradient-to-r from-purple-500 to-pink-500
                            hover:scale-110 transition"
                        >
                            <PhoneIcon className='w-5 h-5 text-white' />
                        </a>

                        <a
                            href="#Contact"
                            className="size-12 flex items-center justify-center 
                            rounded-full bg-gradient-to-r from-purple-500 to-pink-500
                            hover:scale-110 transition"
                        >
                            <EnvelopeIcon className="w-5 h-5 text-white" />
                        </a>

                        <a
                            href="https://line.me/ti/p/@goddeadz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="size-12 flex items-center justify-center 
                            rounded-full bg-gradient-to-r from-purple-500 to-pink-500
                            hover:scale-110 transition"
                        >
                            <FaLine className="text-white text-xl" />
                        </a>
                    </div>
                </div>
            </div>


            <a
                href="#Projects"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ChevronDoubleDownIcon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
            </a>
        </div>
    )
}

export default About
