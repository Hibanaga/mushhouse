import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Modal from 'components/layout/Modal';

import ShoppingCartListElement from '../ShoppingCartListElement';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartModal: FunctionComponent<Props> = ({ shoppingCart, onClose }) => {
    const router = useRouter();

    return (
        <StyledComponent className="module-shopping-cart-modal">
            <Modal
                hasCancelButton
                onClose={() => onClose && onClose()}
            >
                <div className="inner-body">
                    <h3 className="subheadline">Ваш заказ:</h3>

                    <div className="inner-shopping-cart">
                        {shoppingCart.map((product) => (
                            <ShoppingCartListElement
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </Modal>
        </StyledComponent>
    );
};

export default ModuleShoppingCartModal;
