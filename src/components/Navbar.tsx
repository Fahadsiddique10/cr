import { useState } from 'react';
import logomain from './../assets/logomain.png';
import conceptLogo from './../assets/logomain.png'; // Make sure this path is correct
import Button from './Button';
import call from './../assets/call.svg';
import whats from './../assets/whats.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const submit = () => {
        return;
    };

    return (
        <header>
            <div className="hero">
                <div className="main-img-logo">
                    <img className="main-logo" src={logomain} alt="Logo" />
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <span className={isOpen ? 'line open' : 'line'}></span>
                    <span className={isOpen ? 'line open' : 'line'}></span>
                    <span className={isOpen ? 'line open' : 'line'}></span>
                </div>

                {/* Overlay */}
                <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

                {/* Main Menu */}
                <div className={`main-hero ${isOpen ? 'show' : ''}`}>
                    {/* ConceptRecall Logo */}
                    <img src={conceptLogo} alt="ConceptRecall Logo" className="concept-logo" />
                    
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Case Studies</a></li>
                        <li><a href="#">Feed</a></li>
                        <Button label="Speak to an Expert" onClick={submit} className="nav-btn" />
                    </ul>
                </div>

                <div className="calls-icons">
                    <a href="#"><img src={call} alt="Call" /></a>
                    <a href="#"><img src={whats} alt="WhatsApp" /></a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
