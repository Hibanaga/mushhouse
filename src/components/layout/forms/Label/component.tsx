import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutFormLabel: FunctionComponent<Props> = ({ label, isRequired }) => {
    return (
        <StyledComponent className="layout-form-label">
            <span className="label">{label}</span>
            {isRequired && <span className="label-required">*</span>}
        </StyledComponent>
    );
};

export default LayoutFormLabel;
