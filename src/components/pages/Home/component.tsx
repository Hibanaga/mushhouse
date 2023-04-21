import React, { FunctionComponent, useEffect, useState } from 'react';
import { useAppContext } from 'context/AppContext';

import { PaginationParams } from 'types/options';
import { PageSizes } from 'types/pageSizes';

import Product from 'models/Product';

import { list, ListRequestParams } from 'requests/products';

import Head from 'components/layout/Head';
import Header from 'components/layout/Header';
import SectionAbout from 'components/pages/Home/sections/About';
import SectionAddress from 'components/pages/Home/sections/Address';
import SectionContact from 'components/pages/Home/sections/Contact';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';
import SectionShipping from 'components/pages/Home/sections/Shipping';
import SectionWorth from 'components/pages/Home/sections/Worth';

import { Props } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<Props> = ({  }) => {
    const { shoppingCart, fetchShoppingCart } = useAppContext();
    const [meta, setMeta] = useState<PaginationParams | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);
    const [filters, setFilters] = useState<ListRequestParams>({
        page_size: PageSizes.Medium,
    });

    useEffect(() => {
        filters && getProducts(filters);
    }, [JSON.stringify(filters)]);

    const getProducts = async (params: ListRequestParams) => {
        const { meta, elements } = await list(params);
        setMeta(meta);
        setProducts(elements.map((element) => new Product(element)));
        setFilters({ ...filters, page: meta.page });
    };

    const handleChangeFilter = (filterKey: string, value: string | number | boolean) => setFilters({ ...filters, [filterKey]: value });

    return (
        <StyledComponent className="page-home">
            <Head title="Szamanita" />

            <Header />
            <SectionHero />
            <SectionWorth />

            <SectionDetails
                meta={meta}
                products={products}
                onChange={handleChangeFilter}
            />

            <SectionShipping />
            <SectionAbout />
            <SectionContact />
            <SectionAddress />
        </StyledComponent>
    );
};

export default PageHome;
