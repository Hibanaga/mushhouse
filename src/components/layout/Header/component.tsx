import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Routes from 'types/routes';

import { scrollToPositionId } from 'utils/page';

import Container from 'components/layout/Container';

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
            <Container className="layout-layout-container">
                <Link
                    href={Routes.Home}
                    className="innner-image"
                >
                    <h1 className="hedline">Szamanita</h1>
                </Link>

                <ul className="list">
                    {
                        [
                            { label: 'Продукция', value: 'id_products-list', position: 'start' },
                            { label: 'Доставка и оплата', value: 'id_shipping-payment', position: 'center' },
                            { label: 'Контакты', value: 'id_contact', position: 'center' },
                            { label: 'О нас', value: 'id_about', position: 'start' },
                        ].map((element) =>  (
                            <li
                                key={element.value}
                                className="list-item"
                                onClick={() => scrollToPositionId(element.value, element.position as ScrollLogicalPosition)}
                            >
                                <span className="data-label">{element.label}</span>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </StyledComponent>
    );
};

export default LayoutHeader;
