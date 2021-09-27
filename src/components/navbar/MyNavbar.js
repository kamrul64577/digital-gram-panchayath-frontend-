import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../image/freeLogo.png'
import './navbar.css'
// import { useAuth } from '../../context/authContext';

import {firebase} from '../../firebaseConfig'
import { auth } from '../../firebaseConfig'

export default function MyNavbar() {

    var user = firebase.auth().currentUser;
    console.log(user)
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    
                    <Navbar.Brand href="#home" ><img className="img-fluid" src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-ul">
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF"}} exact  to="/">Home</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/services">Services</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/about-us">About Us</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/contact-us">Contact Us</NavLink>
                        </Nav>
                        <Nav className=" ">
                            {/* <NavLink className="nav-li sign-up" exact to="/Signup">Signup</NavLink> */}
                            {/* {user ? <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Logout</NavLink> : <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin" onClick={refreshPage}>Login</NavLink>} */}
                          {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Login</NavLink>  */}
                         
                            <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Logout</NavLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </>
    )
}




