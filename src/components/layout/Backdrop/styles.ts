import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    &.filters-mask {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: rgba(0, 0, 0, .3);

        animation: fadeIn;
        animation-duration: 1s;

        &.visible {
            display: block;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
