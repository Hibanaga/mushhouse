import { GetServerSideProps } from 'next';

import { useAppContext } from '../../../context/AppContext';
import { list } from '../../../requests/products';
import { ShoppingCartProps } from '../../../types/options';
import { getItem } from '../../../utils/localStorage';

import Component from './component';

export interface Props {
}


Component.defaultProps = {
};

export const getStaticStaticProps: GetServerSideProps = async (context) => {
    // const { shoppingCart, fetchShoppingCart } = useAppContext();

    try {
        // const storageCart = getItem('shoppingCart');
        // const parsedShoppingCart = storageCart && JSON.parse(storageCart);
        // if (!shoppingCart?.length && parsedShoppingCart?.length) {
        //     const arrayIds = parsedShoppingCart.map((element: ShoppingCartProps)=> element.id);
        //     if (fetchShoppingCart) {
        //         await fetchShoppingCart({ products: arrayIds.join(',') });
        //     }
        // }


        return {
            props: {

            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {},
        };
    }
};

export default Component;
