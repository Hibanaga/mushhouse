import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    margin-top: 2em;
    
    display: grid;
    grid-template-columns: calc(4.5 / 12 * 100%) calc(6.5 / 12 * 100%);
    column-gap: calc(1 / 12 * 100%);
    
    .column-images {
        .image {
            height: 24em;
            width: 100%;
        }
    }
    
    .column-details {
        .data-headline {}
        .data-price {}
        
        .list {
            .list-item {
                display: grid;
                grid-template-columns: calc(4.5 / 12 * 100%) calc(7.5 / 12 * 100%);
                padding: .5em 0;
                
                .data-name {
                    font-weight: 700;
                    color: #1c1c1c;
                }
                .data-value {
                    color: #1c1c1c;
                    font-weight: 300;
                }
            }
        }
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
