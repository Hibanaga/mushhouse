import React, { FunctionComponent, useState } from 'react';
import { BsHeart } from 'react-icons/bs';

import Button from 'components/layout/Button';
import Counter from 'components/layout/Counter';

import StyledComponent from './styles';
import { Props } from './types';

const DetailsProduct: FunctionComponent<Props> = ({ product }) => {
    const [counter, setCounter] = useState(1);

    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    return (
        <StyledComponent className="module-product-details-product">
            <h2 className="name">
                {product?.name}
            </h2>

            <div className="inner-rating">
                <div className="inner-stars">
                </div>
                <span className="count-reviews">
                    ({product?.countReviews} reviews)
                </span>
            </div>

            <span className="price">
                {product?.price && formatter.format(product.price)}
            </span>

            <span className="description">
                {product?.description}
            </span>


            <div className="inner-actions">
                <Counter
                    value={counter}
                    onChange={(value) => setCounter(value)}
                />
                <Button
                    onClick={() => console.log('aaa')}
                    className="add-to-cart-action"
                >
                    add to cart
                </Button>

                <Button
                    onClick={() => console.log('bbb')}
                    className="like-action"
                >
                    <BsHeart className="icon" />
                </Button>
            </div>


            <div className="inner-details">
                <div className="inner-detail">
                    <span className="option-description">Availability</span>
                    <span className="value">{product?.accesibility ? 'In Stock' : 'Out Stock'}</span>
                </div>

                <div className="inner-detail">
                    <span className="option-description">Weight</span>
                    <span className="value">{product?.weight} kg</span>
                </div>
            </div>
        </StyledComponent>
    );
};

export default DetailsProduct;
