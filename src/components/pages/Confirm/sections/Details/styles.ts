import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    position: relative;
    
    
    .data-content {
        display: block;
        font-size: 1.1em;
        text-align: center;
        max-width: 80%;
        margin: 0 auto;
        color: #271C15;
        
        &.data-contact {
            margin-bottom: 1em;
        }

        &.data-bold {
            font-weight: 600;
        }
    }
    
    .inner-content {
        margin: 2em 0;
        
        &:first-of-type {
            margin-top: 4em;
        }
        
        .inner-order {
            margin-top: 2em;
        }
        
        .card-data {
            margin-top: 2em;
        }
    }

    .inner-szamanita {
        margin-bottom: 5em;
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

