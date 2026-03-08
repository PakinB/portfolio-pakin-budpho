import React, { useState } from "react";
import projectPort from "../assets/project1.png"
import projectTask from "../assets/projectTask.png";
import projectBooking from "../assets/projectBooking.png"
import projecEcom from "../assets/projectEcom.png"
const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const projectData = [
    {
      title: "E-Commerce Website",
      desc: "ระบบร้านค้าเสื้อออนไลน์ครบวงจร มีระบบตะกร้า สั่งซื้อ ชำระเงิน และ dashboard สำหรับ admin with MERN",
      website: "https://e-commerce-system-website.vercel.app/",
      github: "https://github.com/PakinB/e-commerce-system",
      image: projecEcom,
      tech: ["React + Tailwind", "Node.js", "Express", "MongoDB", "React-dom", "Axios", "bcript"]
    },
    {
      title: "Task Management System Website",
      desc: "ระบบจัดการงาน Admin สามารถเพิ่ม ลบ แก้ไข และติดตามสถานะงานของพนักงานได้ Member สามารถติดตามและอัพเดตงานที่ได้รับมอบหมายได้ with MERN",
      website: "https://task-management-system-eight-liard.vercel.app/",
      github: "https://github.com/PakinB/task-management-system",
      image: projectTask,
      tech: ["React", "Express", "MongoDB", "NodeJS", "TailWindCSS", "React-dom,Axios,Moment"]
    },
    {
      title: "Booking System Website",
      desc: "เว็บไซต์จองตั๋วงาน Concert, Event ซึ่งมีระบบ Dashboard แอดมินดูได้ว่ามีใครจองตั๋วทั้งหมดกี่ใบมีคนจองกี่ใบและสามารถเพิ่ม-ลบ-แก้ไข Event ได้ with MERN",
      website: "https://booking-system-gamma-wheat.vercel.app/",
      github: "https://github.com/PakinB/booking-system",
      image: projectBooking,
      tech: ["React", "TailwindCSS", "MongoDB", "NodeJS", "React-dom, Axios"]
    },
    {
      title: "Portfolio Website",
      desc: "เว็บไซต์แนะนำตัว พร้อมแสดงผลงาน และระบบติดต่อผ่าน EmailJS",
      website: "https://pakin-budpho.xyz/",
      github: "https://github.com/PakinB/portfolio-pakin-budpho",
      image: projectPort,
      tech: ["React", "TailwindCSS", "EmailJS"]
    },
    // {
    //   title: "Flutter App",
    //   desc: "ระบบจัดการงาน สามารถเพิ่ม ลบ แก้ไข และติดตามสถานะงานได้",
    //   website: "https://your-taskapp.com",
    //   github: "https://github.com/yourusername/taskapp",
    //   tech: ["React", "Express", "MongoDB"]
    // }
  ];

  return (
    <div className="min-h-screen bg-[#0c0b12] pt-20 text-white">


      <div className="text-center mb-20 px-6">
        <h1 className="text-4xl md:text-7xl font-bold">ผลงาน & โปรเจ็คก์</h1>
        <h2 className="text-xl md:text-4xl mt-4">ผลงานที่เคยทำ</h2>
      </div>


      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">


          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1925] rounded-2xl overflow-hidden shadow-xl 
                         hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >


              <div className="h-52 bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>


              <div className="p-6 flex flex-col gap-4">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>


                <div className="flex gap-3 mt-2">

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-full 
                               bg-gradient-to-r from-purple-500 to-pink-500
                               hover:scale-105 transition font-semibold"
                  >
                    ชมเว็บไซต์
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-full 
                               border border-purple-500 text-purple-400
                               hover:bg-purple-500 hover:text-white transition font-semibold"
                  >
                    Github
                  </a>

                </div>

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="text-sm text-gray-400 hover:text-purple-400 transition mt-2"
                >
                  {openIndex === index
                    ? "ซ่อนรายละเอียด ↑"
                    : "ดูรายละเอียดเพิ่มเติม ↓"}
                </button>


                <div
                  className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-60 mt-4" : "max-h-0"
                    }`}
                >
                  <div className="bg-[#11101a] p-4 rounded-xl text-sm text-gray-300">
                    <p className="mb-2 font-semibold">Tech Stack:</p>
                    <ul className="list-disc ml-5 space-y-1">
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Projects;
