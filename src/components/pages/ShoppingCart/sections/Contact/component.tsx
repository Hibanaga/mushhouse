import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import SimpleInput from 'components/layout/forms/SimpleInput';

import { Props } from './index';
import StyledComponent from './styles';

const ShoppingCartSectionContact: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="shopping-cart-section-contact">
            <h2 className="section-headline">Adres dostawy</h2>
            <Container className="layout-layout-container" >
                <h3 className="section-headline">Dane kontaktowe</h3>
                <Container className="inner-actions">
                    <SimpleInput placeholder="Imię" />
                    <SimpleInput placeholder="Nazwisko" />
                    <SimpleInput placeholder="Numer. tel." />
                    <SimpleInput placeholder="Email" />
                </Container>
            </Container>

            <Container className="layout-layout-container" >
                <h3 className="section-headline">Adres</h3>
                <Container className="inner-actions">
                    <SimpleInput placeholder="Kraj" />
                    <SimpleInput placeholder="Numer domu" />
                    <SimpleInput placeholder="Miasto" />
                    <SimpleInput placeholder="Numer mieszkania" />
                    <SimpleInput placeholder="Ulica" />
                    <SimpleInput placeholder="Kod pocztowy" />
                </Container>
            </Container>
        </StyledComponent>
    );
};

export default ShoppingCartSectionContact;
