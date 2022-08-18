import React from 'react'
import ProfileIMG from './ProfileIMG'
import SocialMediaLinks from '../assets/SocialMediaLinks'

const Profile = () => {
  return (
    <div className='profile-text-picture'>
        <div className='Profile-text'>
            <h4>Hi There</h4>
            <h3>I AM FAVOUR I</h3>
            <h2>A Top-notch Developer and Photographer.</h2>
            <SocialMediaLinks profileLinkClass={'profile-text-picture-social-links'} />
        </div>
        <ProfileIMG />
        
    </div>
  )
}

export default Profile