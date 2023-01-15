import React, { FunctionComponent } from 'react';

import DescriptionPanel from 'components/modules/Product/DescriptionPanel';
import DetailsProduct from 'components/modules/Product/DetailsProduct';
import ImageProductPanel from 'components/modules/Product/ImageProductPanel';

import StyledComponent from './styles';
import { Props } from './types';

const SectionDetailsPanel: FunctionComponent<Props> = ({ product }) => {
    return (
        <StyledComponent className="section-details-panel">

            <div className="columns">
                {product?.images && product?.images.length &&  (
                    <ImageProductPanel
                        images={product.images}
                    />
                )}
                {product?.id && <DetailsProduct product={product} />}
            </div>

            {product?.id && <DescriptionPanel product={product} />}

        </StyledComponent>
    );
};

export default SectionDetailsPanel;
