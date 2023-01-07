import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const DetailsProduct: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="module-product-details-product">
            <h2 className="name"></h2>

            <div className="inner-rating">
                <div className="inner-stars">
                </div>
                <span className="count-reviews"></span>
            </div>

            <span className="price"></span>

            <span className="description"></span>


            <div className="inner-actions">

            </div>


            <div className="inner-details">
                <div className="inner-detail">
                    <span className="description">Availability</span>
                    <span className="value">In Stock</span>
                </div>

                <div className="inner-detail">
                    <span className="description">Weight</span>
                    <span className="value">0.5 kg</span>
                </div>
            </div>
        </StyledComponent>
    );
};

export default DetailsProduct;
