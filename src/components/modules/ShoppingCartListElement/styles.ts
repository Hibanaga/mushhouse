import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    display: grid;
    gap: .75em;
    grid-template-columns: calc(3 / 12 * 100%) calc(3 / 12 * 100%) calc(3 / 12 * 100%);
    margin-bottom: 1em;
    
    .inner-image {
        width: 100%;
        height: 7em;
        position: relative;
        
        img {
            width: 100%;
            height: 100%;
            background-size: cover;
        }
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
