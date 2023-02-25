import React, { FunctionComponent, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import DescriptionPanel from 'components/modules/Product/DescriptionPanel';
import DetailsProduct from 'components/modules/Product/DetailsProduct';

import StyledComponent from './styles';
import { Props } from './types';

const SectionDetailsPanel: FunctionComponent<Props> = ({ product }) => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 'auto',
        containScroll: 'trimSnaps',
    }, [Autoplay()]);

    return (
        <StyledComponent className="section-details-panel">

            <div className="columns">
                <div className="column-gallery">
                    <div className="inner-image">
                        <img
                            src={product.images && product.images[0]}
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
                                product.images && product.images.map((imageUrl) => (
                                    <img
                                        key={imageUrl}
                                        src={imageUrl}
                                        alt="embla carousel"
                                        className="embla-slide image"
                                        // onClick={() => setSelectedPhoto(imageUrl)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <DetailsProduct product={product} />
            </div>
            <DescriptionPanel product={product} />
        </StyledComponent>
    );
};

export default SectionDetailsPanel;
