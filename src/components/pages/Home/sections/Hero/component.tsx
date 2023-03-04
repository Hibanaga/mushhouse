import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useAppContext } from 'context/AppContext';

import { getWords } from 'utils/string';

import StyledComponent from './styles';
import { Props } from './types';


const SectionHero: FunctionComponent<Props> = ({  }) => {
    const { categories } = useAppContext();

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
                    {categories && categories.map((element) => (
                        <li
                            key={element.id}
                            className="list-item"
                        >{element.name && getWords(element.name, 2)}</li>
                    ))}
                </ul>
            </div>
        </StyledComponent>
    );
};

export default SectionHero;
