import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.main`
    margin-top: 1.5em;
    
    
    .inner-filter {
        display: flex;
        align-items: center;
        
        .headline {
            font-size: 2em;
            color: #36363b;
        }
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
