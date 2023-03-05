import React, { FunctionComponent } from 'react';

import { getWords } from 'utils/string';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionDetails: FunctionComponent<Props> = ({ product }) => {
    return (
        <StyledComponent className="product-section-details">
            <h2 className="headline">Категории</h2>
            <ul className="list">
                {product.categories?.map((element) => (
                    <li
                        key={element.name}
                        className="list-item"
                    >
                        <span className="data-name">{getWords(element.name, 2)}</span>
                        <span className="data-value">{element.value}</span>
                    </li>
                ))}
            </ul>
        </StyledComponent>
    );
};

export default ProductSectionDetails;
