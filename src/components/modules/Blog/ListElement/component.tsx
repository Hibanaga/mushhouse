import React, { FunctionComponent } from 'react';

import Button from '../../../layout/Button';

import StyledComponent from './styles';
import { Props } from './types';

const BlogListElement: FunctionComponent<Props> = ({ post }) => {
    return (
        <StyledComponent className="module-blog-list-element">
            <div className="inner-image">
                <img
                    src={post.imageUrl}
                    alt="blog preview image"
                    className="image"
                />
            </div>


            <div className="inner-content">
                <h2 className="title">{post.headline}</h2>
                <span className="description">{post.description}</span>

                <Button className="button-read-more">
                    Read More
                </Button>
            </div>

        </StyledComponent>
    );
};

export default BlogListElement;
