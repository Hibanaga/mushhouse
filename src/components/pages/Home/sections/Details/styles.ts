import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.main`
    margin: 4em 0;
    
    
    .inner-filter {
        display: flex;
        align-items: center;
        margin-bottom: 4em;
        
        .headline {
            font-size: 2em;
            color: #36363b;
        }
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
