import React, { FunctionComponent, useEffect, useState } from 'react';

import Blog from 'models/Blog';

import StyledComponent from './styles';
import { Props } from './types';

const DetailsPanel: FunctionComponent<Props> = () => {
    const [posts, setPosts] = useState<Blog[] | null>(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 6 }, (_, index) => (new Blog({
                id: index.toString(),
                headline: 'The Moment You Need To Remove Garlic From The Menu',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/05/11/14/44/pencils-762555_960_720.jpg',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                createdAt: new Date(),
            }))),
        };

        setPosts(response.elements);
    };


    return (
        <StyledComponent className="blog-sections-details-panel">
        </StyledComponent>
    );
};

export default DetailsPanel;
