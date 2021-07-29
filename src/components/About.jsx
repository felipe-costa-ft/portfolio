import React from 'react';

import styled from 'styled-components';

import SectionTitle from './SectionTitle';

import photo from '../images/indice.jpeg'


const AboutSection = styled.section`
`;

const Photo = styled.img`
    box-shadow: 3px 3px 10px #3BC236;
    width: 300px;

    @media(max-width: 1050px) {
        display: none;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

const Text = styled.div`

    display: block;
    p {
        display: block;
        font-size: 1.5em;
        margin-bottom: 2em;
        width: 30em;
    }
    
    @media(max-width: 1050px) {
        p {
            font-size: 1em;
            width: auto;
        }
    }


`;

const About = props => {
    return (

        <AboutSection>
            <SectionTitle>Sobre mim</SectionTitle>
            <Content>
                    <Photo src={photo} />
                <Text>
                    <p>Desenvolvedor Javascript apaixonado por programação desde os 14 anos.
                        Estou em busca de me aperfeiçoar cada vez mais no ecossistema javascript como um todo,
                        tanto na parte de front-end quando back-end.</p>

                    <p>Tenho um espírito empreendedor e resolvedor de problemas.</p>

                    <p>Estou em busca da minha primeira oportunidade no mercado de trabalho para alavancar
                        meus conhecimentos e minha carreira para um próximo nível.
                        Busco um ambiente que seja desafiador e que tenha um time colaborativo em que eu possa
                        ensinar e aprender muito.</p>
                </Text>
            </Content>
        </AboutSection>
    );
}

export default About;