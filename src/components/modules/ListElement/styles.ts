import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    overflow: hidden;
    box-sizing: border-box;
    
    .inner-image {
        position: relative;
        min-height: 19em;
    }
    
    .inner-main {
        min-height: 18.25em;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .inner-content {
            .data-name {
                font-size: 1.125em;
                font-weight: 400;
                height: 4em;
                margin-bottom: .275em;
            }
            
            .data-description {
                display: block;
                min-height: 2.675em;
                margin-bottom: .275em;
                font-size: .925em;
            }

            .data-category {
                font-size: .825em;
                font-weight: 300;
                color: #919197;
                display: block;
                min-height: 2.675em;
                padding: .875em 0 .75em 0;
            }

            .data-price {
                display: block;
                font-size: 1em;
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
                    border-radius: .825em;
                    width: 100%;
                }
                
                &.button-details {
                    &:hover {
                        opacity: .9;
                    }
                    
                    .button {
                        background-color: #FFF;
                        border: .01em solid #000000;
                        padding: 0;

                        .link-item {
                            display: block;
                            color: #000000;
                            padding: 0.7em 1.5em;
                        }
                        
                        .button-content {
                            color: #000000;
                        }
                    }
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        .inner-main {
            .inner-action {
                flex-direction: column;
                margin-top: 1em;
                
                .layout-button {
                    &:first-of-type {
                        margin-bottom: 1em;
                    }
                }
            }
        }
    }
`;
