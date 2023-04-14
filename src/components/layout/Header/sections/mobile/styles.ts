import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    .inner-header {
        
    }
    
    .inner-navigation {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        
        .inner-image {
            position: relative;
            width: 3em;
            height: 3em;
            cursor: pointer;
            margin-right: 1em;

            &:last-of-type {
                margin-right: 0;
            }

            &:hover {
                opacity: .85;
            }
        }   
    }
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
