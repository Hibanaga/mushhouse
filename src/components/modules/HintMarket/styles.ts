import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    display: flex;
    margin: 4em 0;
    
    .inner-image {
        position: relative;
        width: 10em;
        height: 6em;
    }
    
    .inner-content {
        margin-left: 2em;
        font-size: .725em;
        line-height: 150%;
        padding-top: 2.5em;
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
