import React from 'react';

import styled from 'styled-components';

import logo from '../images/logo-portfolio.svg';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const StyledFooter = styled.footer`
    border-top: solid 1px #333;
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

const Logo = styled.img`
    width: 10rem;
    align-self: center;
`;

const Contact = styled.p`
    align-self: center;
`;

const SocialLinks = styled.div`
    align-self: center;
    display: flex;
    justify-content: space-between;
    gap: 1em;

    a {
        color: #CCC;
        text-decoration: none;
    }

`;

const Footer = props => {
    return (
        <StyledFooter>
            <Logo src={logo} />
            <Contact>Email: felipecosta@ieee.org</Contact>
            <SocialLinks>
                <a target="_blank" href="https://www.linkedin.com/in/felipe-g-costa/"><FaLinkedin size="1.5em" /></a>
                <a target="_blank" href="https://github.com/felipe-costa-ft"><FaGithub size="1.5em" /></a>
            </SocialLinks>
        </StyledFooter>
    );
}

export default Footer;