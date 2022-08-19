import React from 'react'
import { FormGroup, Button } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <div>
      <form className='form contact-me-form'>
        <h3>Meed A Service?</h3>
        <h2>Send A Message</h2>
        <FormGroup>
          <input type = {'text'} placeholder='Enter Full name' ></input>
        </FormGroup>
        <FormGroup>
          <input type={'text'} placeholder='Enter email address' ></input>
        </FormGroup>
        <FormGroup>
        <input placeholder='Write Message' ></input>
        </FormGroup>
        <Button>Send Message</Button>

      </form>
    </div>
  )
}

export default ContactForm