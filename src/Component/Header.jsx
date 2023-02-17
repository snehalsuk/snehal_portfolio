import React from 'react'

const Header = () => {
  return (
    <header id="home" className="header">
         <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header__content">
                        <div className="header-section">
                            <h2>Hello, I Am</h2>
                            <h1>Snehal Sukhadeve</h1>
                            <p>FullStack Developer <br/>I'm Creative frontend <br/>and backend Developer 
                            <br/>Working as a freelancer </p>
                            <div className="header__buttons">
                                <a href="#contact" className="btn btn-outline">
                                    Hire Me
                                </a>
                            </div>
                    
                        </div>
                    </div>
                   
                </div>
                <div className="col-6">
                    <div >
                    <img  src="./image/snehalprofile.png" alt="profileimg" 
                    className="image" />
                    </div>
                </div> 
            </div>
         </div>
      
    </header>
   
  )
}

export default Header