import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
// import "./Header.css"
const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("Home")
        } else if (location.pathname === "/add") {
            setActiveTab("AddContact")
        } else if (location.pathname === "/about") {
            setActiveTab("About");
        }
    }, [location]);
    return (
        <div className="header">
            <p className="logo">Contact App</p>
            <div classname="Header-right">
                <link to="/">
                    <p classname={'${activeTab ==="Home" ? "active" : ""}'}
                        onclick={() => setActiveTab("Home")}
                    >
                        Home
                    </p>

                </link>
                <link to="/add">
                    <p classname={'${activeTab ==="AddContact" ? "active" : ""}'}
                        onclick={() => setActiveTab("AddContact")}
                    >
                        Add Contact
                    </p>

                </link>
                <link to="/about">
                    <p classname={'${activeTab ==="About" ? "active" : ""}'}
                        onclick={() => setActiveTab("About")}
                    >
                        About
                    </p>

                </link>
            </div>

        </div>
    )
}

export default Header