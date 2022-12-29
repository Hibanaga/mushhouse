import styled from 'styled-components';

export default styled.div`

    .transition-leave {
        transition: 100ms ease-in;
    }
    
    .transition-leave-from {
        opacity: 1;
    }
    
    .transition-leave-to {
        opacity: 0;
    }
`;
