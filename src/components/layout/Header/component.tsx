import React, { FunctionComponent, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Spin as Hamburger } from 'hamburger-react';
import routes from 'routes/routes';

import Drawer from 'components/layout/Drawer';

import StyledComponent from './styles';
import { Props } from './types';

const Header: FunctionComponent<Props> = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => setIsOpen(!isOpen);

    const menu = [
        {
            href: routes.Home,
            label: 'Home',
        },
        {
            href: routes.Catalog,
            label: 'Catalog',
        },
        {
            href: routes.Blog,
            label: 'Blog',
        },
    ];


    return (
        <StyledComponent className="layout-header">
            <div className="container">
                <div className="wrapper wrapper-logo">
                    <h1 className="headline-logo">MushHouse</h1>
                </div>
                <ul className="wrapper">
                    {menu.map(({ href, label }) => (
                        <li
                            key={href}
                            className={classNames([
                                'navigation-item',
                                href === pathname && 'active',
                            ])}
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
                <div className="wrapper wrapper-activity">
                    <div className="wrapper-icon">
                        <MdFavorite className="icon" />
                    </div>
                    <div className="wrapper-icon">
                        <RiShoppingCart2Fill className="icon" />
                    </div>
                </div>
            </div>


            <div className="inner-drawer">
                <Hamburger
                    toggled={isOpen}
                    onToggle={onToggle}
                    size={20}
                />
                <Drawer
                    isOpen={isOpen}
                    onClose={onToggle}
                >
                    <div className="drawer-body">
                        <ul className="list">
                            {menu.map(({ label, href }) => (
                                <li
                                    key={href}
                                    className="list-item"
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

                    </div>
                </Drawer>
            </div>
        </StyledComponent>
    );
};

export default Header;
