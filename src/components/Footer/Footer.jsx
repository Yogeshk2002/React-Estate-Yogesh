import React from 'react'
import './Footer.css'

const Footer = () =>{
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* Left Side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className="secondaryText">
                        Our Vision is to make all People <br />
                        the best place to live for them
                    </span>
                </div>

                    {/* right side */}
                    <div className="flexColStart f-right">
                        <span className='primaryText'>Information</span>
                        <span className='secondaryText'>145 New york,Fl 4523 USA</span>
                        <div className="flexCenter f-menu">
                            <span>Property</span>
                            <span>Services</span>
                            <span>Product</span>
                            <span>About Us</span>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}

export default Footer