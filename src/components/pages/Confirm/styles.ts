import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    position: relative;
 
    
    .home-section-address {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

