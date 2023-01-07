import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
    margin: 1.5em 0;

    @media all and (max-width: ${variables.mobileL}) {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
`;
