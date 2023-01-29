import React, { FunctionComponent } from 'react';
import { BsSearch } from 'react-icons/bs';

import Button from 'components/layout/Button';
import Input from 'components/layout/Input';

import StyledComponent from './styles';
import { Props } from './types';

const SearchBar: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="blog-search-bar">
            <Input />
            <BsSearch className="icon" />
        </StyledComponent>
    );
};

export default SearchBar;
