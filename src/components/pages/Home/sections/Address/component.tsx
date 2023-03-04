import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';


const HomeSectionAddress: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="home-section-address">
            <h3 className="headline">Юридический адрес</h3>
            <span className="contact-address">350087, г. Краснодар, крестьянский переулок 14/1</span>
            <span className="privacy-policy">2023 - Все права защищены</span>
        </StyledComponent>
    );
};

export default HomeSectionAddress;
