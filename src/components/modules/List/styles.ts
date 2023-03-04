import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em 2%;
   
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
