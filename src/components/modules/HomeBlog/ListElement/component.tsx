import React, { FunctionComponent } from 'react';
import { BsCalendar4 } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';

import StyledComponent from './styles';
import { Props } from './types';

const ListElement: FunctionComponent<Props> = ({ blog }) => {
    return (
        <StyledComponent className="mobule-home-blog-list-element">
            <div className="wrapper-image">
                <img
                    src={blog.imageUrl}
                    alt={blog.headline}
                    className="image"
                />
            </div>

            <div className="wrapper-content">
                <div className="row-activity">
                    <div className="wrapper-activity">
                        <BsCalendar4 className="icon" />

                        <span className="description">
                            {blog.createdAtDisplay}
                        </span>
                    </div>

                    <div className="wrapper-activity">
                        <GoComment className="icon" />

                        <span className="description">
                            {blog.countComments}
                        </span>
                    </div>
                </div>

                <h2 className="headline">
                    {blog.headline}
                </h2>
                <span className="description">
                    {blog.description}
                </span>
            </div>
        </StyledComponent>
    );
};

export default ListElement;
