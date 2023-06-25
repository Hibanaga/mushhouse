import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppContext';

import Routes from 'types/routes';

import Product from 'models/Product';

import Button from 'components/layout/Button';
import { ButtonVariants } from 'components/layout/Button/types';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleListElement: FunctionComponent<Props> = ({ product }) => {
    const router = useRouter();
    const { onAddElement } = useAppContext();

    const handleAddElementToShoppingCart = (product: Product) => {
        onAddElement && onAddElement(product);
    };

    return (
        <StyledComponent className="module-list-element">
            {product.imageUrl && (
                <div className="inner-image">
                    <Image
                        src={product.imageUrl}
                        alt="alt image product"
                        sizes=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}

            <div className="inner-main">
                <div className="inner-content">
                    <h3 className="data-name">{product?.fullDisplayName || product?.name}</h3>
                    <div>

                        {product?.shortDescription && (
                            <span
                                className="data-description"
                                dangerouslySetInnerHTML={{ __html: product?.shortDescription }}
                            />
                        )}
                        {product?.category && (
                            <span
                                className="data-category"
                                dangerouslySetInnerHTML={{ __html: product?.category }}
                            />
                        )}
                        <span className="data-price">{product?.priceDisplay}</span>
                    </div>
                </div>

                <div className="inner-action">

                    <Button
                        className="button-details"
                        variant={ButtonVariants.Outline}
                    >

                        <Link
                            className="link-item"
                            href={`${Routes.Product}?id=${product.id}`}
                        >
                                Zobacz Więcej
                        </Link>
                    </Button>
                    <Button
                        className="button-add-cart"
                        onClick={() => handleAddElementToShoppingCart(product)}
                    >
                        Do Koszyka
                    </Button>
                </div>
            </div>
        </StyledComponent>
    );
};

export default ModuleListElement;
