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
        
        .headline {
            display: block;
            font-size: 1.05em;
            padding-bottom: 1em;
            font-weight: 300;
            color: #271C15;
            text-align: center;
            line-height: 150%;
        }
        
        .list-social {
            display: flex;
            align-items: center;
            justify-content: center;
            
            .list-item {
                position: relative;
                margin: 0 .325em;
                font-size: .975em;
                
                &.inner-image {
                    width: 2.375em;
                    height: 2.375em;
                }
            }
        }
        
        .inner-phone {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1em 0;
            
            .inner-image {
                position: relative;
                width: 2em;
                height: 2em;
            }
            
            .data-phone {
                display: block;
                font-size: 1.05em;
                font-weight: 300;
                color: #271C15;
                text-align: center;
                line-height: 150%;
                
                padding-left: .5em;
            }
        }
        
        .data-email {
            display: block;
            font-size: 1.05em;
            font-weight: 300;
            color: #271C15;
            text-align: center;
            line-height: 150%;
        }
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
