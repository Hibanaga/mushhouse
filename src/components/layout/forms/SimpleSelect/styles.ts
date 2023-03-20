import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;
    
    .wrapper-menu {
        width: 100%;
        position: relative;
        display: inline-block;
        text-align: left;

        .wrapper-inner {
            display: flex;
            flex-direction: column;
            width: 100%;

            .label-select {
                width: 100%;
                color: #6B7280;
                display: block;
                margin-top: 1em;
                margin-bottom: .25em;
                font-weight: 500;
                font-size: .875em;
                line-height: 1.25em;
            }

            .action-button {
                display: inline-flex;
                justify-content: space-between;
                box-shadow: 0 1px 4px rgba(86, 100, 108, 0.1);
                border-radius: .5em;
                color: #92959D;
                font-weight: 500;
                font-size: .925em;
                line-height: 1.25em;
                padding: .85em 0 .75em .75em;
                background-color: #FFF;
                
                &.multi-value {
                    border-color: #0073C4;
                }
                
                &.no-multi-value {
                    
                }
                
                .total-count {
                    padding-top: .07em;
                }
                
                .inner-select {
                    display: flex;
                    align-items: center;
                }

                &.error-action-button {
                    border: 2px solid #DC2626;

                    &:focus {
                        border-color: #DC2626;
                    }
                }

                .toggle-icon {
                    width: 1.25em;
                    height: 1.25em;
                    margin: 0 .5em;
                }
            }
            
            .type-primary {
                box-shadow: none;
                border-radius: 0;
                border-bottom: 0.01em solid #F3F3F3;
            }
            
            .type-contained {
                border: .15em solid #F3F3F3;
                background-color: #FFFFFF;
            }
            
            .error {
                width: 9em;
            }
        }
    }

    .wrapper-box-options {
        box-shadow: 0px 1px 4px rgba(86, 100, 108, 0.1);
        background-color: #FFF;
        border: 0.01em solid #F3F3F3;
        border-radius: 6px;
        transform-origin: top left;
        margin-top: .5em;
        width: 14em;
        z-index: 10;
        position: absolute;
        left: 0;
        
        &.wrapper-box-options-multiselect {
            max-height: 19.5em;
            overflow-y: scroll;
        }

        &:focus {
            outline: none;
        }

        .wrapper-options {
            padding: .25em 0;
            
            
            .layout-form-simple-checkbox {
                margin-left: .75em;
                
                &:first-of-type {
                    margin-top: .35em;
                }
            }

            .option {
                color: #6B7280;
                font-size: .925em;
                line-height: 1.25em;
                text-align: left;
                padding: .625em 1em;
                width: 100%;
                display: block;

                &:hover {
                    background-color: rgba(243, 244, 246, 0.30);
                }

                &.select-option {
                    color: #374151;
                    background-color: #F3F4F6;
                }
                
                &.select-checkbox-option {
                    color: #374151;
                    background-color: #F3F4F6;
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
