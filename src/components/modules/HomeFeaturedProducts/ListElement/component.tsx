import React, { FunctionComponent } from 'react';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { MdFavorite } from 'react-icons/md';

import Button from '../../../layout/Button';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleFeaturedProductsItem: FunctionComponent<Props> = ({ product }) => {
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    return (
        <StyledComponent className="module-featured-products-list-element">
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

            <div className="test-warapper">
                <Button>
                    dodaj do koszyka
                </Button>

                {/*<Button>*/}
                {/*    another action lol long text*/}
                {/*</Button>*/}
            </div>
        </StyledComponent>
    );
};

export default ModuleFeaturedProductsItem;
