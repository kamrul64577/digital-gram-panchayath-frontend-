import React from 'react'
import './contact.css'

import emailjs from "emailjs-com";

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7w264rp', 'template_lj2ahsl', e.target, 'user_Tzk63u3RJr4YWhbY5Ji5u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const onButtonClickHandler = () => {
        window.alert('Thank You For Contact With Us')
    };
    return (
        <>
            <section className="contact">
                <div className="content">
                    <h2>Contact Us</h2>
                    <p>Welcome to our contact us page.</p>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3 className="line-hieght">Address</h3>
                                <p className="line-hieght">Taltola,Surma Tower,<br/>Sylhet,<br/>3100</p>
                                <p className ="line-hieght">Bishwanath,<br/>Sylhet,<br/>3100</p>
                            </div>
                        </div>
                        <div className ="box">
                            <div className ="icon"><i className ="fa fa-phone"></i></div>
                            <div className ="text">
                                <h3 className ="line-hieght">Phone</h3>
                                <p className ="line-hieght">01709-032647</p>
                                <p className ="line-hieght">01773-764577</p>
                            </div>
                        </div>
                        <div className ="box">
                            <div className ="icon"><i className ="fa fa-envelope-o"></i></div>
                            <div className ="text">
                                <h3 className ="line-hieght">Email</h3>
                                <p className ="line-hieght">jannatfatema690 @gmail.com</p>
                                <p className ="line-hieght">kamrulneubcse @gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form onSubmit={sendEmail} >
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="name" required="required"/>
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="email" required="required"/>
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="subject" required="required"/>
                                <span>Subject</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required" name="message"></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input onClick={onButtonClickHandler} type="submit" name="" value="Send"/>
                            </div>
                        </form>
                    </div>

                </div>
                
            </section>
        </>
    )
}
