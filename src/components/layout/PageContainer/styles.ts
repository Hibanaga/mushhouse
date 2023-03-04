import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    position: relative;
    padding-top: 3.8em;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    background-color: #FAFAFA;
    
    @media all and (max-width: ${variables.mobileL}) {
        padding-top: 3em;
    }
`;
