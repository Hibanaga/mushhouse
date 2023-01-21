import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const FilterElement: FunctionComponent<Props> = ({ headline, children, className }) => {
    return (
        <StyledComponent className={classNames(['module-catalog-filter-element', className])}>
            {headline && <h2 className="headline">{headline}</h2>}
            <div className="inner">{children}</div>
        </StyledComponent>
    );
};

export default FilterElement;
