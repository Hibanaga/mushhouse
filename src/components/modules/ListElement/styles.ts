import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    background-color: #FFF;
    box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
    border-radius: .375em;
    overflow: hidden;
    
    
    .inner-image {
        position: relative;
        height: 15em;
    }
    
    .inner-content {
        padding: 1em;
        
        .data-name {}
        
        .data-category {
            display: block;
        }
        
        .data-price {
            display: block;
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
