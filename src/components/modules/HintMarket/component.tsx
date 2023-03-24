import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import StyledComponent from './styles';
import { Props } from './types';


const HintMarket: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="module-hint-market">
            <div className="inner-image">
                <Image
                    objectFit="contain"
                    fill
                    src="/images/vegan-mark.png"
                    alt="vegan mark"
                />
            </div>
            <div className="inner-content">
                ТД ШАМАНКА - Собственное производство полного цикла с 2009 года. Собираем, сушим и производим сами<br />
                В чистейшем Белорусском Полесье - Заказник Споровский, Брестской области.<br />
                Наши капсулы изготовлены из 100% растительного сыръя , эти вегетарианские капсулы не содержат животных побочных продуктов, BSE, консервантов, крахмала, сахара, кукурузы.<br />
                В капсулах содержится 100% чистого, тонко-молотого порошка из лесных даров.<br />
            </div>
        </StyledComponent>
    );
};

export default HintMarket;
