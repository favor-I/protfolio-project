import React from 'react'
import SocialMediaLinks from '../assets/SocialMediaLinks'

const ProfileDetails = () => {
  return (
    <div className='Profile-text-in-details'>
        <h3>About Me</h3>
        <p>Favour Ifeanacho is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to  solve real world problems.</p>
        <SocialMediaLinks profileLinkClass={'profile-text-in-details-social-link'} />
    </div>
  )
}

export default ProfileDetails