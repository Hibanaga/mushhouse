import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { getWords } from 'utils/string';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionDetails: FunctionComponent<Props> = ({ product }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <StyledComponent
            ref={ref}
            className={classNames([
                'product-section-details',
                inView ? 'animate-lazy-load': 'lazy-load',
            ])}
        >
            <h2 className="headline">Категории</h2>
            <ul className="list">
                {product?.categories?.map((element) => (
                    <li
                        key={element.name}
                        className="list-item"
                    >
                        <span className="data-name">{getWords(element.name, 2)}</span>
                        <span className="data-value">{element.value}</span>
                    </li>
                ))}
            </ul>
        </StyledComponent>
    );
};

export default ProductSectionDetails;
