import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    background-color: #FFF;
    box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
    border-radius: .375em;
    overflow: hidden;
    min-height: 40em;
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
                height: 5em;
            }

            .data-category {
                font-size: .875em;
                font-weight: 300;
                color: #919197;
                display: block;
                padding: .875em 0 1.5em 0;
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
    @media all and (max-width: ${variables.desktopXS}) {
        min-height: 34em;
        
        .inner-image {
            position: relative;
            height: 45%;
        }

        .inner-main {
            height: 47.5%;
        }
    }
    
    @media all and (max-width: ${variables.mobileL}) {
        min-height: 32em;

        .inner-image {
            height: 45%;
        }

        .inner-main {
            height: 48.75%;
        }
    }
    
    @media all and (max-width: ${variables.mobileM}) {
        min-height: 45em;

        .inner-image {
            height: 55%;
        }

        .inner-main {
            padding-bottom: 0;
            height: 40%;

            .inner-content {
                .data-name {
                    height: 3em;
                }
            }
            
            .inner-action {
                flex-direction: column;

                .layout-button {
                    &:first-of-type {
                        margin-bottom: .5em;
                    }
                }
            }
        }
    }
`;
