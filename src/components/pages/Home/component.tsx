import React, { FunctionComponent, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import Header from 'components/layout/Header';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledComponent className="page-home">
            <Header />

            <PageContainer>
                <Button onClick={() => setIsOpen(!isOpen)}>toggle</Button>
                <Collapse in={isOpen}>
                    <div>
                        <h1>dasdasdas</h1>
                        <h1>dasdasdas</h1>
                        <h1>dasdasdas</h1>
                    </div>
                </Collapse>
            </PageContainer>
        </StyledComponent>
    );
};

export default HomePage;
