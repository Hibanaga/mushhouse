import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Routes from 'types/routes';

import { scrollToPositionId } from 'utils/page';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


const LayoutHeader: FunctionComponent<Props> = ({  }) => {
    const router = useRouter();
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
                            { label: 'Produkty', value: 'id_products-list', position: 'start' },
                            { label: 'Dostawa i płatność', value: 'id_shipping-payment', position: 'center' },
                            { label: 'O nas', value: 'id_about', position: 'start' },
                            { label: 'Kontakt', value: 'id_contact', position: 'center' },
                        ].map((element) =>  (
                            <li
                                key={element.value}
                                className="list-item"
                                onClick={() => ![Routes.Home].includes(router.pathname as Routes)
                                    ? router.push(Routes.Home)
                                    : scrollToPositionId(element.value, element.position as ScrollLogicalPosition)}
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
