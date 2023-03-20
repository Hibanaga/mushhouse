import React, { FunctionComponent } from 'react';
import Select from 'react-select';
import { useAppContext } from 'context/AppContext';

import StyledComponent from './styles';
import { Props } from './types';

const SimpleInput: FunctionComponent<Props> = ({  multiline, hasClearButton, ...otherSelectProps }) => {
    return (
        <StyledComponent className="layout-form-simple-select">
            <Select
                isClearable={hasClearButton}
                isMulti={multiline}
                {...otherSelectProps}
            />
        </StyledComponent>
    );
};

export default SimpleInput;
