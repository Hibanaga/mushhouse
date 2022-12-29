import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutFormLabel: FunctionComponent<Props> = ({ label }) => {
    return (
        <StyledComponent className="layout-form-label">
            <span className="label">{label}</span>
        </StyledComponent>
    );
};

export default LayoutFormLabel;
