import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className="contactPage" id='contact'>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDescription">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your name" />
        <input type="email" className="email" placeholder="Email Id" />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form>
      <div className="links">
        <a href="https://www.linkedin.com/in/arpit-ithub/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#ffff00c6"
              className="link"
            />
          </a>
          <a
            href="https://github.com/arpit-ithub"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#ffff00c6"
              className="link"
            />
          </a>         
      </div>
    </div>
  )
}

export default Contact
