import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { getWords } from 'utils/string';

import StyledComponent from './styles';
import { Props } from './types';


const HomeSectionHero: FunctionComponent<Props> = ({ categories }) => {
    return (
        <StyledComponent className="home-section-hero">
            <div className="column-image">
                <div className="inner-image">
                    <Image
                        src="/images/capsule.png"
                        alt="alt-image szamanita"
                        layout="fill"
                    />
                </div>

                <div className="inner-image">
                    <Image
                        src="/images/capsule.png"
                        alt="alt-image szamanita"
                        layout="fill"
                    />
                </div>

                <div className="inner-image">
                    <Image
                        src="/images/capsule.png"
                        alt="alt-image szamanita"
                        layout="fill"
                    />
                </div>
            </div>

            <div className="column-details">
                <h2 className="short-description">Мухомор красный, молотый в веганских капсулах</h2>
                <ul className="list">
                    {categories && categories.map((element) => (
                        <li
                            key={element.id}
                            className="list-item"
                        >
                            {element.name && getWords(element.name, 2)}
                        </li>
                    ))}
                </ul>
            </div>
        </StyledComponent>
    );
};

export default HomeSectionHero;
