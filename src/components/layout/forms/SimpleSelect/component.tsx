import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import SimpleError from '../SimpleError';

import StyledComponent from './styles';
import { Props } from './types';

const SimpleInput: FunctionComponent<Props> = ({  multiline, hasClearButton, error, ...otherSelectProps }) => {
    return (
        <StyledComponent className="layout-form-simple-select">
            <Select
                isClearable={hasClearButton}
                isMulti={multiline}
                {...otherSelectProps}
            />

            {error && <SimpleError error={error} />}
        </StyledComponent>
    );
};

export default SimpleInput;
