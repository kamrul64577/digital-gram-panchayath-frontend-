import React, { Component } from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import Homepage from '../Homepage/Home';
import Services from '../Services/Services';
import About from '../AboutUs/About';
import Contact from '../ContactUs/Contact';
import Login from '../Authentication/Login'

import { Route } from 'react-router-dom';

export default class Router extends Component{
    render(){
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/about-us" component={About} />
                    <Route exact path="/contact-us" component={Contact} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </>
        )
    }
}
