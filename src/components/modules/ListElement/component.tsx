import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppContext';

import Routes from 'types/routes';

import Product from 'models/Product';

import { getSenteces, shorten } from 'utils/string';

import Button from 'components/layout/Button';
import { ButtonVariants } from 'components/layout/Button/types';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleListElement: FunctionComponent<Props> = ({ product }) => {
    const router = useRouter();
    const { onAddElement, fetchShoppingCart } = useAppContext();

    const handleAddShoppingCart =  (product: Product) => {
        const arrayIds = onAddElement && onAddElement(product);

        if (arrayIds && fetchShoppingCart) {
            fetchShoppingCart({ shoppingIds: arrayIds });
        }
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
                    <h3 className="data-name">{product?.fullDisplayName ?? product?.name}</h3>
                    <div>
                        {product?.description && <span className="data-description">{getSenteces(shorten(product.description, 52), 1)}</span>}
                        {product?.category && <span className="data-category">{getSenteces(shorten(product.category, 52), 1)}</span>}
                        <span className="data-price">{product?.priceDisplay}</span>
                    </div>
                </div>

                <div className="inner-action">
                    <Button
                        className="button-details"
                        variant={ButtonVariants.Outline}
                        onClick={() => router.push({
                            pathname: Routes.Product,
                            query: { id: product.id },
                        })}
                    >
                        Zobacz Więcej
                    </Button>
                    <Button
                        className="button-add-cart"
                        onClick={() => handleAddShoppingCart(product)}
                    >
                        Do Koszyka
                    </Button>
                </div>
            </div>
        </StyledComponent>
    );
};

export default ModuleListElement;
