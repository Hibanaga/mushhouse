import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import StyledComponent from './styles';
import { Props } from './types';


const SectionHero: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="section-hero">
            <div className="column-image">
                <Image
                    src="https://static.dw.com/image/59453258_905.jpg"
                    alt="alt-image szamanita"
                    layout="fill"
                />
            </div>

            <div className="column-details">
                <h2 className="short-description">Мухомор красный, молотый в веганских капсулах</h2>
                <ul className="list">
                    <li className="list-item">Адаптоген</li>
                    <li className="list-item">Иммуномодулятор</li>
                    <li className="list-item">Энтеоген</li>
                    <li className="list-item">Афродизиак</li>
                    <li className="list-item">Антидепрессант</li>
                </ul>
            </div>
        </StyledComponent>
    );
};

export default SectionHero;
