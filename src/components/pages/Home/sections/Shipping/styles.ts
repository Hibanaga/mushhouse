import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    background-color: #f7f7f7;
    padding: 4em 0;
    
    .title {
        font-size: 2.75em;
        color: #333;
        text-align: center;
    }
    
    .subheadline {
        display: block;
        font-size: .975em;
        text-align: center;
        font-weight: 300;
        line-height: 175%;
        padding: 1.75em;
    }
    
    .inner-columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2%;
        
        
        
        .inner {
            background-color: #FFF;
            box-shadow: 0px 10px 35px 0px rgba(0,0,0,0.1);
            padding: 1.5em;
            min-height: 9em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            .data-description {
                display: block;
                text-align: center;
                font-size: 1.15em;
                font-weight: 300;
                
            }
            .data-info {
                display: block;
                text-align: center;
                font-size: 1.5em;
                width: 80%;
                margin: 0 auto;
                color: #d32d46;
                font-weight: 600;
            }
            .data-details {
                display: block;
                text-align: center;
                font-size: 1.25em;
                font-weight: 600;
            }
        }
    }

    .headline-step {
        padding: 2.15em 0;
        font-size: 1.5em;
    }
    
    .inner-steps {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4%;
        
        .inner-step {
            .step-index {
                width: 2em;
                height: 2em;
                color: #FFF;
                background-color: #d32d46;
                border-radius: 50%;
                position: relative;
                margin-bottom: .75em;
                
                .step-index-value {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            .step-description {
                display: block;
                
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
