import React from 'react';

import Professional from '../components/Professional';
import Academic from '../components/Academic'
import styled from 'styled-components';

const DownloadSection = styled.section`
    display: flex;
    justify-content: center;
`;

const DownloadButton = styled.a`
    background-color: #3BC236;
    padding: 0.5em;
    border-radius: 5px;
    color: black;
    text-decoration: none;
    font-size: 2em;

    @media(max-width: 400px) {
        font-size: 1.5em;
        padding: 0.3em;
    }
`;


const Curriculum = (props) => {

    return (
        <React.Fragment>
            <DownloadSection>
                <DownloadButton target="_blank" href="https://drive.google.com/file/d/1fwzDO6ehniY3EXZ7Qacxc-YHRpInhB9W/view?usp=sharing">Baixar currículo em pdf</DownloadButton>
            </DownloadSection>
            <Professional />
            <Academic />
        </React.Fragment>
    );
}

export default Curriculum;