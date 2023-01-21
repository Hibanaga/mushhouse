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
            <div className="row-user-inputs">
                <div className="container-select">
                    <LayoutSelect
                        selectedOption={selectedOption}
                        options={[{ label:'hello', value:'hello' }, { label:'world', value:'world' }, { label:'goodbye', value:'goodbye' }]}
                        onChange={onChangeVariant}
                        size={SelectSizes.Medium}
                    />
                    <div className="separator" />
                </div>
                <Input
                    size={InputSizes.Medium}
                    variant={InputVariants.Primary}
                    placeholder="random placeholder"
                />
            </div>
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
