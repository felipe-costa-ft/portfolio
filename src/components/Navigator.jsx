import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import './Navigator.css';
import logo from '../images/logo-portfolio.svg';

const Navigator = props => {
    return (
        <nav className="navigator">
            <div className="logo">
                <img src={logo} alt="Logo pessoal" />
            </div>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Currículo</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
            <ul className="social-links">
                <li><a target="_blank" href="https://www.linkedin.com/in/felipe-g-costa/"><FaLinkedin size="1.5em"/></a></li>
                <li><a target="_blank" href="https://github.com/felipe-costa-ft"><FaGithub size="1.5em"/></a></li>
            </ul>
        </nav>
    );
}

export default Navigator;