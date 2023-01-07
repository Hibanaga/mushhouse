import React, { FunctionComponent } from 'react';

import DetailsProduct from 'components/modules/Product/DetailsProduct';
import ImageProductPanel from 'components/modules/Product/ImageProductPanel';

import StyledComponent from './styles';
import { Props } from './types';

const DetailsPanel: FunctionComponent<Props> = ({ product }) => {
    return (
        <StyledComponent className="module-product-details-panel">
            <div className="row-details">
                {product.imageUrl && (
                    <ImageProductPanel
                        imageUrl={product.imageUrl}
                        images={[product.imageUrl]}
                    />
                )}
                <DetailsProduct />
            </div>

            <div className="inner">

            </div>
        </StyledComponent>
    );
};

export default DetailsPanel;
