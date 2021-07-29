import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Knowledges from '../components/Knowledges'

const Home = (props) => {

    return (
        <React.Fragment>
            <Hero />
            <About />
            <Knowledges />
        </React.Fragment>
    );
}

export default Home;