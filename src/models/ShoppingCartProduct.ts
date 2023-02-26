import ApiShoppingCartProduct from 'types/api/ShoppingCartProduct';

import Product from './Product';


export default class ShoppingCartProduct extends Product {
    quantity?: number;

    constructor(data: ApiShoppingCartProduct) {
        super(data);
        this.quantity = data.quantity && data.quantity;
    }
};
