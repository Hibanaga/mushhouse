import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    height: 8em;
    width: 100%;
    box-shadow: 0 5px 35px 0 rgb(0 0 0 / 10%);
    position: sticky;
    top: 0;
    z-index: 10;
    transition: height 0.3s ease-in-out;
    background-color: #FFF;
    
    &.active {
        height: 4em;

        .layout-container {
            .inner-addtional {
                height: 0;
                transform: translateY(-3em);
            }

            .inner-main {
                height: 100%;
            }
        }
    }
    
    .layout-container {
        position: relative;
        
        .inner-addtional {
            height: 65%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: 150ms height, 250ms transform;

            .headline {
                font-size: 2.5em;
            }

            .inner-contact {
                display: flex;

                .inner-image {
                    position: relative;
                    width: 3em;
                    height: 3em;
                    cursor: pointer;
                    
                    &:hover {
                        opacity: .85;
                    }
                    
                    &:first-of-type {
                        margin-right: 1em;
                    }
                }
            }
        }


        .inner-main {
            display: flex;
            align-items: center;
            height: 35%;
            
            
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
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
