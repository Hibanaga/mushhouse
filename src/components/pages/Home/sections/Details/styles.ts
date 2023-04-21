import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.main`
    .section-headline {
        background-color: #D9BBA0;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        padding: .5em 0;
        text-align: center;
        font-weight: 400;
        font-size: 1.625em;
    }
    
    .inner-pagination {
        margin:  0 0 4em 0;
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
