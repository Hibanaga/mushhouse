import React, { FunctionComponent, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import classNames from 'classnames';
import { useAppContext } from 'context/AppContext';

import Button from 'components/layout/Button';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionHero: FunctionComponent<Props> = ({ product }) => {
    const { onAddElement } = useAppContext();

    const [previewImageUrl, setPreviewImageUrl] = useState<string | undefined>(product?.imageUrl);

    return (
        <StyledComponent className="product-section-hero">
            <div className="column-images">
                {previewImageUrl && (
                    <div className="inner-image">
                        <Image
                            fill
                            priority
                            objectFit="cover"
                            src={previewImageUrl}
                            alt="alt image product"
                        />
                    </div>
                )}

                {product?.images && (
                    <div className="slider-wrapper">
                        <Slider
                            swipe
                            arrows={false}
                            slidesToShow={3}
                            slidesToScroll={1}
                            centerMode={true}
                            autoplay={true}
                            autoplaySpeed={5000}
                            centerPadding="5px"
                            // nextArrow={<CustomArrowButton />}
                            // prevArrow={<CustomArrowButton />}
                        >
                            {product?.images.map((imageUrl) => (
                                <div
                                    key={imageUrl}
                                    className="slide-item"
                                    onClick={() => setPreviewImageUrl(imageUrl)}
                                >

                                    <Image
                                        fill
                                        objectFit="cover"
                                        src={imageUrl}
                                        alt={imageUrl}
                                    />
                                </div>
                            ))}

                        </Slider>
                    </div>
                )}


            </div>

            <div className="column-details">
                <h3 className="data-headline">{product?.fullDisplayName}</h3>
                <span className="data-price">{product?.priceDisplay}</span>

                <Button
                    className="button-add-to-cart"
                    onClick={() => onAddElement && onAddElement(product)}
                >
                    Do Koszyka
                </Button>

                <span className="data-description">
                    {product?.description}
                </span>
            </div>
        </StyledComponent>
    );
};

export default ProductSectionHero;
