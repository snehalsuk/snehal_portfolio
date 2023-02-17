import React, { useState } from 'react'
import "./Portfolio.css"
import "./data"
import data from './data'


const Portfolio = () => {


  
  return (
    

    <section id="portfolio" className="portfolio-head">
        <div>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        </div>
        <div className="container portfolio__container">
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img  src="/image/portfolionet.jpg" alt=""
                    className="portimg"/>
                    </div>
            
                <h3>PORTFOLIO</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/snehalsuk" className="btn btn-primary" target="_blank">Github</a>
                <a href="" className="btn btn-primary" target="_blank">Live 
                Demo</a>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src="/image/aas.jpg" alt=""
                    className="portimg"/>
                    </div>
            
                <h3>SHOPING WEBSITE</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/snehalsuk" className="btn btn-primary" target="_blank">Github</a>
                <a href="" className="btn btn-primary" target="_blank">Live 
                Demo</a>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src="/image/aasd.jpg" alt=""
                    className="portimg"/>
                    </div>
            
                <h3>MOVIE WEBSITE</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/snehalsuk" className="btn btn-primary" target="_blank">Github</a>
                <a href="" className="btn btn-primary" target="_blank">Live 
                Demo</a>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src="/image/oaps.jpg" alt=""
                    className="portimg"/>
                    </div>
            
                <h3>FOOD ORDER WEBSITE</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/snehalsuk" className="btn btn-primary" target="_blank">Github</a>
                <a href="" className="btn btn-primary" target="_blank">Live 
                Demo</a>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src="/image/emp-mag.jpg" alt=""
                    className="portimg"/>
                    </div>
            
                <h3>EMPLOYEE MANAGEMENT</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/snehalsuk" className="btn btn-primary" target="_blank">Github</a>
                <a href="" className="btn btn-primary" target="_blank">Live 
                Demo</a>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src="/image/wether-as.png" alt=""
                    className="portimg"/>
                    </div>
            
                <h3>WEATHER<br/>WEBSITE</h3>
                <div className="portfolio__item-cta">

                <a href="https://github.com/snehalsuk" className="btn btn-primary" target="_blank">Github</a>
                <a href="" className="btn btn-primary" target="_blank">Live 
                Demo</a>
                </div>
            </article>

        </div>
    </section>

  
   
  )
}

export default Portfolio