import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000} />
      <Navbar />

      <section id="About">
        <About />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Contact">
        <Contact />
      </section>

    </div>
  )
}


export default App