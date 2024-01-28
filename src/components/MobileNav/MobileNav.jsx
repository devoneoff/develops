import React from "react";
import './MobileNav.css';

const MobileNav = ({isOpen, toggleMenu}) => {
    return (
        <>
            <div 
                className={`mobile-menu ${isOpen ? "active" : ""}`} 
                onclick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <div className="logo">ME7RIX</div>
                    <ul>
                        <li>
                            <a href="#person" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="menu-item">About</a>
                        </li>
                        <li>
                            <a href="#techno" className="menu-item">Technologies</a>
                        </li>
                        <li>
                            <a href="#case" className="menu-item">Case</a>
                        </li>
                        <li>
                            <a href="#certif" className="menu-item">Certificates</a>
                        </li>
                        <li>
                            <a href="#contact" className="contact-btn">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default MobileNav;