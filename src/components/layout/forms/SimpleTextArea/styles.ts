import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    
    .textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        border-radius: 6px;
        outline: none;
        resize: none;
        font-family: 'Comfortaa', cursive;
    }

    &.primary-textarea {
        .textarea {
            color: #333;
            padding: .75em 1em .85em;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            font-size: 0.875em;
            line-height: 1.35em;
            border: 1px solid #F3F4F6;
            transition: 150ms;
            
            &::placeholder {
                color: #333;
            }


            &.error-textarea {
                border: 2px solid #DC2626;

                &:focus {
                    background-color: #DC2626;
                }
            }
        }
    }

    &.secondary-textarea {
        .textarea {
            border: 1px solid #F3F3F3;
            color: #374151;
            padding: .75em;
            font-size: 1em;
            resize: none;

            &::placeholder {
                color: #6b7280;
            }

            &:focus {
                background-color: #FFF;
                border-color: #2563eb;
            }

            &:disabled {
                background-color: #D1D5DB;
                pointer-events: none;
            }
        }

        .layout-simple-error {
            background-color: transparent;
            justify-content: flex-start;
            height: auto;
            color: #DC2626;
            font-weight: 600;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
