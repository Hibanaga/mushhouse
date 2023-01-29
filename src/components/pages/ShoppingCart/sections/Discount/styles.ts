import styled from 'styled-components';
import vars from 'styles/vars';


export default styled.div`
    position: relative;
    
    color: #1c1c1c;
    padding: 1.65em 1em;
    font-weight: 700;
    margin-top: 2em;

    .headline {
        font-size: 1.65em;
        margin-bottom: 0.75em;
    }
    
    .button-apply {
        margin-top: 1em;
        
        &.medium-size {
            .button {
                padding: 1.1em 0 .95em 0;
                background-color: #6f6f6f;
                color: #FFF;
                .description {
                    display: block;
                    font-size: .9em;
                    letter-spacing: .3em;
                }
            }
        }
    }
    
    @media all and (max-width: ${vars.tabletM}) {
        margin-top: 0;
        padding-top: 0;

        .headline {
            text-align: left;
        }
        
        .inner-actions {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            
            .layout-input {
                width: 100%;
            }

            .button-apply {
                margin-top: 0;

                &.medium-size {
                    .button {
                         min-height: 3.25em;
                        padding: 1.1em 0 .95em 0;
                        .description {
                            display: block;
                            font-size: .8em;
                            padding: 0 1em;
                            letter-spacing: .1em;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
    
    @media all and (max-width: ${vars.tabletS}) {
        padding-top: 1.65em;
    }
`;
