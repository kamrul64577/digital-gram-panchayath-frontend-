import Axios from 'axios';
import React, { useState } from 'react'
import './repair.css'
export default function Repair() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [requestFor, setRequestFor] = useState('');
    const [description, setDescription] = useState('');

    const requestRepair = () => {
        Axios.post('http://localhost:3001/api/insertRepair', {
            name: name,
            email: email,
            contact: contact,
            requestFor: requestFor,
            description: description
        })
            .then(() => {
                console.log('succesfully Insert')
            });
        alert('thank you for your new Service request')
    }
    return (
        <div>
            <section className="request_for_installment">
                <h1 className="tittle">মেরামতের জন্য আবেদন করুন </h1>
                <div className="container">
                    <div className="contact-form row">
                        <div className="form-field col-lg-6">
                            <textarea id="name" className="input-text" type="text" name="name" onChange={(e) => {
                                setName(e.target.value)
                            }}></textarea>
                            <label for="name" className="label">আপনার নাম</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="email" className="input-text" type="email" name="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }}></textarea>
                            <label for="email" className="label">আপনার ইমেইল </label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="Request" className="input-text" type="text" name="requestFor" onChange={(e) => {
                                setRequestFor(e.target.value)
                            }}> </textarea>
                            <label for="Request" className="label">কিসের জন্য আবেদন করবেন ?</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <textarea id="phone" className="input-text" type="text" name="contact" onChange={(e) => {
                                setContact(e.target.value)
                            }}> </textarea>
                            <label for="phone" className="label">আপনার মোবাইল নাম্বার</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <textarea id="message" className="input-text" type="text" name="description" onChange={(e) => {
                                setDescription(e.target.value)
                            }}></textarea>
                            <label for="message" className="label">কেনো এই সেবাটি আপনার প্রয়োজন?</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="আবেদন করুন" onClick={requestRepair}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
