import React from 'react'

const About = () => {
  return (
    <div id="about" className="about">
        <div className="container">
            <div className="common">
                <h1 className="about-title">About Me</h1>
                <div className="underline-border"></div>
            </div>
            <div className="row h-650 alignCenter">
                <div className="col-6">
                    <div className="about__img">
                        <img className="aboutimg" src="./image/sukhadeve.jpeg" alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="about__info">
                        <h1>SNEHAL SUKHADEVE <br /> based in India</h1>
                        <div className="about__info"></div>
                        <p>
                            I'm Creative frontend and backend Developer, and I'm very passionate
                            and dedicated to my work,<br/> With year experience as a professional 
                            web developer, I have acquired the skills and <br/>knowledge necessary to 
                            make your project <br/> a success.I enjoy every step of the design process, 
                            from discussion and collaboration.
                            <br/>
                            <br/>
                        </p>
                        <div className="about__buttons">
                            <a href="/image/SnehalResume-2023.pdf" className="btn btn-outline">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About