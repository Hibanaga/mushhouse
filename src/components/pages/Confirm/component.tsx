import React, { FunctionComponent } from 'react';

import Head from 'components/layout/Head';
import Header from 'components/layout/Header';
import SectionDetails from 'components/pages/Confirm/sections/Details';
import HomeSectionAddress from 'components/pages/Home/sections/Address';

import { Props } from './index';
import StyledComponent from './styles';

const PageConfirm: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-confirm">
            <Head title="Confirm" />
            <Header />
            <SectionDetails />
            <HomeSectionAddress />

        </StyledComponent>
    );
};

export default PageConfirm;
