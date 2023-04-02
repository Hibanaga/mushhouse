import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    width: 100%;
    box-shadow: 0 5px 35px 0 rgb(0 0 0 / 10%);
    z-index: 10;
    transition: height 0.3s ease-in-out;
    background-color: #FFF;
    padding: 1em 0 0 0;

    
    .layout-container {
        position: relative;
        
        .inner-addtional {
            height: 65%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: 150ms height, 250ms transform;
            padding-bottom: .5em;
            border-bottom: .01em solid #eaeaea;

            .headline {
                position: relative;
                font-size: 2.5em;
                color: #36353a;
                
                .subheadline {
                    display: block;
                    font-size: .35em;
                }
            }
            
            

            .inner-contact {
                .headline-social {
                    color: #000000;
                    font-size: .925em;
                    margin-bottom: .375em;
                    font-weight: 400;
                }
                
                
                .inner-social {
                    display: flex;
                    justify-content: space-between;
                }

                .inner-image {
                    position: relative;
                    width: 2.5em;
                    height: 2.5em;
                    cursor: pointer;
                    margin-right: 1em;
                    
                    &:last-of-type {
                        margin-right: 0;
                    }
                    
                    &:hover {
                        opacity: .85;
                    }
                }
            }
        }


        .inner-navigation {
            height: 3em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .inner-main {
                display: flex;
                align-items: center;
                height: 100%;

                .list-item {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    margin-right: 1em;

                    &:hover {
                        opacity: .85;
                    }
                }
            }  
            
            .inner-navigation-button {
                .button-telegram {
                    .button {
                        background-color: #2ca2de;
                        color: #ffffff;
                    }
                }
            }
        }
        
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        .inner-contact {
            display: none;
        }
    }
`;
