import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


const HomeSectionAbout: FunctionComponent<Props> = ({  }) => {
    const contents = [
        'Zbieramy i suszymy od 2012 roku. Wszystkie nasze produkty powstają przy użyciu wyłącznie czystych biologicznie pochodnych (wegańskie kapsułki, wysokiej jakości alkohol do sporządzania nalewek). Przestrzegane są wszystkie standardy produkcji, zachowując z jednej strony tradycje naszych przodków, a z drugiej strony idąc z duchem czasu, uwzględniając najnowsze badania w dziedzinie mykologii.',
        'Główne surowce do naszych produktów pochodzą z lasów Białorusi i Polski, a także z odległych rejonów Syberii, gdzie przyroda zachowała swoją nieskazitelną czystość i nie uległa wpływom człowieka.',
        '<ul class="list"> <li class="list-item">Wysuszone w temperaturze 40 C.</li> <li class="list-item">Opakowania zbiorcze zapakowane próżniowo oraz przechowywane w suchym ciemnym miejscu.</li> <li class="list-item">Towar do wysyłki przygotowywany na bieżąco, pakowany prózniowo</li> <li class="list-item">Produkt najwyższej jakości, dostępny w formie kapeluszy lub proszku.</li> </ul>',
        'Produkt nie nadaje się do spożycia przez ludzi. Wykorzystywany wyłącznie do celów badawczo - naukowych.',
    ];

    return (
        <StyledComponent
            id="id_about"
            className="home-section-about"
        >
            <h3 className="section-headline">
              O nas
            </h3>

            <Container className="layout-layout-container">
                {contents.map((content, idx) =>  (
                    <div
                        key={idx}
                        className="data-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                ))}


                <ul className="list-images">
                    {
                        ['/images/about-1.jpg', '/images/about-2.jpg', '/images/about-3.jpg']
                            .map((imageUrl) => (
                                <div
                                    key={imageUrl}
                                    className="list-element"
                                >
                                    <Image
                                        fill
                                        objectFit="cover"
                                        src={imageUrl}
                                        alt={imageUrl}
                                    />
                                </div>
                            ))
                    }
                </ul>

            </Container>
        </StyledComponent>
    );
};

export default HomeSectionAbout;
