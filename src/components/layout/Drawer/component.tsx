import React, { FunctionComponent, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Spin as Hamburger } from 'hamburger-react';

import StyledComponent from './styles';
import { Props } from './types';

const Header: FunctionComponent<Props> = ({ children, className, onClose, isOpen, position }) => {
    const bodyRef = useRef(document.querySelector('body'));

    useEffect(() => {
        const updatePageScroll = () => {
            if (isOpen) {
                if (bodyRef.current) bodyRef.current.style.overflow = 'hidden';
            } else {
                if (bodyRef.current) bodyRef.current.style.overflow = '';
            }
        };

        updatePageScroll();
    }, [isOpen]);

    return (
        <StyledComponent
            aria-hidden="true"
            className={classNames(['layout-drawer', 'overlay', isOpen ? 'overlayOpen' : 'overlayHidden'])}
        >
            <div
                className={classNames(['drawer', isOpen ? 'animate' : 'hidden', position])}
            >
                <div className="header">
                    <Hamburger
                        toggled={isOpen}
                        onToggle={onClose}
                        size={20}
                    />
                </div>

                <div className="inner">
                    {children}
                </div>
            </div>
        </StyledComponent>
    );
};

export default Header;
