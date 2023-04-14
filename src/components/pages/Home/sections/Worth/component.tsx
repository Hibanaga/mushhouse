import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


const HomeSectionWorth: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="home-section-worth">
            <h3 className="section-headline">
              Dlaczego warto?
            </h3>

            <Container className="layout-layout-container">
                <span className="data-content">
                    Amanita Muscaria to rodzaj grzyba, który występuje powszechnie w północnych i wschodnich częściach Europy, Azji i Ameryki Północnej. Grzyb jest łatwo rozpoznawalny ze względu na jego uderzający czerwony kapelusz z białymi plamami. Chociaż ogólnie uważany jest za trujący, czerwony muchomor był używany do różnych celów przez wieki.
                </span>
                <span className="data-content">
                    Amanita Muscaria to rodzaj grzyba, który występuje powszechnie w północnych i wschodnich częściach Europy, Azji i Ameryki Północnej. Grzyb jest łatwo rozpoznawalny ze względu na jego uderzający czerwony kapelusz z białymi plamami. Chociaż ogólnie uważany jest za trujący, czerwony muchomor był używany do różnych celów przez wieki.
                </span>
                <ul className="list">
                    {
                        ['Łagodzi bezsenność', 'Leczy choroby stawów', 'Naprawia ogólne samopoczucie', 'Usuwa objawy depresji']
                            .map((element) => (
                                <li
                                    key={element}
                                    className="list-item"
                                >
                                    {element}
                                </li>
                            ))
                    }
                </ul>

                <div className="inner-image">
                    <Image
                        fill
                        objectFit="contain"
                        src="/images/worth.png"
                        alt="szmananita tablet"
                    />
                </div>
            </Container>
        </StyledComponent>
    );
};

export default HomeSectionWorth;
