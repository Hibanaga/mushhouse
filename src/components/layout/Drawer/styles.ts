import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    color: #fff;
    background-color: #fff;
    padding: .75em 1.5em;
    border-top-left-radius: 16px;
    flex-direction: column;
    display: flex;
    z-index: 50;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 20em;
    height: 90vh;
    transition: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &.animatedIn {
        transform: translateX(0px);
    }

    &.animatedOut {
        transform: translateX(100%);
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
