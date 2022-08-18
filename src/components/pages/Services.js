import React from 'react'
import '../assets/css/services.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Training from '../assets/Services/Training.svg'
import ITConsultant from '../assets/Services/ITConsultant.svg'
import ResponsiveWD from '../assets/Services/ResponsiveWD.svg'
import DatabaseDev from '../assets/Services/DatabaseDev.svg'
import CustomerSDev from '../assets/Services/CustomerSDev.svg'
import SoftwareTesting from '../assets/Services/SoftwareTesting.svg'
import ServicesRenderedItems from '../Services/ServicesRenderedItems'

const Services = () => {
  const servicesDetail = {
    itemOne: {
      itemImage: Training,
      itemAltTxt: 'Service-item | Training',
      itemHeader: 'Training',
      itemContent: 'I offer instructor-led training in a way that fits with the way you work.'
    },
    itemTwo: {
      itemImage: ITConsultant,
      itemAltTxt: 'Service-item | IT Consulting',
      itemHeader: 'IT Consulting',
      itemContent: 'I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.'
    },
    itemThree: {
      itemImage: ResponsiveWD,
      itemAltTxt: 'Service-item | Responsive Web Design',
      itemHeader: 'Responsive Web Design',
      itemContent: 'I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better.'
    },
    itemFour: {
      itemImage: DatabaseDev,
      itemAltTxt: 'Service-item | Customer Software Development',
      itemHeader: 'Customer Software Development',
      itemContent: 'With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization.'
    },
    itemFive: {
      itemImage: CustomerSDev,
      itemAltTxt: 'Service-item | Customer Software Development',
      itemHeader: 'Customer Software Development',
      itemContent: 'I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems.'
    },
    itemSix: {
      itemImage: SoftwareTesting,
      itemAltTxt: 'Service-item | Software Testing',
      itemHeader: 'Software Testing',
      itemContent: 'I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly. '
    }
  }
  return (
    <div className='container Services-page'>
        <h1>Services I Render</h1>
        <p className='Services-page-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>

        <div className='service-rendered-items-container'>
        <ServicesRenderedItems altText = {servicesDetail.itemOne.itemAltTxt} serviceIcon = {servicesDetail.itemOne.itemImage} serviceItemHeader = {servicesDetail.itemOne.itemHeader} serviceItemContent = {servicesDetail.itemOne.itemContent}/>
        <ServicesRenderedItems altText = {servicesDetail.itemTwo.itemAltTxt} serviceIcon = {servicesDetail.itemTwo.itemImage} serviceItemHeader = {servicesDetail.itemTwo.itemHeader} serviceItemContent = {servicesDetail.itemTwo.itemContent} />
        <ServicesRenderedItems altText = {servicesDetail.itemThree.itemAltTxt} serviceIcon = {servicesDetail.itemThree.itemImage} serviceItemHeader = {servicesDetail.itemThree.itemHeader} serviceItemContent = {servicesDetail.itemThree.itemContent} />
        <ServicesRenderedItems altText = {servicesDetail.itemFour.itemAltTxt} serviceIcon = {servicesDetail.itemFour.itemImage} serviceItemHeader = {servicesDetail.itemFour.itemHeader} serviceItemContent = {servicesDetail.itemFour.itemContent} />
        <ServicesRenderedItems altText = {servicesDetail.itemFive.itemAltTxt} serviceIcon = {servicesDetail.itemFive.itemImage} serviceItemHeader = {servicesDetail.itemFive.itemHeader} serviceItemContent = {servicesDetail.itemFive.itemContent} />
        <ServicesRenderedItems altText = {servicesDetail.itemSix.itemAltTxt} serviceIcon = {servicesDetail.itemSix.itemImage} serviceItemHeader = {servicesDetail.itemSix.itemHeader} serviceItemContent = {servicesDetail.itemSix.itemContent} />
        </div>

    </div>
  )
}

export default Services