import React, { FunctionComponent } from 'react';

import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const Header: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="layout-header">
        </StyledComponent>
    );
};

export default Header;
