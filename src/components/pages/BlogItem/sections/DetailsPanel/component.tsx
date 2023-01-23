import React, { FunctionComponent, useEffect, useState } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const DetailsPanel: FunctionComponent<Props> = () => {
    const [post, setPost] = useState<{ title?: string; subtitle?: string; description?: string | string[] }[] | null>(null);

    useEffect(() => {
        fetchPost();
    }, []);


    const fetchPost = async () => {
        const response = [
            {
                title: 'What is Lorem Ipsum?',
                subtitle: 'Oszczędność czasu i pieniędzy związana z ograniczeniem dojazdów do pracy',
                description: [
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    'Wykonywanie obowiązków bez konieczności ograniczania się do konkretnego miejsca jest jedną z najczęściej wskazywanych korzyści pracy zdalnej. Niezależnie od tego czy pracujemy z domu, ogrodu czy też w trakcie podróży, możemy wykonywać te same zadania.<br/><br/>W naszym zespole pracują nie tylko osoby z różnych zakątków Polski, ale i z innych krajów. Jeden z kolegów przez długi czas mieszkał w Singapurze, co nie przeszkadzało nam we współpracy podczas realizowania projektów.',
                ],
            },
            {
                subtitle: 'Możliwość pracy z każdego miejsca na ziemi',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
        ];

        setPost(response);
    };

    return (
        <StyledComponent className="page-blog-item-section-details-panel">
            {
                post && post.map(({ title, subtitle, description }) =>(
                    <div
                        key={title}
                        className="inner-section"
                    >
                        {title && (
                            <h2
                                className="title"
                                dangerouslySetInnerHTML={{ __html: title }}
                            />
                        )}

                        {subtitle && (
                            <span
                                className="subtitle"
                                dangerouslySetInnerHTML={{ __html: subtitle }}
                            />
                        )}

                        {typeof description === 'string' ? (
                            <span
                                className="description"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        ) : description && description.map((elementDescription, idx) => (
                            <span
                                key={idx}
                                className="description"
                                dangerouslySetInnerHTML={{ __html: elementDescription }}
                            />
                        ))}
                    </div>
                ) )
            }
        </StyledComponent>
    );
};

export default DetailsPanel;
