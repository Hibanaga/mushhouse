import React, { FunctionComponent } from 'react';

import ProductsPanel from 'components/modules/Catalog/ProductsPanel';
import SalesOffPanel from 'components/modules/Catalog/SalesOffPanel';

import StyledComponent from './styles';
import { Props } from './types';

const CatalogSection: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="pages-catalog-sections-catalog-panel">
            <SalesOffPanel />
            <ProductsPanel />
        </StyledComponent>
    );
};

export default CatalogSection;
