import React, { FunctionComponent } from 'react';

import Button from 'components/layout/Button';
import { ButtonSizes } from 'components/layout/Button/types';
import Input from 'components/layout/Input';
import { InputSizes, InputVariants } from 'components/layout/Input/types';
import LayoutSelect from 'components/layout/Select';
import { SelectSizes } from 'components/layout/Select/types';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleSearchBar: FunctionComponent<Props> = ({ selectedOption, onChangeVariant }) => {
    return (
        <StyledComponent className="module-search-bar">
            <Input
                size={InputSizes.Medium}
                variant={InputVariants.Primary}
                placeholder="random placeholder"
            />
            <Button
                size={ButtonSizes.Medium}
                className="button-search"
            >
                search
            </Button>
        </StyledComponent>
    );
};

export default ModuleSearchBar;
