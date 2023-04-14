import React, { FunctionComponent } from 'react';

import ListElement from 'components/modules/ListElement';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleList: FunctionComponent<Props> = ({ products }) => {
    return (
        <StyledComponent className="module-list">
            {products && products?.map((product) => (
                <ListElement
                    key={product.id}
                    product={product}
                />
            ))}
        </StyledComponent>
    );
};

export default ModuleList;
