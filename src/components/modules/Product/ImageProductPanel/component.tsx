import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const ImageProductPanel: FunctionComponent<Props> = ({ images, imageUrl }) => {
    return (
        <StyledComponent className="module-product-image-product-panel">

            <div className="inner-image">
                <img
                    src={imageUrl}
                    alt="alt image product"
                    className="image"
                />
            </div>
        </StyledComponent>
    );
};

export default ImageProductPanel;
