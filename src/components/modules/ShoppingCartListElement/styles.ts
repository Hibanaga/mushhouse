import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    display: flex;
    gap: 2%;
    margin-bottom: 1em;
    min-height: 4em;
    height: 100%;
    margin-top: 1em;
    
    .inner-main {
        height: 100%;
        display: flex;
        width: 60%;
        gap: 2em;
        
        .inner-image {
            width: 20%;
            height: 100%;
            position: relative;
            min-height: 6em;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                background-size: cover;
            }
        }

        
        .inner-content {
            width: 80%;

            .data-name {
                display: block;
                font-size: .855em;
                margin-bottom: .225em;
                cursor: pointer;
                transition: 150ms;
                
                &:hover {
                    color: #D9BBA0;
                }
            }
            
            .data-description {
                display: block;
                font-size: .7em;
                margin: .5em 0;
            }
            
            .data-category {
                display: block;
                font-size: .575em;
                font-weight: 300;
                color: #919197;
            }
        }
    }
    
    .inner-total {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
    }
    
    .inner-counter {
        min-height: 4em;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .layout-counter {
            .input {
                max-width: 4.5em;
            }
        }
    }
   
    @media all and (max-width: ${variables.mobileL}) {
        .inner-main {
            .inner-content {
                width: 100%;
            }
            .inner-image {
                display: none;
            }
        }
    }
`;
