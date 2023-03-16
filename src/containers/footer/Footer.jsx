import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <section aria-label='Footer' className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h2 className="gradient__text">Join the cutting-edge world of conversational AI and experience the power of ChatGPT before others</h2>
    </div>

    <div className="gpt3__footer-btn">
      <button>Request Early Access</button>
    </div>

    <div className="gpt3__footer-links">
      <nav className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>BrighterFuture Inc, <br /> All Rights Reserved</p>
      </nav>
      <nav className="gpt3__footer-links_div" aria-label="Links">
        <h3>Links</h3>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </nav>
      <nav className="gpt3__footer-links_div" aria-label="About">
        <h3>Company</h3>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </nav>
      <nav className="gpt3__footer-links_div" aria-label="Company details">
        <h3>Get in touch</h3>
        <p>1234 Elm Street Riverside, CA 92501</p>
        <p>+1 (555) 123-4567</p>
        <p>info@brighterfuture.com</p>
      </nav>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 brighterfuture. All rights reserved.</p>
    </div>
  </section>
  )
}

export default Footer