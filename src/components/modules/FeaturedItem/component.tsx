import React, { FunctionComponent } from 'react';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { MdFavorite } from 'react-icons/md';

import StyledComponent from './styles';
import { Props } from './types';

const FeaturedProductSection: FunctionComponent<Props> = ({ product }) => {
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    return (
        <StyledComponent className="module-featured-item">
            <div className="wrapper-image">
                <img
                    src={product.imageUrl}
                    alt="alt product image"
                    className="image"
                />

                <div className="wrapper-icons">
                    <div className="wrapper-icon">
                        <CgArrowsExchangeAlt />
                    </div>
                    <div className="wrapper-icon">
                        <MdFavorite />
                    </div>
                    <div className="wrapper-icon">
                        <FiShoppingCart />
                    </div>
                </div>
            </div>
            <div className="wrapper-content">
                <h3 className="name">{product.name}</h3>
                <span className="price">{formatter.format(product.price as number)}</span>
            </div>
        </StyledComponent>
    );
};

export default FeaturedProductSection;
