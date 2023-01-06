import React, { FunctionComponent, useEffect, useState } from 'react';

import Blog from 'models/Blog';

import Headline from 'components/layout/Headline';
import List from 'components/modules/HomeBlog/List';

import StyledComponent from './styles';
import { Props } from './types';

const BlogSection: FunctionComponent<Props> = ({ }) => {
    const [blogs, setBlogs] = useState<Blog[] | null>(null);

    useEffect(() => {
        fetchFeaturedProducts();
    }, []);

    const fetchFeaturedProducts = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 3 }, (_, index) => (new Blog({
                id: index.toString(),
                headline: 'Cooking tips make cooking simple',
                description: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                createdAt: new Date(),
                imageUrl: 'https://cdn.pixabay.com/photo/2015/05/11/14/44/pencils-762555_960_720.jpg',
                countComments: index + 1,
            }))),
        };

        setBlogs(response.elements);
    };


    return (
        <StyledComponent className="home-section-blog">
            <Headline headline="From The Blog" />
            <List blogs={blogs} />
        </StyledComponent>
    );
};

export default BlogSection;
