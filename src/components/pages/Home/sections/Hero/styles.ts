import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    position: relative;
    height: 35em;
    background-color: #000;
    
    .bg-image {
        opacity: .7;
    }
    
    .layout-layout-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .headline {
            position: relative;
            font-size: 3.5em;
            font-weight: 300;
            text-align: center;
            color: #FFF;
        }
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
