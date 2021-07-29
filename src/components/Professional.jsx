import React from 'react';

import SectionTitle from './SectionTitle';
import ExperienceBox from './ExperienceBox';

const Professional = props => {
    return (
        <section>
            <SectionTitle>Experiência Profissinal</SectionTitle>
            <ExperienceBox>
                <h1>IEEE Computer Society UnB</h1>
                <h2>Presidente - Voluntário</h2>
                <h2>Junho de 2019 - Atualmente</h2>
                <p>O IEEE Comuputer Society UnB é o capítulo do Ramo Estudantil IEEE UnB voltado
                    para questões relacionadas aos computadores. Este capítulo realiza projetos de
                    computação além de apoiar e organizar diversos eventos relacionados principalmente
                    a ciência da computação, engenharia elétrica e eletrônica.</p>

                <p>O Capítulo é composto por voluntários e tem como objetivos desenvolver
                    soluções tecnológicas computacionais tanto em software quanto em hardware,
                    diminuir a distância entre estudantes, empresas e universidades e fomentar
                    pesquisas que busquem não somente gerar novos produtos como também oferecer
                    uma oportunidade para novas experiências e aprendizados aos seus membros.</p>
            </ExperienceBox>

            <ExperienceBox>
                <h1>Bonsai Acacemy</h1>
                <h2>Co-founder</h2>
                <h2>Abril 2020 - Abril 2021 (1 ano)</h2>
                <p>Principais atividades: Validação de uma dor real, identificação da
                    persona por meio de pesquisa de mercado, construção e validação de
                    hipóteses de negócio, elaboração de um MVP, criação de um funil de
                    marketing digital, pivotagem de negócio e construção de análise do
                    mercado potencial.</p>
            </ExperienceBox>

            <ExperienceBox>
                <h1>SECRETARIA DE ECONOMIA DO DISTRITO FEDERAL</h1>
                <h2>Estagiário</h2>
                <h2>Julho 2019 - Julho 2020 (1 ano)</h2>
                <p>Principais atividades: Acompanhamento do desenvolvimento do Sistema de Patrimônio Público do Distrito Federal (SPP), um sistema
                    voltado ao cadastro da situação de manutenção de todos os imóveis
                    públicos do DF.</p>
            </ExperienceBox>

        </section>
    );
}

export default Professional;