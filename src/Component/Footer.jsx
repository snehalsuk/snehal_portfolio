import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    
  return (
    <div className="footer">
        <div className="container">
            <div className="footerSection">
                <div className="row justifyConter">
                    <div className="footer-content">
                        <div className="footer-section-logo">
                            <img src="./image/ss.png" alt="" />
                        </div>
                        <ul className="footerCircles">
                            <li><a href="https://m.facebook.com/100002630854162"><FaFacebookF className="footerIcon"/></a></li>
                            <li><a href="https://www.twitter.com"><FaTwitter className="footerIcon"/></a></li>
                            <li><a href="https://www.linkedin.com/in/snehal-sukhadeve-2980551a2/"><FaLinkedin className="footerIcon"/></a></li>
                            <li><a href="https://www.instagram/snehal_sukhadeve"><FaInstagram className="footerIcon"/></a></li>
                      
                        </ul>
                        <div className="copy-right-content">
                            <p className="copyright">Copyright {new Date().getFullYear()} snehalsukhadeve.com | All Rights Reserved.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer