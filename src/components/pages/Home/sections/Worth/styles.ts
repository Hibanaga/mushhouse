import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    position: relative;
    overflow: hidden;
   
    .section-headline {
        background-color: #D9BBA0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: .5em 0;
        text-align: center;
        font-weight: 400;
        font-size: 1.625em;
    }
    
    .layout-layout-container {
        padding: 4em 0;
        
        .data-content {
            font-size: 1em;
            display: block;
            padding-bottom: 1em;
            font-weight: 300;
            color: #271C15;
            text-align: justify;
            line-height: 150%;
        }
        
        .list {
            margin-bottom: 6em;
            
            .list-item {
                font-weight: 300;
                color: #271C15;
                font-size: 1em;
                position: relative;
                padding-left: 1em;
                line-height: 150%;
                
                &:before {
                    content:"";
                    width: .5em;
                    height: .5em;
                    background-color: #D9501E;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 50%;
                }
            }
        }
    }

    .inner-image {
        position: absolute;
        right: -5em;
        bottom: -4em;
        height: 25em;
        width: 30em;
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
