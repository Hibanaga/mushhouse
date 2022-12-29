import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutFormError: FunctionComponent<Props> = ({ error }) => {
    return (
        <StyledComponent className="layout-form-error">
            <span className="error">{error}</span>
        </StyledComponent>
    );
};

export default LayoutFormError;
