import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "NodeJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Skills = () => {
  return (
    <div className='min-h-screen bg-[#101017] pt-24 px-6'>

      <div className="text-center mb-20">
        <h1 className="text-7xl text-white font-bold">Skills</h1>
        <h2 className="text-4xl text-gray-400 mt-4">Technical Skills</h2>
      </div>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-6 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center gap-3 hover:scale-110 transition duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14"
            />
            <p className="text-sm text-gray-400">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className='text-center mt-24 px-6 md:px-20 pb-16'>
        <h1 className='text-4xl text-white font-bold'>Development</h1>
        <p className='text-xl text-gray-400 mt-4'>
          Authentication (JWT, OAuth, bcrypt),<br className="hidden md:block"/>
          RESTful API,<br className="hidden md:block"/>
          Database Relationship,<br className="hidden md:block"/>
          Middleware,<br className="hidden md:block"/>
          Error Handling,<br className="hidden md:block"/>
          Layer Controller / Service / Route,<br className="hidden md:block"/>
          MERN Stack (MongoDB, Express, React, NodeJs),<br className="hidden md:block"/>
          Secure Password Handling
        </p>
      </div>

    </div>
  )
}

export default Skills
