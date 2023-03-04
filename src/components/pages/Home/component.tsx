import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';


const PageHome: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="page-home">
            <h1>
                hello world
            </h1>
        </StyledComponent>
    );
};

export default PageHome;
