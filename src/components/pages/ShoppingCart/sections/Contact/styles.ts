import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    .section-headline {
        color: #271C15;
        font-weight: 400;
        font-size: 1.5em;
        position: relative;
        line-height: 150%;
        text-align: center;
        padding: 1em 0;
    }
    
    .layout-layout-container {
         margin-bottom: 2em;
        
        .section-headline {
            font-size: 1.25em;
            text-align: left;
        }
        
        .inner-actions {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            
            .layout-forms-simple-input {
                box-sizing: border-box;
                width: 50%;
                padding: .5em;
                
                &:nth-child(odd) {
                    padding-left: 0;
                }
                
                &:nth-child(even) {
                    padding-right: 0;
                }
            }
        }
    }


    .inner-actions {
        display: flex;
        justify-content: center;
    }

    .layout-button {
        max-width: 12em;

        &.style-primary.variant-primary {
            .button {
                width: 100%;
                padding: 0.8em 1.5em;
            }
            
            &.disabled {
                opacity: .8;

                .button {
                    cursor: default;

                    .button-content {
                        cursor: default;
                    }
                }

                &:hover {
                    .button {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

