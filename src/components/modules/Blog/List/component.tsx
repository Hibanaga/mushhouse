import React, { FunctionComponent } from 'react';

import Pagination from 'components/layout/Pagination';
import ListElement from 'components/modules/Blog/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const BlogList: FunctionComponent<Props> = ({ posts }) => {
    return (
        <StyledComponent className="module-blog-list">
            <div className="row-posts">
                {posts.map((post) => (
                    <ListElement
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>

            <Pagination
                page={1}
                perPage={12}
                itemsTotalLength={25}
                onPageChange={() => console.log('aaa')}
            />

        </StyledComponent>
    );
};

export default BlogList;
