import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    position: relative;
    height: 25em;
    width: 100%;
    overflow: hidden;
    
    &::after {
        content: '';
        background-image: url("/images/mushroom-contact.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
    }
    
    .layout-layout-container {
        position: relative;
    }
    
    .inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        height: 55%;
        display: flex;
        flex-direction: column;
        background-color: #FFF;
        padding: 2em 1.5em;

        .headline {
            font-size: 2em;
            color: #000000;
        }
        
        .subheadline {
            font-size: 1.65em;
            color: #a0a0aa;
            font-weight: 300;
            margin-top: .825em;
        }
        
        .inner-action {
            display: flex;
            flex-direction: row;
            margin-top: 2.5em;
            
            
            .layout-forms-simple-input {
                width: 35%;
                margin-right: 3em;
                
                div {
                    width: 100%;
                }
            }
            
            .button-send-contact {
                .button {
                    height: 100%;
                }
            }
        }
    }
    
    
    @media all and (max-width: ${variables.tabletL}) {
        .inner {
            width: 90%;
        }   
    }
    
    @media all and (max-width: ${variables.tabletM}) {
        height: 30em;
        
        .inner {
            height: 65%;
            
            .inner-action {
                flex-direction: column;

                .layout-forms-simple-input {
                    width: 100%;
                    margin-bottom: 1em;

                    div {
                        width: 100%;
                    }
                }

                .button-send-contact {
                    width: 100%;
                    
                    .button {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
`;
