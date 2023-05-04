import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    background-color: #D9BBA0;
    height: 4em;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    
    .layout-layout-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        .innner-image {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            text-decoration: none;
            
            .hedline {
                color: #745211;
                font-size: 2em;
            }
        }

        .list {
            display: flex;

            .list-item {
                margin: 0 .375em;
                padding: 0 .25em;
                cursor: pointer;
                
                .data-label {
                    font-size: .875em;
                }
            }
        }   
    }
    
    @media all and (max-width: ${variables.tabletS}) {
        .layout-container {
            justify-content: flex-end;
        }
    }
    
    @media all and (max-width: ${variables.mobileL}) {
        .layout-layout-container {
            .innner-image {
                .hedline {
                    font-size: 1.675em;
                }
            }

            .list {
                .list-item {
                    padding: 0;
                }
            }
        }
    }
`;
