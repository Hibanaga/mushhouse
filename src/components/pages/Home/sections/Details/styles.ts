import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.main`
    margin: 4em 0;
    
    .inner-filter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4em;
        
        .headline {
            font-size: 2em;
            color: #36363b;
        }
    }
    
    
    @media all and (max-width: ${variables.mobileL}) {

        .inner-filter {
            align-items: flex-start;
            flex-direction: column;

            .headline {
                margin-bottom: .5em;
            }
        }
    }
`;
