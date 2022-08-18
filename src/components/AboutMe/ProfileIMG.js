import React from 'react'
import ProfilePicture from '../assets/profilePicture.png'

const ProfileIMG = () => {
  return (
    <div className='Profile-pic'>
        <img src={ProfilePicture} alt = 'Profile Pic' />
    </div>
  )
}

export default ProfileIMG