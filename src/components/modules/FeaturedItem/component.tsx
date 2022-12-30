import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const FeaturedProductSection: FunctionComponent<Props> = ({ product }) => {
    return (
        <StyledComponent className="module-featured-item">
            <img
                src={product.imageUrl}
                alt="alt product image"
                className="image"
            />
            <div className="wrapper-content">
                <h3 className="name">{product.name}</h3>
                <span className="price">{product.price}</span>
            </div>
        </StyledComponent>
    );
};

export default FeaturedProductSection;
