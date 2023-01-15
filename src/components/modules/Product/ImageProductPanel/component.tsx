import React, { FunctionComponent, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import StyledComponent from './styles';
import { Props } from './types';

const ImageProductPanel: FunctionComponent<Props> = ({ images }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(images[0]);
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 'auto',
        containScroll: 'trimSnaps',
    }, [Autoplay()]);

    return (
        <StyledComponent className="module-product-image-product-panel">

            <div className="inner-image">
                <img
                    src={selectedPhoto}
                    alt="alt image product"
                    className="image"
                />
            </div>

            <div
                className="embla"
                ref={emblaRef}
            >
                <div className="embla-container">
                    {
                        images.map((imageUrl) => (
                            <img
                                key={imageUrl}
                                src={imageUrl}
                                alt="embla carousel"
                                className="embla-slide image"
                                onClick={() => setSelectedPhoto(imageUrl)}
                            />
                        ))
                    }
                </div>
            </div>
        </StyledComponent>
    );
};

export default ImageProductPanel;
