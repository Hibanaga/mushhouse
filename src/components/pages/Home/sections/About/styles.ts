import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    position: relative;
   
    .section-headline {
        background-color: #D9BBA0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: .5em 0;
        text-align: center;
        font-weight: 400;
        font-size: 1.625em;
    }
    
    .layout-layout-container {
        padding: 4em 0;
        
        .data-content {
            font-size: 1em;
            display: block;
            padding-bottom: 1em;
            font-weight: 300;
            color: #271C15;
            text-align: justify;
            line-height: 150%;
        }
        
        .list-images {
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 1.5em;
            margin: 1.5em 0;
            
            .list-element {
                position: relative;
                min-height: 20em;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
