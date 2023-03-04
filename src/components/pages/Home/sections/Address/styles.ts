import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    height: 10em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    
    .headline {
        color: #36363b;
        font-weight: 700;
        font-size: 1.35em;
    }
    .contact-address {
        font-size: 1.05em;
    }
    .privacy-policy {
        font-weight: 300;
        font-size: .925em;
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
