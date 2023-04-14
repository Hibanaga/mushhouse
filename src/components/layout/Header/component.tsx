import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Pivot as Hamburger } from 'hamburger-react';

import Button from 'components/layout/Button';
import Container from 'components/layout/Container';
import translations from 'components/layout/Header/locales/ru.json';
import SectionMobile from 'components/layout/Header/sections/mobile';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutHeader: FunctionComponent<Props> = ({ isOpenMobileDrawer, onOpenDrawer, onCloseDrawer }) => {
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

    return (
        <StyledComponent className={classNames(['layout-header', { active: active }])}>
            <Container>
                <div className="inner-addtional">
                    <h1 className="headline">
                        Szamanita
                        <span className="subheadline">Лесная аптека</span>
                    </h1>
                    <Hamburger
                        toggled={isOpenMobileDrawer}
                        onToggle={() => !isOpenMobileDrawer ? onOpenDrawer() : onCloseDrawer()}
                    />


                    <div className="inner-contact">
                        <h3 className="headline-social">Чат с производителем:</h3>
                        <div className="inner-social">

                            {translations.socials.map(({ href, imageUrl }) => (
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
                        {translations.elementNavigations.map(({ label, value, position }) => (
                            <li
                                key={value}
                                className="list-item"
                                onClick={() => handleScrollToSection(value, position as ScrollLogicalPosition)}
                            >
                                <span className="data-label">{label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="inner-navigation-button">
                        <Button className="button-telegram">
                            Телеграм-канал
                        </Button>
                    </div>
                </div>
            </Container>

            <SectionMobile
                isOpenMobileDrawer={isOpenMobileDrawer}
                onOpenDrawer={onOpenDrawer}
                onCloseDrawer={onCloseDrawer}
            />
        </StyledComponent>
    );
};

export default LayoutHeader;
