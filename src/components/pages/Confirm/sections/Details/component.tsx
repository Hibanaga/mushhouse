import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


const SectionDetails: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-confirm-section-details">

            <Container className="layout-layout-container">
                <div className="inner-content">
                    <span className="data-content">Dziękujemy za złozenie zamówienia</span>

                    <div className="inner-order">
                        <span className="data-content data-bold">Nr. zamówienia</span>
                        <span className="data-content data-bold">2023-03-05/asXd</span>
                    </div>
                </div>

                <div className="table">
                    <div className="tr">
                        <div className="th th-number" />
                        <div className="th th-name">Nazwa produktu</div>
                        <div className="th th-quantity">Ilosc</div>
                        <div className="th th-price">Cena</div>
                        <div className="th th-total">Cena ogólna</div>
                    </div>

                    <div className="tb">
                        <div className="tr">
                            <div className="td td-number">
                                1
                            </div>
                            <div className="td td-name">
                                Entire hear hospital than fill.
                            </div>
                            <div className="td td-quantity">
                                1
                            </div>
                            <div className="td td-price">
                                10
                            </div>
                            <div className="td td-total">
                                120 PLN
                            </div>
                        </div>


                        <div className="tr">
                            <div className="td td-number">
                                1
                            </div>
                            <div className="td td-name">
                                Entire hear hospital than fill.
                            </div>
                            <div className="td td-quantity">
                                1
                            </div>
                            <div className="td td-price">
                                10
                            </div>
                            <div className="td td-total">
                                120 PLN
                            </div>
                        </div>
                    </div>
                </div>

                <div className="inner-details">
                    <div className="column column-labels">
                        <h3 className="section-headline">Dane kupującego</h3>
                        <ul className="list">
                            <li className="list-item">Imie Nazwisko</li>
                            <li className="list-item">E-mail</li>
                            <li className="list-item">Telefon</li>
                        </ul>
                    </div>

                    <div className="column column-values">
                        <h3 className="section-headline">Dane dostawy</h3>
                        <ul className="list">
                            <li className="list-item">Kraj</li>
                            <li className="list-item">Miasto, kod pocztowy</li>
                            <li className="list-item">Adres</li>
                        </ul>
                    </div>
                </div>


                <div className="inner-content">
                    <span className="data-content">Szczegóły zamówienia będą dostępne pod adresem email wskazanym przy złożeniu zamówienia. Dla opłaty zamówienia prosimy o dokonaniu płatności na rachunek bankowy z numerem zamówienia w treści komentarza. Po zweryfikowaniu płatności, paczka będzie wysłana w najbliższym czasie.</span>
                    <div className="card-data">
                        <span className="data-content data-bold">31 1090 2590 0000 0001 5134 2234 EUR</span>
                        <span className="data-content data-bold">04 1090 2590 0000 0001 5134 2235 ZŁ</span>
                        <span className="data-content data-bold">Siarhej Ramanovich</span>
                    </div>
                </div>

                <div className="inner-szamanita">
                    <span className="data-content data-contact">W razie jakichkolwiek pytań, prosimy o kontakt pod numerami telefonów, albo adresem e-mail wskazanym w sekcji kontakt(link on the word press).</span>
                    <span className="data-content data-contact">Dziękujemy za wybranie naszego sklepu.</span>
                    <span className="data-content data-contact">Z poważaniem, zespół Szamanita.</span>
                </div>

            </Container>
        </StyledComponent>
    );
};

export default SectionDetails;
