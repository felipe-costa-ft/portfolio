import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import './Navigator.css';
import logo from '../images/logo-portfolio.svg';

import { Link } from 'react-router-dom';

const Navigator = props => {
    return (
        <nav className="navigator">
            <div className="logo">
                <img src={logo} alt="Logo pessoal" />
            </div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/curriculum">Currículo</Link></li>
            </ul>
            <ul className="social-links">
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/felipe-g-costa/"><FaLinkedin size="1.5em" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/felipe-costa-ft"><FaGithub size="1.5em" /></a></li>
            </ul>
        </nav>
    );
}

export default Navigator;