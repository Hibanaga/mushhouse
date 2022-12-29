import React, { FunctionComponent } from 'react';

import LayoutFormError from '../forms/Error';
import LayoutFormLabel from '../forms/Label';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutInput: FunctionComponent<Props> = ({ label, error, value, placeholder, onChange }) => {
    return (
        <StyledComponent className="layout-input">
            {label && <LayoutFormLabel label={label} />}
            <div className="wrapper-input">
                <input className="input" />
            </div>
            {error && <LayoutFormError error={error} />}
        </StyledComponent>
    );
};

export default LayoutInput;
