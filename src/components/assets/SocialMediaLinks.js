import {Link} from 'react-router-dom'
import Twitter from '../assets/twitter.svg'
import LinkedIn from '../assets/linkedinlinkedinIcon.svg'

import React from 'react'

const SocialMediaLinks = ({profileLinkClass}) => {
  return (
    <>
        <div className= {profileLinkClass}>
            <Link to = "#"> <img src = {Twitter} alt = {'Icon to twitter profile'}/> </Link>
            <Link to = "#"> <img src = {LinkedIn} alt = {'Icon to linkedIn profile'}/> </Link>
        </div>
    </>
  )
}

export default SocialMediaLinks