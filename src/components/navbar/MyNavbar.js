import React, { useState } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../image/freeLogo.png'
import './navbar.css'
// import { useAuth } from '../../context/authContext';

import {firebase} from '../../firebaseConfig'
import { auth } from '../../firebaseConfig'

export default function MyNavbar() {
    const [loggedIn, setLoggedIn] = useState(null);
    var user = firebase.auth().currentUser;
    console.log(user)
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user)
            setLoggedIn(user);

        } else {
            console.log('nothing')
        }
    });
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    
                    <Navbar.Brand href="#home" ><img className="img-fluid" src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-ul">
                                           
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/">হোম</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/services">সেবাসমূহ</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/about-us">আমাদের সম্পর্কে</NavLink>
                            <NavLink className="nav-li" activeStyle={{ color: "#FFFFFF" }} exact to="/contact-us">যোগাযোগ</NavLink>
                        </Nav>
                        <Nav className=" ">
                           
                            {loggedIn ? <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">লগআউট</NavLink> : <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin" >লগইন</NavLink>}
                          {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Login</NavLink>  */}
                         
                            {/* <NavLink className="nav-li sign-up" activeStyle={{ color: "#FFFFFF" }} exact to="/userlogin">Logout</NavLink> */}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </>
    )
}




