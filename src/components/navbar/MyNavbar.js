import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../image/freeLogo.png'
import './navbar.css'

export default function MyNavbar() {
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    
                    <Navbar.Brand href="#home" ><img className="img-fluid" src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-ul">
                            <NavLink className="nav-li" exact  to="/">Home</NavLink>
                            <NavLink className="nav-li" exact to="/services">Services</NavLink>
                            <NavLink className="nav-li" exact to="/about-us">About Us</NavLink>
                            <NavLink className="nav-li" exact to="/contact-us">Contact Us</NavLink>
                        </Nav>
                        <Nav className=" ">
                            {/* <NavLink className="nav-li sign-up" exact to="/Signup">Signup</NavLink> */}
                            <NavLink className="nav-li sign-up" exact to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </>
    )
}




