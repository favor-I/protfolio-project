import React from 'react'
import SocialMediaLinks from '../assets/SocialMediaLinks'
import Contact from './Contact'
import MailIcon from '../ContactMe/Svgs/mail.svg'
import PhoneIcon from '../ContactMe/Svgs/phone.svg'

const ContactDetails = () => {
  return (
    <div className='contact-me-details-container'>
        <h2>Get In Touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
        <div>
            <SocialMediaLinks /> <p>-Favour.Io</p>
        </div>
        <Contact contactIcon ={MailIcon} iconAlt ='mail icon for details ' contactValue ='favour.frank3@gmail.com' details = 'Send a mail anytime!'/>
        <Contact contactIcon ={PhoneIcon} iconAlt ='phone icon for pgone details' contactValue ='09028416176' details = 'Just one call away!'/>
    </div>
  )
}

export default ContactDetails