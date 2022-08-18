import React from 'react'
import MySkills from '../AboutMe/MySkills'
import Profile from '../AboutMe/Profile'
import ProfileDetails from '../AboutMe/ProfileDetails'
import '../assets/css/about.css'

const AboutMe = () => {
  return (
    <div className='Profile-details container'>
      <Profile />
      <ProfileDetails pr/>
      <MySkills />
    </div>
  )
}

export default AboutMe