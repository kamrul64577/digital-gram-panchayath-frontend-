import React, { Component } from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import Homepage from '../Homepage/Home';
import Services from '../Services/Services';
import About from '../AboutUs/About';
import Contact from '../ContactUs/Contact';
import UserLogin from '../userAuthentication/Login'
import UserSignup from '../userAuthentication/Signup'
import UserLogout from '../userAuthentication/Logout'
import AuthProvider from "../../context/authContext";
import { Route } from 'react-router-dom';
import PrivateRoute from '../userAuthentication/PrivateRoute'

import Repair from '../repair/Repair'
import NewService from '../newService/NewService'




export default function Router(){
    
        return (
            <>
                
                <AuthProvider>
                    
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <PrivateRoute exact path="/services" component={Services} />
                        <Route exact path="/about-us" component={About} />
                        <Route exact path="/contact-us" component={Contact} />
                        {/* <Route exact path="/login" component={Login} /> */}

                        <Route exact path="/userlogin" component={UserLogin} />
                        <Route exact path="/usersignup" component={UserSignup} />
                        <Route exact path="/userlogout" component={UserLogout} />

                       

                        <PrivateRoute exact path="/repair" component={Repair} />
                        <PrivateRoute exact path="/newService" component={NewService} />
                    </Switch>
                </AuthProvider>
            </>
        )
    
}
