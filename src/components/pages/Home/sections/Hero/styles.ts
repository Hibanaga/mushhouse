import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.header`
    margin-top: 1em;
    width: 100%;
    
    display: grid;
    grid-template-columns: calc(4.5 / 12 * 100%) calc(6.5 / 12 * 100%);
    column-gap: calc(1 / 12 * 100%);
    
    .column-image {
        position: relative;
        border-radius: .375em;
        overflow: hidden;
        height: 16em;
    }
    .column-details {
       .short-description {
           font-size: 2em;
           color: #36363b;
       }
        
        .list {
            margin-top: 2em;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            
            .list-item {
                padding-top: .25em;
                font-size: 1.1em;
                color: #000000;
                font-weight: 700;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
