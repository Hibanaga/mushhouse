import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleShoppingCartListElement: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="module-shopping-cart-list-element">
            <div className="tr wrapper-content">
                <div className="wrapper-image">
                    {/*<img*/}
                    {/*    src={}*/}
                    {/*    alt="alt image product"*/}
                    {/*/>*/}
                </div>
                <span className="name"></span>
            </div>

            <div className="tr">
                <span className="price"></span>
            </div>

            <div className="tr">
                {/*quatity*/}
            </div>

            <div className="tr">
                <span className="total"></span>
            </div>

        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;
