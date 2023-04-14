import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    .section-headline {
        color: #271C15;
        font-weight: 700;
        font-size: 2.125em;
        position: relative;
        line-height: 150%;
        text-align: center;
        padding: 1em 0;
    }
    
    .inner-hero {
        background-color: #D9BBA0;
        padding: .625em 0;
        
        .layout-hero-container {
            display: flex;
            
            .data-head {
                color: #000000;
                font-weight: 400;
                font-size: 1.25em;
                display: block;

                &.data-name {
                    width: 60%;
                }
                &.data-count {
                    width: 20%;
                }
                &.data-price {
                    width: 20%;
                }
            }
        }
    }
    
    .layout-body-container {
        min-height: 12.5em;
        position: relative;
        border-bottom: .01em solid #000000;
        
        .data-empty {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            font-size: 1.5em;
        }
    }
    

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

