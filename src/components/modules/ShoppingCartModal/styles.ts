import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;

    .layout-modal {
        .modal-container {
            max-width: 40em;
        }
    }

    .inner-body {
        padding: 1em;
        
        .subheadline {
            font-size: 1.375em;
            padding-bottom: 1.1em;
            border-bottom: 1px solid rgba(0,0,0,.2);
            margin-bottom: 1.375em;
            font-weight: 600;
            color: #000000;
        }
    }
    
    .inner-shopping-cart {
        margin-bottom: 2em;
    }
    
    .inner-total-price {
      padding: 2em 0;
      border-top: .01em solid rgba(0,0,0,.2);
        
        display: flex;
        justify-content: flex-end;
        font-weight: 600;
        
        .data-value {
            padding-left: .5em;
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
