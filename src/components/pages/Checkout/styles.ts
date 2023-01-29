import styled from 'styled-components';


export default styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    
    .headline {
        position: relative;
        margin: 3em 0 .15em 0;
        font-size: 2em;
        color: #1c1c1c;
        font-weight: 700;
        
        .bottom-underline {
            height: 0.01em;
            width: 100%;
            bottom: -10%;
            background-color: #e1e1e1;
            position: absolute;
        }
    }
    
    .row-checkout {
        display: grid;
        grid-template-columns: calc(7.9 / 12 * 100%) calc(3.85 / 12 * 100%);
        grid-column-gap: calc(.25 / 12 * 100%);
        margin-bottom: 6em;
    }
`;
