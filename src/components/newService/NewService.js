import Axios from 'axios';
import React, { useState } from 'react'
import './newService.css'
export default function NewService() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [type, setType] = useState('');
    const [whyNeed, setWhyNeed] = useState('');

    const requestService = () => {
        Axios.post('http://localhost:3001/api/insertService', { 
            name: name,
            email : email,
            contact : contact,
            type : type,
            whyNeed : whyNeed
         })
            .then(() => {
                console.log('succesfully Insert')
            });
        alert('thank you for your new Service request')
    }
    return (
        <div class="new-service">
            <section className="request_for_installment">
                <h1 className="tittle">Request For New Services</h1>
                <div className="container">
                    <div className="contact-form row">
                        <div className="form-group col-lg-12">
                            <input id="name" className="input-text" type="text" name="name" placeholder="Your Name" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            {/* <label for="name" className="label">name</label> */}
                        </div>
                        <div className="form-group col-lg-12">
                            <input id="email" className="input-text" type="email" name="email" placeholder="Your Email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                            {/* <label for="email" className="label">email</label> */}
                        </div>
                        <div className="form-group col-lg-12">
                            <input id="phone" className="input-text" type="text" name="contact" placeholder="Your Mobile Number" onChange={(e) => {
                                setContact(e.target.value)
                            }}/>
                            {/* <label for="phone" className="label">Contact number</label> */}
                        </div>
                        <div className="form-group col-lg-12">
                            <input id="Request" className="input-text" type="text" name="type" placeholder="Service Type" onChange={(e) => {
                                setType(e.target.value)
                            }}/>
                            {/* <label for="Request" className="label">Service type</label> */}
                        </div>
                        
                        <div className="form-group col-lg-12">
                            <textarea id="message" className="input-text" type="text" name="whyNeed" placeholder="  Why You Need This Service?" onChange={(e) => {
                                setWhyNeed(e.target.value)
                            }}></textarea>
                            {/* <label for="message" className="label">Why You Need This Service?</label> */}
                        </div>
                        <div className="form-group col-lg-12">
                            <button onClick={requestService} className="submit-btn">Submit </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
