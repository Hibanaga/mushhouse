import React, { FunctionComponent } from 'react';

import ListElement from 'components/modules/HomeBlog/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const BlogList: FunctionComponent<Props> = ({ blogs }) => {
    return (
        <StyledComponent className="module-home-blog-list">
            {blogs && blogs.map((element) => (
                <ListElement
                    key={element.id}
                    blog={element}
                />
            ))}
        </StyledComponent>
    );
};

export default BlogList;
