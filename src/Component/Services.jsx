import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Services = () => {

  const header ={
    mainHeader: "My Expertise",
    subHeading: "Provide Wide Range of Digital Services",

  };

  const state =[
    {
    id: 1,
    icon: "./image/download.jpg",
    heading:"Ui/Ux Design",
    text: "Dolor repellendus temporibus autem quibusdam official"
  },
  {
    id: 2,
    icon: "./image/download.jpg",
    heading:"Web Design",
    text: "Dolor repellendus temporibus autem quibusdam official"
  },
  {
    id: 3,
    icon: "./image/download.jpg",
    heading:"Web Design",
    text: "Dolor repellendus temporibus autem quibusdam official"
  },
];

  return (
   
    <section id="skills" className="experience">
      <div>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      </div>
      <div className="experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="exph4">
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="exph4">
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="exph4">
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="exph4">
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
           
          </div>
        </div>
        <div className="experience__Backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="exph4">
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
           </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
            <div className="exph4">
              <h4>Mysql</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="exph4">
              <h4>SpringBoot</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="exph4">
              <h4>AWS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

        
           
          </div>
        </div>
      </div>
     
     



    </section>
  
    )
}

export default Services