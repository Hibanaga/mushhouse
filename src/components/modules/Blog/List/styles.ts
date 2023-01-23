import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    
    .row-posts {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1.5em;
        row-gap: 3em;
    }
    
    .container-pagination {
        margin: 4em 0;
    }
`;
