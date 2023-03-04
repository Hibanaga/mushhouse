import styled from '@emotion/styled';

import vars from 'theme/styles/vars';

export default styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    .author-bar {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: .6em;
        padding: .3em;
        z-index: 3;
        text-align: center;
    }
`;