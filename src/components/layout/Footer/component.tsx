import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { addresses, links } from 'static/consts/footer';

import Button from 'components/layout/Button';
import { ButtonSizes, ButtonTypes } from 'components/layout/Button/types';
import Input from 'components/layout/Input';
import { InputSizes } from 'components/layout/Input/types';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';


const Footer: FunctionComponent<Props> = ({ }) => {
    const [email, setEmail] = useState('');

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

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
                    <span className="subheadline">Get E-mail updates about our latest shop and special offers.</span>

                    <form className="inner-email">
                        <Input
                            placeholder="Enter your mail"
                            size={InputSizes.Medium}
                            onChange={handleChangeInput}
                            value={email}
                        />
                        <Button
                            type={ButtonTypes.Submit}
                            size={ButtonSizes.Medium}
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </PageContainer>
        </StyledComponent>
    );
};

export default Footer;
