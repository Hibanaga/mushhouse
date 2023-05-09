import React, { FunctionComponent, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useAppContext } from 'context/AppContext';

import { getWords } from 'utils/string';

import Button from 'components/layout/Button';
import LightBox from 'components/layout/LightBox';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionHero: FunctionComponent<Props> = ({ product }) => {
    const { onAddElement } = useAppContext();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const CustomArrowButton = (props: any) => {
        const { style, onClick } = props;

        return (
            <div
                className="button-arrow"
                style={{ ...style }}
                onClick={onClick}
            >
                <Image
                    fill
                    objectFit="contain"
                    src="/images/slider-arrow.svg"
                    alt="arrow button icon"
                    className="image"
                />
            </div>
        );
    };

    return (
        <StyledComponent className="product-section-hero">
            {selectedImage && (
                <LightBox
                    imageSrc={selectedImage}
                    onClose={() =>setSelectedImage(null)}
                />
            )}

            <div className="column-images">
                {product?.images && (
                    <div className="slider-wrapper">
                        <Slider
                            swipe
                            arrows
                            slidesToShow={1}
                            slidesToScroll={1}
                            centerMode={true}
                            autoplay={true}
                            autoplaySpeed={5000}
                            centerPadding="0"
                            nextArrow={<CustomArrowButton />}
                            prevArrow={<CustomArrowButton />}
                        >
                            {product?.images.map((imageUrl) => (
                                <div
                                    key={imageUrl}
                                    className="slide-item"
                                    onClick={() => setSelectedImage(imageUrl)}
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
                <h3 className="data-headline">{product?.name}</h3>

                <ul className="list">
                    {product?.categories?.map((element) => (
                        <li
                            key={element.name}
                            className="list-item"
                        >
                            <span className="data-name">{getWords(element.name, 2)}</span>
                            {' - '}
                            <span className="data-value">{element.value}</span>
                        </li>
                    ))}
                </ul>

                <span className="data-price">{product?.priceDisplay}</span>

                <Button
                    className="button-add-to-cart"
                    onClick={() => onAddElement && onAddElement(product)}
                >
                    Do Koszyka
                </Button>
            </div>
        </StyledComponent>
    );
};

export default ProductSectionHero;
