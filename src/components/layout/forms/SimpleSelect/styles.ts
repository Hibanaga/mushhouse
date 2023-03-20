import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`

    .multi-select-category__control {
        width: 20em;
        border: .15em solid #F3F3F3;
        background-color: #FFFFFF;
        border-radius: .375em;
        padding: .25em .5em;
        box-shadow: 0 1px 4px rgba(86, 100, 108, 0.1);

        &.multi-select-category__control--is-focused {
            border-color: #818181;
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;
