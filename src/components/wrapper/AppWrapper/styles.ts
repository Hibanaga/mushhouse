import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    position: relative;

    .spinner-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;