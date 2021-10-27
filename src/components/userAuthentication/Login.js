import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/authContext';
import { Link, useHistory } from "react-router-dom"
import './login.css'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()



        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            alert('Login successfully')
            history.push("/")
        } catch {
            setError('Failed to Log in')
        }
        setLoading(false)
    }
    return (
        <>
            <div className="login">
                <div className="w-25 py-5  mx-auto ">
                    <Card className="mt-5">
                        <Card.Body className="card-bg ">
                            <h2 className="text-center mb-4">লগইন </h2>

                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>ইমেইল</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>পাসওয়ার্ড</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>

                                <Button disabled={loading} className="w-100 mt-3" type="submit">লগইন</Button>
                            </Form>
                            <div className="w-100 text-center mt-3 forgot-password-div">
                                <Link className="forgot-password" to="/forgot-password">পাসওয়ার্ড ভুলে গেছেন </Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-3 signup-bg">
                        নতুন একাউন্ট প্রয়োজন?  <Link className="signup-link" to="/usersignup">রেজিস্ট্রার করুন</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

