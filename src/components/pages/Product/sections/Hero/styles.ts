import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    margin-top: 2em;
    
    display: grid;
    grid-template-columns: calc(5.5 / 12 * 100%) calc(6 / 12 * 100%);
    column-gap: calc(.5 / 12 * 100%);
    
    .column-images {
        .image {
            height: 24em;
            width: 100%;
        }
    }
    
    .column-details {
        .data-headline {
            display: block;
            font-size: 2em;
            margin-bottom: 1.25em;
            font-weight: 500;
        }
        .data-price {
            display: block;
            font-size: 1.25em;
            padding-bottom: 1em;
            margin-bottom: 1em;
        }
        
        .button-add-to-cart {
            display: inline-block;
            margin-bottom: 2em;
        }

        .data-description {
            display: block;
        }
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
