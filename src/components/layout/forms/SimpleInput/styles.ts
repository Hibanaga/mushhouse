import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    .input {
        display: block;
        width: 100%;
        border-radius: 6px;
        outline: none;
        box-sizing: border-box;
    }

    &.primary-input {
        .input {
            //padding: .75em 1em .85em;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            font-size: 0.875em;
            line-height: 1.35em;
            border-radius: 15em;
            //color: #6B7280;
            //border: 1px solid #F3F4F6;

            color: #000000;
            border: 1px solid #000000;
            padding: 1em 2em;

            &::placeholder {
                //color: #AAAAAA;
                color: #000000;
            }

            &.error-input {
                border: 2px solid #DC2626;
            }
        }
    }

    &.secondary-input {
        .input {
            border: .13em solid #F3F3F3;
            color: #374151;
            padding: .75em 1em .85em;
            font-size: 0.875em;
            line-height: 1.35em;
            box-shadow: 0 1px 4px rgba(86, 100, 108, 0.1);

            &::placeholder {
                color: #6b7280;
            }

            &:focus {
                background-color: #FFF;
                border-color: #2563eb;
            }

            &:disabled {
                background-color: rgba(224, 224, 224, 0.2);
                border: none;
                box-shadow: none;
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
