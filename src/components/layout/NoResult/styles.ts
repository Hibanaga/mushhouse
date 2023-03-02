import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    height: 100%;
    width: 100%;

    .headline {
        font-size: 2em;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: 300;
        color: #333;
    }
`;
