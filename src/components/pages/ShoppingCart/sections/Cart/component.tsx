import React, { FunctionComponent, useEffect, useState } from 'react';

import Product from 'models/Product';

import List from 'components/modules/ShoppingCart/List';

import StyledComponent from './styles';
import { Props } from './types';

const ShoppingCartSection: FunctionComponent<Props> = () => {
    const [shoppingCart, setShoppingCart] = useState<Product[] | null>(null);


    useEffect(() => {
        fetchShoppingCart();
    }, []);

    const fetchShoppingCart = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 4 }, (_, index) => (new Product({
                id: index.toString(),
                name: 'Crab Pool Security',
                category: 'fresh-meat',
                price: (index + 1) * 12.33,
                imageUrl: 'https://media.istockphoto.com/id/1148854779/pl/wektor/jab%C5%82ko.jpg?s=612x612&w=is&k=20&c=8ueQOfgiB-o2botZD7pVdqNeKNLuYegKLSmxrqJrTl8=',
            }))),
        };

        setShoppingCart(response.elements);
    };

    return (
        <StyledComponent className="page-shopping-cart-section-cart">
            <List products={shoppingCart} />
        </StyledComponent>
    );
};

export default ShoppingCartSection;
