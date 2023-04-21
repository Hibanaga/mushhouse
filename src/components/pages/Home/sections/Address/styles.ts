import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #D9BBA0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    
    .layout-layout-container {
        padding: 1em 0;
        
        .data-content {
            font-size: 1em;
            display: block;
            font-weight: 300;
            color: #271C15;
            text-align: center;
            line-height: 150%;
        } 
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
