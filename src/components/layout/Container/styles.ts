import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    background-color: blue;
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
