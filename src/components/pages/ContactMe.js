import React from 'react'
import ContactDetails from '../ContactMe/ContactDetails'
import ContactForm from '../ContactMe/ContactForm'
import '../assets/css/contactme.css'

const ContactMe = () => {
  return (
    <div className='contact-me-container container'>
      <ContactDetails />
      <ContactForm />
    </div>
  )
}

export default ContactMe