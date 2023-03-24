import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';

import StyledComponent from './styles';
import { Props } from './types';

const HomeSectionShipping: FunctionComponent<Props> = ({  }) => {
    const elements = [
        {
            description: 'Стоимость отправки по России',
            info: '350 р / от 3000 р. даром',
            details: '2 - 7 дней',
        },
        {
            description: 'Доставка по Беларуси 2-4 дня',
            info: 'в дар',
            details: '1 - 2 дня',
        },
        {
            description: 'Стоимость отправки по миру',
            info: 'от 500 р ',
            details: '5 - 14 дней',
        },
    ];

    const steps = [
        'Вы заказываете и оплачиваете товар на сайте',
        'В течении 12 часов Мы скидываем вам трек-номер и отправляем ваш заказ',
    ];

    return (
        <StyledComponent className="home-section-shipping">
            <Container>
                <h2 className="title">Доставка</h2>
                <span className="subheadline">
                Отправка посылки - в течении 24 часов<br />
                Быстрая доставка почтой 1 классом
                </span>

                <div className="inner-columns">
                    {elements.map(({ description, info, details }) => (
                        <div
                            key={description}
                            className="inner"
                        >
                            <span className="data-description">{description}</span>
                            <span className="data-info">{info}</span>
                            <span className="data-details">{details}</span>
                        </div>
                    ))}
                </div>

                <h2 className="headline-step">
                    Как происходит процесс доставки?
                </h2>
                <div className="inner-steps">
                    {steps.map((element, idx) => (
                        <div
                            key={element}
                            className="inner-step"
                        >
                            <div className="step-index">
                                <span className="step-index-value">{`0${++idx}`}</span>
                            </div>
                            <span className="step-description">{element}</span>
                        </div>
                    ))}

                </div>
            </Container>
        </StyledComponent>
    );
};

export default HomeSectionShipping;
