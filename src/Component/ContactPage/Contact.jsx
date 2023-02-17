import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {





  return (
  
<section id="contact" className="contact">
  <div>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>
  </div>
  <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
      
       <MdOutlineEmail className="contact__option-icon"/>
        <h4>Email</h4>
        <h5>ssnehalsukhadeve@gmail</h5>
        <a href="mailto:ssnehalsukhadeve@gmail.com" target="_blank" >Send Message</a>
        
      </article>
      <article className="contact__option">
       <RiMessengerLine className="contact__option-icon"/>
        <h4>Messenger</h4>
        <h5>snehal_sukhadeve</h5>
        <a href="www.facebook.com" target="_blank">Send Message</a>
      </article>
      <article className="contact__option">
       <BsWhatsapp className="contact__option-icon" />
        <h4>WhatsApp</h4>
        <h5>9765179473</h5>
        <a href="https://api.whatsaap.com/send?phone=919765179473" target="_blank" >Send Message</a>
      </article>
    
      </div>
      <form action="https://formspree.io/f/xpzedaqv" method="POST">
        <input type="text" name="name" placeholder="Enter Name" required />
        <input type="email" name="email" placeholder="Enter Email" required />
        <textarea name="message" rows="7" placeholder="Enter Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
  
      </form>
    </div>
   
 
   
</section>


    
  )
}

export default Contact