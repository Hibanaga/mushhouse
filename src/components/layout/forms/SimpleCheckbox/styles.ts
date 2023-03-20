import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.fieldset`
    display: flex;
    position: relative;
    flex-direction: column;

    &:not(:first-of-type) {
        margin-top: 1.25em;
    }

    .wrapper-checkbox {
        height: 1.25em;
        display: flex;
        align-items: center;

        .checkbox {
            color: #4FC0B3;
            box-shadow: 0 1px 4px rgba(86, 100, 108, 0.1);
            border: 1px solid #CFDEDD;
            border-radius: 6px;
            width: 1.25em;
            height: 1.25em;
            cursor: pointer;

            &:focus {
                outline: none;
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {

    }
`;
