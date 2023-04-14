import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';

const ShoppingCartSectionCart: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="shopping-cart-section-cart">
            <h2 className="section-headline">Twój koszyk</h2>
            <div className="inner-hero">
                <Container className="layout-hero-container">
                    <span className="data-head data-name">Produkt</span>
                    <span className="data-head data-count">Ilość</span>
                    <span className="data-head data-price">Cena</span>
                </Container>
            </div>
            <Container className="layout-body-container">

                <span className="data-empty">Kosz na razie pusty</span>

            </Container>
        </StyledComponent>
    );
};

export default ShoppingCartSectionCart;
