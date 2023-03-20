import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    background-color: #FFF;
    box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
    border-radius: .375em;
    overflow: hidden;
    min-height: 32em;
    box-sizing: border-box;
    
    .inner-image {
        position: relative;
        height: 50%;
    }
    
    .inner-main {
        height: 43.5%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .inner-content {
            .data-name {
                font-size: 1.4em;
                font-weight: 400;
            }

            .data-category {
                font-size: .875em;
                font-weight: 700;
                color: #919197;
                display: block;
                padding-bottom: .875em;
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
            flex-direction: column;
            justify-content: flex-start;
            gap: 5%;
            
            .layout-button {
                width: 100%;
                
                &:first-of-type {
                    margin-bottom: .5em;
                }
                
                .button {
                    width: 100%;
                }
            }
        }

    }
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
