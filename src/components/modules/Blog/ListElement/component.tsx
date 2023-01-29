import React, { FunctionComponent } from 'react';
import { BsCalendar4 } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';

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

            <div className="row-activity">
                <div className="wrapper-activity">
                    <BsCalendar4 className="icon" />

                    <span className="description">
                        {post.createdAtDisplay}
                    </span>
                </div>

                <div className="wrapper-activity">
                    <GoComment className="icon" />

                    <span className="description">
                        {post.countComments}
                    </span>
                </div>
            </div>


            <div className="inner-content">
                <h2 className="title">{post.headline}</h2>
                <span className="subheadline">{post.description}</span>

                <div className="inner-actions">
                    <Button className="button-read-more">
                        Read More
                    </Button>
                </div>
            </div>

        </StyledComponent>
    );
};

export default BlogListElement;
