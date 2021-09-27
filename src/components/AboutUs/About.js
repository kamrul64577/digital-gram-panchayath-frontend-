import React from 'react'
import './About.css'
import about from '../image/About.jpg'

export default function About() {
    return (
        <div className="about-body">
            <div className="about-section">
                <div className="pic-container">
                    <img src={about} alt="about-pic"></img>
                </div>
                <div className="inner-container">
                    <h1>About Us</h1>
                    <p className="text">
                        Digital gram panchayath is the first step towards building a science based society. It is only when members of panchayath have a little idea about technology.
                        So that, the people of the village can easily know about different service.In a Digital gram panchayath website, rural people will have digitally connected. People get different news easily. People can request for services. People will able to know about various events, relief distribution schedule and the marriage hall.
                        People will able to do various repairs such as road, drain and wells.
                    </p>
                    <div className="skills">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
