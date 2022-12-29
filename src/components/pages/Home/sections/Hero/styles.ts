import styled from 'styled-components';


export default styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1em;
    
    .wrapper {
        &.wrapper-departments {
            width: 25%;
        }
        
        &.wrapper-hero {
            width: 75%;
        }
        
    }
`;
