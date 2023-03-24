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
                                { label: 'Продукция', value: 'product' },
                                { label: 'Доставка', value: 'shipping' },
                                { label: 'Оплата', value: 'payment' },
                                { label: 'Контакты', value: 'contact' },
                            ].map(({ label, value }) => (
                                <li
                                    key={value}
                                    className="list-item"
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
