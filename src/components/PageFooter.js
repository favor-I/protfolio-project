import React from 'react'
import footerLine from './assets/footerline.svg'
import Copyright from "./assets/copyright.svg"
import "../components/assets/css/page-footer.css"

const Name = () => {
  return (
    <div>
      <h2 className='footer-name'>Favour Ifeanacho<span className='footer-name-period'>.</span></h2>
      <img className='footer-line' src={footerLine} alt='Footer line' />
    </div>
  );
}
const Socials = () => {
  return (
    <div>icons</div>
  )
}

const PageFooter = () => {
  return (
    <footer className='page-footer'>
      <div>
        <Name />
        <Socials />
        <div>
        <p>Copyright <img src={Copyright} alt = "Copyright icon" /> 2022 | All rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter