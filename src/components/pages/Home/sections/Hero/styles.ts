import styled from 'styled-components';


export default styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1em;
    margin-top: 2em;
    
    .wrapper {
        &.wrapper-departments {
            width: 25%;
        }
        
        &.wrapper-hero {
            width: 75%;
        }
        
    }
`;
