import React, { FunctionComponent, useEffect, useState } from 'react';

import { Option } from 'types/options';

import Product from 'models/Product';

import { listProducts } from 'services/products';

import Headline from 'components/layout/Headline';
import MenuFeatured from 'components/modules/HomeFeaturedProducts/List';

import StyledComponent from './styles';
import { Props } from './types';

const FeaturedProductSection: FunctionComponent<Props> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Option>({ value: 'all', label: 'All' });
    const [featuredProducts, setFeaturedProducts] = useState<Product[] | null>(null);

    const handleChangeCategory = (nextValue: Option) => setSelectedCategory(nextValue);

    useEffect(() => {
        fetchFeaturedProducts();
    }, []);

    const fetchFeaturedProducts = async () => {
        try {
            setIsLoading(true);
            const { meta, elements } = await listProducts();

            setFeaturedProducts(elements);
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <StyledComponent className="page-home-section-featured-product">
            <Headline headline="Featured Product" />
            <MenuFeatured
                elements={featuredProducts}
                selectedCategory={selectedCategory}
                onChangeCategory={handleChangeCategory}
            />
        </StyledComponent>
    );
};

export default FeaturedProductSection;
