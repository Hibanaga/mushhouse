import styled from 'styled-components';
import variables from 'styles/vars';


export default styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    
    .container-catalog {
        display: grid;
        grid-template-columns: calc(2.85 / 12 * 100%) calc(9 / 12 * 100%);
        grid-column-gap: calc(.15 / 12 * 100%);
        
        margin: 6em 0;
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        .container-catalog {
            grid-template-columns: calc(3.85 / 12 * 100%) calc(8 / 12 * 100%);
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
        .container-catalog {
            display: flex;
            flex-direction: column;
        }
    }
`;
