import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Routes from 'types/routes';

import { getItem, setItem } from 'utils/localStorage';

import Button from 'components/layout/Button';
import { ButtonVariants } from 'components/layout/Button/types';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleListElement: FunctionComponent<Props> = ({ product }) => {
    const router = useRouter();

    const handleAddShoppingCart = () => {
        const storageCart = getItem('shoppingCart');

        let shoppingCart = null;
        if (!storageCart) {
            shoppingCart = [{ id: product.id, quantity: 1 }];
        } else {
            const parseStorageCart = JSON.parse(storageCart);

            if (parseStorageCart.some(({ id }: {id: string}) => id === product.id )) {
                shoppingCart = parseStorageCart.map((element: {id: string, quantity: number}) => element.id === product.id ? { id: element.id, quantity: element.quantity + 1 } : element);
            } else {
                shoppingCart = [ ...parseStorageCart, { id: product.id, quantity: 1 } ];
            }
        }

        setItem('shoppingCart', JSON.stringify(shoppingCart));
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
                    />
                </div>
            )}

            <div className="inner-main">
                <div className="inner-content">
                    <h3 className="data-name">{product?.fullDisplayName ?? product?.name}</h3>
                    <div>
                        <span className="data-category">{product?.category ?? ''}</span>
                        <span className="data-price">{product?.priceDisplay}</span>
                    </div>

                </div>

                <div className="inner-action">
                    <Button
                        className="button-add-cart"
                        onClick={() => handleAddShoppingCart()}
                    >
                        В корзину
                    </Button>
                    <Button
                        className="button-details"
                        variant={ButtonVariants.Outline}
                        onClick={() => router.push({
                            pathname: Routes.Product,
                            query: { id: product.id },
                        })}
                    >
                        Подробнее
                    </Button>
                </div>
            </div>
        </StyledComponent>
    );
};

export default ModuleListElement;
