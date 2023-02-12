import React, { FunctionComponent, useEffect, useState } from 'react';

import { Option } from 'types/options';

import Product from 'models/Product';

import Headline from 'components/layout/Headline';
import MenuFeatured from 'components/modules/HomeFeaturedProducts/List';

import StyledComponent from './styles';
import { Props } from './types';

const FeaturedProductSection: FunctionComponent<Props> = () => {
    const [selectedCategory, setSelectedCategory] = useState<Option>({ value: 'all', label: 'All' });
    const [featuredProducts, setFeaturedProducts] = useState<Product[] | null>(null);

    const handleChangeCategory = (nextValue: Option) => setSelectedCategory(nextValue);

    useEffect(() => {
        fetchFeaturedProducts();
    }, []);

    const fetchFeaturedProducts = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 8 }, (_, index) => (new Product({
                id: index.toString(),
                name: 'Crab Pool Security',
                category: 'fresh-meat',
                price: (index + 1) * 12.33,
                imageUrl: 'https://media.istockphoto.com/id/1148854779/pl/wektor/jab%C5%82ko.jpg?s=612x612&w=is&k=20&c=8ueQOfgiB-o2botZD7pVdqNeKNLuYegKLSmxrqJrTl8=',
            }))),
        };

        setFeaturedProducts(response.elements);
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
