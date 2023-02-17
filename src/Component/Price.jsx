import React from 'react'

const Price = () => {


    const header= {
        subHeading: "Popular Pricing Plan",
        text: "When building a website, start here. Our shared service delivers a powerful, proven platform"

    };
    const state =[
        {
            id:1,
            heading:"Basic",
            price:30,
            msg1: "Web Development",
            msg2: "Backend Dev. (Java)",
            msg3: "MYSQL Database",
            msg4: "AWS Deployment",
            
        },
        {
            id:2,
            heading:"Professional",
            price:60,
            msg1: "Web Development",
            msg2: "Backend Dev. (Java)",
            msg3: "MYSQL Database",
            msg4: "AWS Deployment",
        },
        {
            id:3,
            heading:"Business",
            price:90,
            msg1: "Web Development",
            msg2: "Backend Dev. (Java)",
            msg3: "MYSQL Database",
            msg4: "AWS Deployment",
        },
     
    ];



  return (
    <div id="services" className="prices">
        <div className="container">
            <div className="common">
                <h2 className="subheading">
                    {header.subHeading}
                </h2>
                <h6 className="mainContent">{header.text}</h6>
                <div className="commonBorder"></div>
            </div>
            <div className="row">
                {state.map((prices) => (
                    <div className="col-4" key={prices.id}>
                        <div className="price">
                            <div className="priceHeading">{prices.heading}</div>
                            <div className="price__rs">
                                <span>$</span>
                                {prices.price}
                                </div>
                                <ul>
                                    <li>{prices.msg1}</li>
                                    <li>{prices.msg2}</li>
                                    <li>{prices.msg3}</li>
                                    <li>{prices.msg4}</li>
                                    <li>{prices.msg5}</li>
                                </ul>
                                <div className="price__btn">
                                    <a  href="#contact" className="btn btn-outline">
                                        Start Now
                                        
                                    </a>

                                </div>
                                </div>
                                </div>
                )
                )
                }

            </div>
        </div>
    </div>
    
  )
}

export default Price