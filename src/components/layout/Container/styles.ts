import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    
    @media all and (max-width: ${variables.desktopXS}) {
        width: 96%;
        margin: 0 auto;
    }
`;
