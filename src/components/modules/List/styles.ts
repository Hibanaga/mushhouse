import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4em 4%;
    padding-top: 4em;
    
    .module-list-element {
        &:last-of-type {
            margin-bottom: 5em;
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        gap: 2em 3%;
    }

    @media all and (max-width: ${variables.tabletS}) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media all and (max-width: ${variables.mobileM}) {
        grid-template-columns: 1fr;
    }
`;
