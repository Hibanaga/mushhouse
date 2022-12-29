import React, { FunctionComponent } from 'react';
import { MdFavorite } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';

import StyledComponent from './styles';
import { Props } from './types';

const Header: FunctionComponent<Props> = () => {
    const menu = [
        {
            href: 'shop',
            label: 'Shop',
        },
        {
            href: 'locations',
            label: 'Locations',
        },
        {
            href: 'random',
            label: 'Random',
        },
        {
            href: 'another',
            label: 'Another',
        },
    ];


    return (
        <StyledComponent className="layout-header">
            <div className="container">
                <div className="wrapper">
                    <h1 className="headline-logo">MushHouse</h1>
                </div>
                <ul className="wrapper">
                    {menu.map(({ href, label }) => (
                        <li
                            key={href}
                            className="navigation-item"
                        >
                            <a
                                href={href}
                                className="link"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="wrapper">
                    <div className="wrapper-icon">
                        <MdFavorite />
                    </div>
                    <div className="wrapper-icon">
                        <RiShoppingCart2Fill />
                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

export default Header;
