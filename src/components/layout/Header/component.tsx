import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';

import { debounce } from 'utils/debounce';

import Container from '../Container';

import StyledComponent from './styles';
import { Props } from './types';


const LayoutHeader: FunctionComponent<Props> = ({  }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.pageYOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <StyledComponent className={classNames(['layout-header', { active: active }])}>
            <Container>
            </Container>
        </StyledComponent>
    );
};

export default LayoutHeader;
