import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    
    .row-posts {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1em;
        row-gap: 2em;
    }
`;
