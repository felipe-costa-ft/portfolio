import React from 'react';

import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import ExperienceBox from './ExperienceBox';

const Professional = props => {
    return (
        <section>
            <SectionTitle>Formação Acadêmica</SectionTitle>
            <ExperienceBox>
                <h1>Universidade de Brasília</h1>
                <h2>Engenharia da Computação</h2>
                <h2>Previsão de formação: 2023</h2>
            </ExperienceBox>

        </section>
    );
}

export default Professional;