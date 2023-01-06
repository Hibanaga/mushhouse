import React, { FunctionComponent } from 'react';
import { addresses, links } from 'static/consts/footer';

import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';


const Footer: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="layout-footer">
            <PageContainer>
                <div className="wrapper wrapper-address">
                    <ul className="list">
                        {
                            addresses.map(({ label, value }) => (
                                <li
                                    key={label}
                                    className="item"
                                >
                                    <span className="description">{label}:</span>
                                    <span className="value">{value}</span>
                                </li>
                            ) )
                        }
                    </ul>
                </div>
                <div className="wrapper wrapper-links">
                    <h4 className="headline">Useful Links</h4>
                    <ul className="list">
                        {
                            links.map(({ label, value }) =>  (
                                <li
                                    key={label}
                                    className="item"
                                >
                                    <a
                                        href={value}
                                        className="link"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="wrapper wrapper-newsletter">
                    <h4 className="headline">Join Our Newsletter Now</h4>
                    <span className="description">Get E-mail updates about our latest shop and special offers.</span>
                </div>
            </PageContainer>
        </StyledComponent>
    );
};

export default Footer;
