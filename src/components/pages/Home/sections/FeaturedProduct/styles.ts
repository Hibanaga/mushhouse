import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    margin-top: 2em;
    
    .row-elements {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 1.5em;
        row-gap: 3em;
    }

    @media all and (max-width: ${variables.tabletS}) {
        .row-elements {
            grid-template-columns: auto auto auto;
            grid-gap: 1.25em;
            row-gap: 2em;
        }
    }

    @media all and (max-width: ${variables.mobileM}) {
        .row-elements {
            grid-template-columns: auto auto;
            grid-gap: 1.25em;
            row-gap: 2em;
        }
    }
`;
