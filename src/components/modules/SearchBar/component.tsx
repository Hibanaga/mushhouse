import React, { FunctionComponent } from 'react';

import Button from '../../layout/Button';
import Input from '../../layout/Input';
import LayoutSelect from '../../layout/Select';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleSearchBar: FunctionComponent<Props> = ({ selectedOption, onChangeVariant }) => {
    return (
        <StyledComponent className="module-search-bar">
            <LayoutSelect
                value={selectedOption}
                options={[{ label:'hello', value:'hello' }, { label:'world', value:'world' }, { label:'goodbye', value:'goodbye' }]}
                onChange={onChangeVariant}
            />
            <Input />
            <Button >
                search
            </Button>
        </StyledComponent>
    );
};

export default ModuleSearchBar;
