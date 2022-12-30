import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import FeaturedItem from '../FeaturedItem';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleMenuFeatured: FunctionComponent<Props> = ({ elements, selectedCategory, onChangeCategory }) => {
    const menu = [
        { value: 'all', label: 'All' },
        { value: 'oranges', label: 'Oranges' },
        { value: 'fresh-meat', label: 'Fresh Meat' },
        { value: 'vegetables', label: 'Vegetables' },
        { value: 'fastfood', label: 'Fastfood' },
    ];

    return (
        <StyledComponent className="module-menu-featured">
            <ul className="navigation-menu">
                {menu.map((option) => (
                    <li
                        key={option.value}
                        className="item"
                        onClick={() => onChangeCategory(option)}
                    >
                        <span className="content">
                            {option.label}
                            <div className={classNames([
                                'underline',
                                option.value === selectedCategory.value && 'active',
                            ])}
                            />
                        </span>
                    </li>
                ) )}
            </ul>

            {!!elements &&  (
                <div className="row-elements">
                    {elements.map((product) => (
                        <FeaturedItem
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}

        </StyledComponent>
    );
};

export default ModuleMenuFeatured;
