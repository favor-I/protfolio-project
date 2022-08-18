import React from 'react';
import { 
  Link
} from "react-router-dom";
import './assets/css/navbar.css'
import SocialMediaLinks from './assets/SocialMediaLinks';

const HeaderTitle = ({title}) => {
  return (
    <>
      <h3>{title}</h3>
    </>
  );
}

const HeaderLink = ({handleAboutMe, handleServices, handleProjects, handleContactMe}) => {
  return(
    <ul>
      {/* <li> <Link to="/">Home</Link> </li> */}
      <li onClick={handleAboutMe}> About Me </li>
      <li onClick={handleServices}> Services </li>
      <li onClick={handleProjects}> Projects </li>
      <li onClick={handleContactMe}> Contact Me </li>
    </ul>
  );
}

const Navbar = ({handleAboutMe, handleServices, handleProjects, handleContactMe}) => {
  return (
    <div className='nav'>
        <Link to = "/"> <HeaderTitle title={'Favour I'} /> </Link>
        <HeaderLink handleAboutMe={handleAboutMe} handleServices = {handleServices} handleProjects = {handleProjects} handleContactMe = {handleContactMe}/>
        <SocialMediaLinks profileLinkClass={'nav-bar-socials'}/>
    </div>
  )
}

export default Navbar