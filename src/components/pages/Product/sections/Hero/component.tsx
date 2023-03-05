import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { getWords } from 'utils/string';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionHero: FunctionComponent<Props> = ({ product }) => {
    console.log('product: ', product);

    return (
        <StyledComponent className="product-section-hero">
            <div className="column-images">
                {product.imageUrl && (
                    <Image
                        src={product.imageUrl}
                        alt="alt image product"
                        width={432}
                        height={432}
                        className="image"
                        quality={100}
                    />
                )}
            </div>

            <div className="column-details">
                <h3 className="data-headline">{product.fullDisplayName}</h3>
                <span className="data-price">{product.price}</span>
                <ul className="list">
                    {product.categories?.map((element) => (
                        <li
                            key={element.name}
                            className="list-item"
                        >
                            <span className="data-name">{getWords(element.name, 3)}</span>
                            <span className="data-value">{element.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledComponent>
    );
};

export default ProductSectionHero;
