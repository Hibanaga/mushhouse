import React, { FunctionComponent } from 'react';

import Order from 'models/Order';

import Head from 'components/layout/Head';
import Header from 'components/layout/Header';
import SectionDetails from 'components/pages/Confirm/sections/Details';
import HomeSectionAddress from 'components/pages/Home/sections/Address';

import { Props } from './index';
import StyledComponent from './styles';

const PageConfirm: FunctionComponent<Props> = ({ order }) => {
    return (
        <StyledComponent className="page-confirm">
            <Head
                title={`Zamówienie #${order.number}`}
                name="Mikrodawkowanie Amanita Muscaria"
                description="Produkty na podstawie muchomora czerwonego. Maści, kapsułki, kapelusze, proszek, Zbieramy i suszymy od 2012 roku. Dostawa w całej Polsce oraz innych krajach EU."
            />
            <Header />
            <SectionDetails order={new Order(order)} />
            <HomeSectionAddress />

        </StyledComponent>
    );
};

export default PageConfirm;
