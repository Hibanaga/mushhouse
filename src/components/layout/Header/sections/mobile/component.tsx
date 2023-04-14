import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Container from 'components/layout/Container';
import Drawer from 'components/layout/Drawer';
import translations from 'components/layout/Header/locales/ru.json';

import StyledComponent from './styles';
import { Props } from './types';


const LayoutHeaderSectionMobile: FunctionComponent<Props> = ({ isOpenMobileDrawer, onOpenDrawer, onCloseDrawer }) => {
    return (
        <StyledComponent className={classNames(['layout-header-section-mobile'])}>
            <Drawer isOpen={isOpenMobileDrawer}>
                <Container>
                    <div className="inner">
                        <div className="inner-header">
                            <h3 className="headline"></h3>
                        </div>


                        <div className="inner-navigation">
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
                </Container>
            </Drawer>
        </StyledComponent>
    );
};

export default LayoutHeaderSectionMobile;
