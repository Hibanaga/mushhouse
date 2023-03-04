import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    height: 10em;
    width: 100%;
    background-color: red;
    position: sticky;
    top: 0;
    z-index: 999;
    transition: height 0.3s ease-in-out;
    
    &.active {
        height: 4em;
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
