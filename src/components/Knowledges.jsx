import React from 'react';

import SectionTitle from './SectionTitle';

import styled from 'styled-components';

import { FaGitAlt, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';


const Content = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5em;

    @media(max-width: 1000px) {
        svg {
            width: 6em;
        }
    }

    @media(max-width: 800px) {
        svg {
            width: 4em;
            height: 4em;
        }
    }

    @media(max-width: 580px) {
        display: grid;
        grid-template-columns: auto auto auto;
        svg {
            width: 4em;
            height: 4em;
        }
    }
`;

const Name = styled.h2`
    text-align: center;
    font-weight: lighter;
`;

const Knowledges = props => {
    return (
        <section>
            <SectionTitle>Meus conhecimentos</SectionTitle>

            <Content>
                <div>
                    <FaGitAlt color={'#f1502f'} size={'10em'} />
                    <Name>Git</Name>
                </div>
                <div>
                    <AiFillHtml5 color={'#E34C26'} size={'10em'} />
                    <Name>HTML</Name>
                </div>
                <div>
                    <FaCss3Alt color={'#2565ae'} size={'10em'} />
                    <Name>CSS</Name>
                </div>
                <div>
                    <SiJavascript color={'#f0db4f'} size={'10em'} />
                    <Name>Javascript</Name>
                </div>
                <div>
                    <FaReact color={'#61dbfb'} size={'10em'} />
                    <Name>React</Name>
                </div>
                <div>
                    <FaNodeJs color={'#3c873a'} size={'10em'} />
                    <Name>Node.js</Name>
                </div>
            </Content>

        </section>
    );
}

export default Knowledges;