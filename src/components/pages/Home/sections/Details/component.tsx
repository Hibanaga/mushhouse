import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import List from 'components/modules/List';

import StyledComponent from './styles';
import { Props } from './types';


const SectionDetails: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="section-details">
            <div className="inner-filter">
                <h2 className="headline">Наша продукция</h2>
            </div>

            <List />
        </StyledComponent>
    );
};

export default SectionDetails;
