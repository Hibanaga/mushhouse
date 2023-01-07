import styled from 'styled-components';


export default styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    
    .row-total {
        display: grid;
        grid-template-columns: calc(5.5 / 12 * 100%) calc(5.5 / 12 * 100%);
        column-gap: calc(1 / 12 * 100%);
        margin: 4em 0;
    }
`;
