import React from 'react';

import Navigator from '../components/Navigator'
import Hero from '../components/Hero';

const Home = (props) => {

    return (
        <React.Fragment>
            <Navigator />
            <Hero />
        </React.Fragment>
    );
}

export default Home;