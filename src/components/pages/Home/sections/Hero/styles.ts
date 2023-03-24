import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    margin: 7em 0 10em 0;
    width: 100%;
    
    display: grid;
    grid-template-columns: calc(5 / 12 * 100%) calc(6.5 / 12 * 100%);
    column-gap: calc(.5 / 12 * 100%);
    
    .column-image {
        position: relative;
        border-radius: .375em;
        
        .inner-image {
            position: absolute;
            top: -10%;
            height: 18em;
            width: 11.5em;
            
            &:first-of-type {
                left: 0;
                
            }
            
            &:nth-child(2) {
                left: 50%;
                top: -30%;
                transform: translateX(-50%);
                height: 24em;
                width: 16em;
                z-index: 10;
            }
            
            &:last-of-type {
                right: 0;
            }
        }
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
                font-size: .725em;
                color: #36363b;
                font-weight: 700;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
