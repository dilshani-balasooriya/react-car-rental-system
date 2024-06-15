import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header.css';

const HeaderComponent = () => {
    const [connecting, setConnecting] = useState(false);

    // Function to handle button click
    const handleRequestCall = () => {
        setConnecting(true);

        setTimeout(() => {
            setConnecting(false);
        }, 2000);
        
        // Here, you can add code to handle the contact request
        // For example, you could open an email client with a pre-filled message
        window.open('mailto:contact@example.com?subject=Contact%20Request');
    };

    return (
        <section className="navbarSection">
            <header className="header flex fixedNavbar">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        Travel Buddy
                    </a>
                </div>
                <div className="navbar">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="Home.jsx" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="Cars.jsx" className="navLink">Cars</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Rent</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <li className="navItem">
                            <button className="btn" onClick={handleRequestCall}>
                                <a href="#">Request a call</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
            {connecting && <div className="connectingMessage">Please wait, connecting...</div>}
        </section>
    );
};

export default HeaderComponent;


