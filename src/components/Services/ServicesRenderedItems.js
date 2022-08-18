import React from 'react'

const ServicesRenderedItems = ({serviceIcon, altText, serviceItemHeader, serviceItemContent}) => {
  return (
    <div className='Services-rendered-items'>
        <img className ='service-item-img' src= {serviceIcon} alt={altText}></img>
        <h4 className = 'service-item-header' >{serviceItemHeader}</h4>
        <p className = 'service-item-content'>{serviceItemContent}</p>
    </div>
  )
}

export default ServicesRenderedItems