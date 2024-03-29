import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


const HomeSectionShipping: FunctionComponent<Props> = ({  }) => {
    const CustomArrowButton = (props: any) => {
        const { style, onClick } = props;

        return (
            <div
                className="button-arrow"
                style={{ ...style }}
                onClick={onClick}
            >
                <Image
                    fill
                    objectFit="contain"
                    src="/images/slider-arrow.svg"
                    alt="arrow button icon"
                    className="image"
                />
            </div>
        );
    };

    return (
        <StyledComponent
            id="id_shipping-payment"
            className="home-section-shipping"
        >
            <h3 className="section-headline">
              Dostawa i Płatność
            </h3>

            <Container className="layout-layout-container">
                <div className="slider-wrapper">
                    <Slider
                        swipe
                        arrows
                        slidesToShow={1}
                        slidesToScroll={1}
                        centerMode={true}
                        autoplay={true}
                        autoplaySpeed={5000}
                        centerPadding="5px"
                        nextArrow={<CustomArrowButton />}
                        prevArrow={<CustomArrowButton />}
                    >
                        <div className="slide-item">
                            <h2 className="headline">Dostawa</h2>
                            <div className="inner-slide-content">
                                <span className="data-content">
                                  Generalnie wysyłamy wszystko z Polski. Wysyłka odbywa się w ciągu 24 godzin od momentu opłaty. Po opłacie, zostanie nadany tracking number dostawcy.
                                </span>
                                <span className="data-content">
                                  Produkt z etykietą <span className="strong">“Шаманка”</span> ma większy czas dostawy z powodu zamówienia z Białorusi. Wtedy czas dostawy wynosi około 1 - 2 tygodni. Wysyłamy poprzez:
                                </span>

                                <ul className="list">
                                    {
                                        ['InPost', 'Poczta Polska', 'DPD']
                                            .map((element) => (
                                                <li
                                                    key={element}
                                                    className="list-item"
                                                >
                                                    {element}
                                                </li>
                                            ))
                                    }
                                </ul>

                                <div className="inner-image">
                                    <Image
                                        fill
                                        objectFit="contain"
                                        src="/images/carousel-1.png"
                                        alt="carousel image mushroom"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="slide-item">
                            <h2 className="headline">Płatność</h2>
                            <div className="inner-slide-content inner-slide-content-shipping">
                                <span className="data-content data-center">
                                  Po złożeniu zamówienia, otrzymasz numer zamówienia, który trzeba wskazać jako komentarz podczas przelewu na konto:
                                </span>

                                <div className="inner-payment">
                                    <span className="data-label">31 1090 2590 0000 0001 5134 2234 EUR</span>
                                    <span className="data-label">04 1090 2590 0000 0001 5134 2235 ZŁ</span>
                                    <span className="data-label spacing">Siarhej Ramanovich</span>
                                </div>

                                <span className="data-content data-center">
                                  Po otrzymaniu płatności, zweryfikujemy zamówienie i zkontaktujemy się w wybrany sposób. <div className="sub-text">(SMS/Telefon/E-mail)</div>
                                </span>
                                <span className="data-content data-center">
                                  Pracujemy nad dodawaniem płatności poprzez kartą bankową na stronie.
                                </span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </StyledComponent>
    );
};

export default HomeSectionShipping;
