import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'
import Services from './Services'
import { useRef } from 'react'


const Home = () => {
    
    const aboutMeRef = useRef(null)
    const servicesRef = useRef(null)
    const projectRef = useRef(null)
    const contactMeRef = useRef(null)



    const handleAboutMe = () => {
        aboutMeRef.current.scrollIntoView()
    }
    const handleServices = () => {
        servicesRef.current.scrollIntoView()
      }

    const handleProjects = () => {
        projectRef.current.scrollIntoView()
    }
    const handleContactMe = () => {
        contactMeRef.current.scrollIntoView()
    }

  return (
    <>
    <Navbar handleAboutMe={handleAboutMe} handleServices = {handleServices} handleProjects = {handleProjects} handleContactMe = {handleContactMe}/>
        <div className="">
            <div ref={aboutMeRef}> <AboutMe /> </div> 
            <div ref={servicesRef}> <Services /> </div>
            <div ref={projectRef}> <Projects /> </div>
            <div ref={contactMeRef}> <ContactMe /> </div>
        </div>
    <Footer />
    </>
  )
}

export default Home