import React from 'react'
import '../assets/css/project.css'
import Milestones from '../Projects/Milestones'
import TestimoniesAndRec from '../Projects/TestimoniesAndRec'

const Projects = () => {
  return (
    <div className='projects-bg container'>
    <Milestones />
    <TestimoniesAndRec />
    </div>
  )
}

export default Projects