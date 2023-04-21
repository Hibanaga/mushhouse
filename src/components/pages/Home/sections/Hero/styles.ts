import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    position: relative;
    height: 35em;
    background-color: #000;
    
    .bg-image {
        opacity: .7;
    }
    
    .layout-layout-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .headline {
            position: relative;
            font-size: 3.5em;
            font-weight: 300;
            text-align: center;
            color: #FFF;
        }
    }
    
    
    @media all and (max-width: ${variables.tabletL}) {
        .layout-layout-container {
            .headline {
                font-size: 3em;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletM}) {
        .layout-layout-container {
            .headline {
                font-size: 2.675em;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
        .layout-layout-container {
            .headline {
                font-size: 2.325em;
            }
        }
    }
    
    @media all and (max-width: ${variables.mobileL}) {
        .layout-layout-container {
            .headline {
                font-size: 2.125em;
            }
        }
    }
`;
