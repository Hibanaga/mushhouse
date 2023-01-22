import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    
    .icon {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 3em;
        padding: .25em;
        cursor: pointer;
    }
`;
