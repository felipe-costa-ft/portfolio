import React from 'react';

import './Hero.css'

import HeroImage from '../images/undraw_Coding_re_iv62.svg'

const Hero = props => {
    return (
        <section className="hero">
            <div>
                <h1>Felipe da Graça Costa</h1>
                <h2>Desenvolvedor web front-end</h2>
                <h2>Desenvolvedor React</h2>
                <h2>Apaixonado por tecnologia</h2>
            </div>
            <img className="hero-image" src={HeroImage} alt="" />
        </section>
    );
}

export default Hero;