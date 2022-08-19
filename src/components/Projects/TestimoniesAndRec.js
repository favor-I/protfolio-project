import React from 'react'
import clientImage from '../assets/profilePicture.png'
import ClientTestimony from './ClientTestimony'

const TestimoniesAndRec = () => {
  return (
    <div className='testimony-section container'>
        <div className='testimony-section-header'>
            <h2>Testimonies & Recommendations</h2>
        </div>
        <div className='testimonies-container'>
            <ClientTestimony icon={clientImage} iconAlt='Some Image' testifier='Testifier' testimony='Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.'/>
            <ClientTestimony icon={clientImage} iconAlt='Some Image' testifier='Testifier' testimony='Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.'/>
            <ClientTestimony icon={clientImage} iconAlt='Some Image' testifier='Testifier' testimony='Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.'/>
            <ClientTestimony icon={clientImage} iconAlt='Some Image' testifier='Testifier' testimony='Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.'/>
        </div>
    </div>
  )
}

export default TestimoniesAndRec