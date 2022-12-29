import styled from 'styled-components';


export default styled.div`
    position: relative;
    
    .hero {
        display: flex;
        align-items: center;
        
        .wrapper-icon {}
        .headline {}
    }
    
    .collapse-body {
        .collapse-item {
            &.selected {}
            .collapse-description {}
        }
    }
`;
