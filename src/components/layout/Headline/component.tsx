import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const Headline: FunctionComponent<Props> = ({ headline, className }) => {
    return (
        <StyledComponent className={classNames(['layout-headline', className])}>
            <h1 className="headline">
                {headline}
                <div className="headline-underline" />
            </h1>
        </StyledComponent>
    );
};

export default Headline;
