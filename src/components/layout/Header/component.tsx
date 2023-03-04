import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Container from '../Container';

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


    return (
        <StyledComponent className={classNames(['layout-header', { active: active }])}>
            <Container>
                <div className="inner-addtional">
                    <h1 className="headline">
                        Szamanita
                    </h1>

                    <div className="inner-contact">
                        <div className="inner-image">
                            <Image
                                src="/images/telegram-icon.svg"
                                alt="alt image telegram"
                                layout="fill"
                            />
                        </div>

                        <div className="inner-image">
                            <Image
                                src="/images/viber-icon.svg"
                                alt="alt image telegram"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>

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

            </Container>
        </StyledComponent>
    );
};

export default LayoutHeader;
