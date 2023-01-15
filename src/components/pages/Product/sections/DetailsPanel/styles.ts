import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    margin: 4em 0;
    
    .columns {
        display: grid;
        grid-template-columns: calc(5.65 / 12 * 100%) calc(5.65 / 12 * 100%);
        column-gap: calc(.35 / 12 * 100%);
    }
`;
