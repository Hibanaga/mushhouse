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
        padding: 4em 0 2em 0;
        
        .data-content {
            font-size: 1.05em;
            display: block;
            padding-bottom: 1em;
            font-weight: 300;
            color: #271C15;
            text-align: justify;
            line-height: 200%;
        }
        
        .list {
            margin-bottom: 6em;
            
            .list-item {
                font-weight: 300;
                color: #271C15;
                font-size: 1.05em;
                position: relative;
                padding-left: 1em;
                line-height: 200%;
                
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
        right: -2em;
        bottom: -3em;
        height: 20em;
        width: 25em;
    }
    
    @media all and (max-width: ${variables.mobileL}) {
        .inner-image {
            position: absolute;
            right: -2em;
            bottom: -3em;
            width: 17.5em;
        }
    }
    
    @media all and (max-width: ${variables.mobileM}) {
        .inner-image {
            right: -4em;
            bottom: -6em;
            width: 17.5em;
        }
    }

    @media all and (max-width: ${variables.mobileS}) {
        .inner-image {
            right: -3em;
            bottom: -6em;
            width: 12.5em;
        }
    }
`;
