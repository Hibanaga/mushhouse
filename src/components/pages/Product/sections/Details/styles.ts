import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    
    .headline {
        font-size: 1.75em;
        margin: 1.75em 0 ;
    }

    .list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2%;
        margin-bottom: 2em;

        .list-item {
            display: grid;
            grid-template-columns: calc(6 / 12 * 100%) calc(6 / 12 * 100%);
            padding: .5em 0;

            .data-name {
                font-weight: 700;
                color: #1c1c1c;
            }
            .data-value {
                color: #1c1c1c;
                font-weight: 300;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
