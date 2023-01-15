import styled from 'styled-components';
import variables from 'styles/vars';


export default styled.section`
    position: relative;
    margin-top: 3em;
    
    
    .description-wrapper {
        .headline {
            font-size: 1.25em;
            color: #333333;
            margin-bottom: 1.25em;
            font-weight: 700;
        }
        
        .content {
            display: block;
            color: #666666;
            font-size: .975em;
            line-height: 2em;
            font-weight: 300;
        }
    }
    
    .related-headline {
        margin: 6em 0 4em 0;
    }

    .row-elements {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 1.5em;
        row-gap: 3em;
        
        margin-bottom: 6em;
    }

    @media all and (max-width: ${variables.tabletS}) {
        .row-elements {
            grid-template-columns: auto auto auto;
            grid-gap: 1.25em;
            row-gap: 2em;
        }
    }

    @media all and (max-width: ${variables.mobileM}) {
        .row-elements {
            grid-template-columns: auto auto;
            grid-gap: 1.25em;
            row-gap: 2em;
        }
    }
`;
