import React, { FunctionComponent } from 'react';

import Button from 'components/layout/Button';
import Input from 'components/layout/Input';
import { InputSizes, InputVariants } from 'components/layout/Input/types';
import LayoutSelect from 'components/layout/Select';

import { ButtonSizes } from '../../layout/Button/types';
import { SelectSizes } from '../../layout/Select/types';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleSearchBar: FunctionComponent<Props> = ({ selectedOption, onChangeVariant }) => {
    return (
        <StyledComponent className="module-search-bar">
            <div className="row">
                <div className="container-select">
                    <LayoutSelect
                        value={selectedOption}
                        options={[{ label:'hello', value:'hello' }, { label:'world', value:'world' }, { label:'goodbye', value:'goodbye' }]}
                        onChange={onChangeVariant}
                        size={SelectSizes.Medium}
                    />
                    <div className="separator" />
                </div>
                <Input
                    size={InputSizes.Medium}
                    variant={InputVariants.Primary}
                />
            </div>
            <Button size={ButtonSizes.Medium}>
                search
            </Button>
        </StyledComponent>
    );
};

export default ModuleSearchBar;
