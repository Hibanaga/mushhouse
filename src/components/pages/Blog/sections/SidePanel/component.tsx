import React, { FunctionComponent, useEffect, useState } from 'react';

import Blog from 'models/Blog';

import SearchBar from 'components/modules/Blog/SearchBar';
import FilterElement from 'components/modules/Catalog/FilterElement';

import SideNewsElement from '../../../../modules/Blog/SideNewsElement';

import StyledComponent from './styles';
import { Props } from './types';

const menu = [
    { label: 'All', value: 'all' },
    { label: 'Beauty', value: 'beauty' },
    { label: 'Food', value: 'food' },
    { label: 'Life Style', value: 'life-style' },
];

const SidePanel: FunctionComponent<Props> = () => {
    const [news, setNews] = useState<Blog[] | null>(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 3 }, (_, index) => (new Blog({
                id: index.toString(),
                headline: '09 Kinds Of Vegetables',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/05/11/14/44/pencils-762555_960_720.jpg',
                createdAt: new Date(),
            }))),
        };

        setNews(response.elements);
    };

    console.log('news: ', news);

    return (
        <StyledComponent className="blog-sections-side-panel">
            <SearchBar />

            <FilterElement
                headline="Categories"
                className="menu-categories"
            >
                <ul className="menu">
                    {menu.map(({ label, value }) => (
                        <li
                            key={value}
                            className="list-item"
                        >
                            <span className="name">{label}</span>
                        </li>
                    ))}
                </ul>
            </FilterElement>


            <FilterElement className="menu-recents">
                <div className="inner-news">
                    {news && news.map((element) => (
                        <SideNewsElement
                            key={element.id}
                            post={element}
                        />
                    ))}
                </div>
            </FilterElement>
        </StyledComponent>
    );
};

export default SidePanel;
