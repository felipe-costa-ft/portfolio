import React from 'react';

import styled from 'styled-components';

import SectionTitle from '../components/SectionTitle';

import bonsai from '../images/g150.png';

const ProjectBox = styled.div`
    padding: 1em 1em 2em 1em;
    box-shadow: 5px 5px 2px black;
    background-color: #121212;

    h1 {
        font-weight: lighter;
    }

    p {
        font-weight: lighter;
    }

`;

const Logo = styled.img`
    width: 6em;
    float: left;
    margin-right: 1em;
    margin-top: 1em;

    @media(max-width: 840px) {
        float: none;
    }
`;

const ProjectButton = styled.a`
    margin: 1em;
    background-color: #3BC236;
    padding: 0.5em;
    border-radius: 5px;
    color: black;
    text-decoration: none;
`;

const Projects = props => {
    return (
        <section>
            <SectionTitle>Meus projetos</SectionTitle>
            <ProjectBox>
                <Logo src={bonsai} alt="" />
                <h1>Bonsai Academy</h1>
                <p>Plataforma de desafios de front-end para quem está iniciando na jornada
                    do desenvolvimento web.</p>

                <p>Esta plataforma foi desenvolvida com HTML, CSS, Javascript e Jekyll.</p>
                <br />
                <ProjectButton href="https://bonsaiacademy.com.br/">Site</ProjectButton>
                <ProjectButton href="https://instagram.com/bonsai.ac?utm_medium=copy_link">Instagram</ProjectButton>
                <ProjectButton href="https://bonsaiacademy.com.br/blog/">Blog</ProjectButton>
            </ProjectBox>
        </section>
    );
}

export default Projects;