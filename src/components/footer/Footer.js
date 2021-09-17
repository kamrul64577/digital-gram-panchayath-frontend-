import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <p>Digital Gram Panchayath</p>
                            <p>Support</p>
                            <p>Cookies Policy</p>
                        </Col>
                        <Col lg={3}>
                            <h3>Services</h3>
                            <p>Digital Gram Panchayath</p>
                            <p>Support</p>
                            <p>Cookies Policy</p>
                        </Col>
                        <Col lg={3}>
                            <h3>Services</h3>
                            <p>Digital Gram Panchayath</p>
                            <p>Support</p>
                            <p>Cookies Policy</p>
                        </Col>
                        <Col lg={3}>
                            <h3>Our Address</h3>
                            <p>Ramdhana-3130</p>
                            <p>Bishwanath, Sylhet</p>
                            <ul className="list-unstyled d-flex">
                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-facebook-messenger"></i></Link></li>
                            </ul>
                        </Col>
                        <p className="text-center pt-4">All copyrights &copy; reserved 2021</p>
                    </Row>
                </Container>
            </div>
        </>
    )
}
