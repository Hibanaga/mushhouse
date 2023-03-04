import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';


const PageHome: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="page-home">
            <h2>
                changed title with automation deploy
            </h2>
        </StyledComponent>
    );
};

export default PageHome;
