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
            <Head title={`Zamówienie #${order.number}`} />
            <Header />
            <SectionDetails order={new Order(order)} />
            <HomeSectionAddress />

        </StyledComponent>
    );
};

export default PageConfirm;
