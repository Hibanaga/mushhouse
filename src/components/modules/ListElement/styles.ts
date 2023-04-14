import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    overflow: hidden;
    min-height: 41.25em;
    box-sizing: border-box;
    
    .inner-image {
        position: relative;
        height: 52%;
    }
    
    .inner-main {
        height: 45%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .inner-content {
            .data-name {
                font-size: 1.4em;
                font-weight: 400;
                height: 4.5em;
                margin-bottom: .275em;
            }
            
            .data-description {
                display: block;
                min-height: 2.675em;
                margin-bottom: .275em;
            }

            .data-category {
                font-size: .875em;
                font-weight: 300;
                color: #919197;
                display: block;
                min-height: 2.675em;
                padding: .875em 0 .75em 0;
            }

            .data-price {
                display: block;
                font-size: 1.15em;
                color: #000000;
                margin-bottom: .5em;
            }
        }

        .inner-action {
            display: flex;
            align-items: center;
            gap: 5%;
            
            .layout-button {
                width: 100%;
                
                .button {
                    border-radius: 10em;
                    width: 100%;
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
