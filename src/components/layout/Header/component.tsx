import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Container from 'components/layout/Container';

import Button from '../Button';

import StyledComponent from './styles';
import { Props } from './types';


const LayoutHeader: FunctionComponent<Props> = ({  }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.pageYOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToSection = (id: string, position:ScrollLogicalPosition = 'start') => {
        const violation = document.getElementById(id.toLowerCase());
        violation && violation.scrollIntoView({ behavior: 'smooth', block: position });
    };

    const social = [
        { href: '', imageUrl:'/images/telegram.svg' },
        { href: '', imageUrl:'/images/viber.svg' },
        { href: '', imageUrl:'/images/whatsapp.svg' },
    ];


    return (
        <StyledComponent className={classNames(['layout-header', { active: active }])}>
            <Container>
                <div className="inner-addtional">
                    <h1 className="headline">
                        Szamanita
                        <span className="subheadline">Лесная аптека</span>
                    </h1>

                    <div className="inner-contact">
                        <h3 className="headline-social">Чат с производителем:</h3>
                        <div className="inner-social">

                            {social.map(({ href, imageUrl }) => (
                                <div
                                    key={imageUrl}
                                    className="inner-image"
                                >
                                    <Image
                                        src={imageUrl}
                                        alt={`alt image ${imageUrl}`}
                                        layout="fill"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="inner-navigation">
                    <ul className="inner-main">
                        {
                            [
                                { label: 'Продукция', value: 'id_products-list', position: 'start' },
                                { label: 'Контакты', value: 'id_contact', position: 'center' },
                                { label: 'Доставка', value: 'id_shipping', position: 'center' },
                                // { label: 'Оплата', value: 'id_payme' },
                            ].map(({ label, value, position }) => (
                                <li
                                    key={value}
                                    className="list-item"
                                    onClick={() => handleScrollToSection(value, position as ScrollLogicalPosition)}
                                >
                                    <span className="data-label">{label}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="inner-navigation-button">
                        <Button className="button-telegram">
                            Телеграм-канал
                        </Button>
                    </div>
                </div>

            </Container>
        </StyledComponent>
    );
};

export default LayoutHeader;
