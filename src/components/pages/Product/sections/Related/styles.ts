import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    .headline {
        font-size: 1.525em;
        margin: 1.75em 0 ;
    }
    
    .inner {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3.5%;
        
       padding-bottom: 5em;
    }
   
    @media all and (max-width: ${variables.tabletM}) {
        .inner {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            
            .module-list-element {
                width: 48%;
                margin-bottom: 2em;
            }
        }
    }


    @media all and (max-width: ${variables.mobileL}) {
        .inner {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .module-list-element {
                width: 48%;
                margin-bottom: 2em;
            }
        }
    }
`;
