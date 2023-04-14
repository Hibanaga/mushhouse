import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Container from 'components/layout/Container';

import StyledComponent from './styles';
import { Props } from './types';

const HomeSectionContact: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent
            id="id_contact"
            className="home-section-contact"
        >
            <h3 className="section-headline">Kontakt</h3>
            <Container className="layout-layout-container">
                <span className="headline">
                    Możesz skontaktować się z nami
                </span>

                <ul className="list-social">
                    {
                        [
                            { 'href': '', 'imageUrl': '/images/telegram.svg' },
                            { 'href': '', 'imageUrl': '/images/viber.svg' },
                            { 'href': '', 'imageUrl': '/images/whatsapp.svg' },
                        ].map((element) => (
                            <li
                                key={element.imageUrl}
                                className="list-item inner-image"
                            >
                                <Image
                                    fill
                                    objectFit="contain"
                                    src={element.imageUrl}
                                    alt={element.imageUrl}
                                />
                            </li>
                        ))
                    }
                    <li className="list-item">+375 29 223-51-23</li>
                </ul>

                <div className="inner-phone">
                    <div className="inner-image">
                        <Image
                            fill
                            objectFit="contain"
                            src="/images/contact-icon.svg"
                            alt="/images/contact-icon.svg"
                        />
                    </div>
                    <span className="data-phone">+48 502-024-998</span>
                </div>

                <span className="data-email">szamanita.info@gmail.com</span>
            </Container>

        </StyledComponent>
    );
};

export default HomeSectionContact;
