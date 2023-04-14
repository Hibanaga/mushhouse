import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;


    .lazy-load {
        opacity: 0;
        transform: translateY(25%);
        visibility: hidden;
    }

    .animate-lazy-load {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
