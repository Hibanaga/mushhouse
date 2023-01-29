import React, { FunctionComponent } from 'react';

import Input from 'components/layout/Input';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-checkout-section-payment-form">

            <div className="inner-form">
                <Input
                    label="First Name"
                    className="input-first-name"
                    isRequired={true}
                />
                <Input
                    label="Last Name"
                    className="input-last-name"
                    isRequired={true}
                />
            </div>

            <Input
                label="Country"
                className="input-country"
                isRequired={true}
            />
            <Input
                label="Address"
                className="input-address"
                placeholder="Street Address"
                isRequired={true}
            />
            <Input
                className="input-apartment"
                placeholder="Apartment, suite, unite ect (optinal)"
            />

            <Input
                label="Town/City"
                className="input-town"
                isRequired={true}
            />
            <Input
                label="Country/State"
                className="input-country"
                isRequired={true}
            />
            <Input
                label="Postcode / ZIP"
                className="input-postcode"
                isRequired={true}
            />

            <div className="inner-form">
                <Input
                    label="Phone"
                    className="input-phone"
                    isRequired={true}
                />
                <Input
                    label="Email"
                    className="input-email"
                    isRequired={true}
                />
            </div>
        </StyledComponent>
    );
};

export default HomePage;
