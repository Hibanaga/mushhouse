import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Button from 'components/layout/Button';
import SimpleInput from 'components/layout/forms/SimpleInput';

import StyledComponent from './styles';
import { Props } from './types';


const HomeSectionContact: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="home-section-contact">
            <div className="inner">
                <h3 className="headline">Контакты</h3>
                <span className="subheadline">У вас остались вопросы? Свяжитесь с нами!</span>
                <div className="inner-action">
                    <SimpleInput placeholder="Ваше имя" />
                    <SimpleInput placeholder="Номер телефона" />
                    <Button className="button-send-contact">Оставить заявку</Button>
                </div>
            </div>
        </StyledComponent>
    );
};

export default HomeSectionContact;
