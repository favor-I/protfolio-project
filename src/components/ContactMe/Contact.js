import React from 'react'

const Contact = ({contactIcon, iconAlt, contactValue, details }) => {
    return (
        <div className = 'skill-item'>
            <img src={contactIcon} alt = {iconAlt} />
            <div>
                <h5>{contactValue}</h5>
                <i>{details}</i>
            </div>
        </div>
      )
}

export default Contact