import React, { FunctionComponent, useEffect } from 'react';
import { useAppContext } from 'context/AppContext';

import { list } from 'requests/categories';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import SectionAddress from 'components/pages/Home/sections/Address';
import SectionContact from 'components/pages/Home/sections/Contact';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';

import StyledComponent from './styles';
import { Props } from './types';


const PageHome: FunctionComponent<Props> = ({  }) => {
    const { fetchCategories } = useAppContext();

    useEffect(() => {
        fetchCategories && fetchCategories();
    }, []);

    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <SectionHero />
                <SectionDetails />
            </Container>

            <SectionContact />
            <SectionAddress />
        </StyledComponent>
    );
};

export default PageHome;
