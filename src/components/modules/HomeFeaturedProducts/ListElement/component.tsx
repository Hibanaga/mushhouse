import React, { FunctionComponent } from 'react';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import routes from 'routes/routes';

import { getItem, setItem } from 'utils/localStorage';
import { getWords } from 'utils/string';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleFeaturedProductsItem: FunctionComponent<Props> = ({ product }) => {
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    const handleAddToCart = () => {
        const storageCart = getItem('shoppingCart');

        let shoppingCart = null;
        if (!storageCart) {
            shoppingCart = [{ id: product.id, quantity: 1 }];
        } else {
            const parseStorageCart = JSON.parse(storageCart);

            if (parseStorageCart.some(({ id }: {id: string}) => id === product.id )) {
                shoppingCart = parseStorageCart.map((element: {id: string, quantity: number}) => element.id === product.id ? { id: element.id, quantity: element.quantity + 1 } : element);
            } else {
                shoppingCart = [ ...parseStorageCart, { id: product.id, quantity: 1 } ];
            }
        }
        setItem('shoppingCart', JSON.stringify(shoppingCart));
    };

    return (
        <StyledComponent className="module-featured-products-list-element">
            <div className="wrapper-image">
                <img
                    src={product.imageUrl}
                    alt="alt product image"
                    className="image"
                />

                <div className="wrapper-icons">
                    {/*<div className="wrapper-icon">*/}
                    {/*    <CgArrowsExchangeAlt />*/}
                    {/*</div>*/}
                    <div className="wrapper-icon">
                        <MdFavorite />
                    </div>
                    <div
                        className="wrapper-icon"
                        onClick={() => handleAddToCart()}
                    >
                        <FiShoppingCart />
                    </div>
                </div>
            </div>
            <div
                className="wrapper-content"
                onClick={() => product.id && navigate(routes.Product.replace(':id', product.id))}
            >
                <h3 className="name">{product.name && getWords(product.name, 4)}</h3>
                <span className="price">{formatter.format(product.price as number)}</span>
            </div>
        </StyledComponent>
    );
};

export default ModuleFeaturedProductsItem;
