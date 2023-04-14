import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


const HomeSectionAbout: FunctionComponent<Props> = ({  }) => {
    const contents = [
        'Zbieramy, suszymy i używamy sami od 2012 roku. Wszystkie nasze produkty powstają przy użyciu wyłącznie czystych biologicznie pochodnych (wegańskie kapsułki, wysokiej jakości alkohol do sporządzania nalewek). Przestrzegane są wszystkie standardy produkcji, zachowując z jednej strony tradycje naszych przodków, a z drugiej strony idąc z duchem czasu, uwzględniając najnowsze badania w dziedzinie mykologii.',
        'Główne surowce do naszych produktów pochodzą z lasów Białorusi i Polski, a także z odległych rejonów Syberii, gdzie przyroda zachowała swoją nieskazitelną czystość i nie uległa wpływom człowieka.',
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
                    <span
                        key={idx}
                        className="data-content"
                    >
                        {content}
                    </span>
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
