import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`

    .layout-modal {
        .modal-container {
            max-width: 40em;
            overflow-y: auto;
        }
    }

    .inner-body {
        padding: 1em;
        
        .subheadline {
            font-size: 1.375em;
            padding-bottom: 1.375em;
            border-bottom: 0.01em solid #333;
            margin-bottom: 1.375em;
            font-weight: 600;
            color: #000000;
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
