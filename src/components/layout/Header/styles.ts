import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    background-color: #D9BBA0;
    height: 4em;
    
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
                
                .data-label {
                    font-size: 1.275em;
                }
            }
        }   
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
