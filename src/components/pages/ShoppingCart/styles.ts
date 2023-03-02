import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    
    .container-shopping-cart {
        display: grid;
        grid-template-columns: calc(8.3 / 12 * 100%) calc(3.25 / 12 * 100%);
        column-gap: calc(0.35 / 12 * 100%);
        margin: 4em 0;
        
        .row-total {
            column-gap: calc(1 / 12 * 100%);
        }
    }
    
    .container-empty-cart {
        height: 100%;
    }
    
    @media all and (max-width: ${variables.tabletM}) {
        .container-shopping-cart {
            display: flex;
            flex-direction: column;

            .row-total {
                display: grid;
                grid-template-columns: calc(5.75 / 12 * 100%) calc(5.75 / 12 * 100%);
                column-gap: calc(.5 / 12 * 100%);
                margin: 3em 0;
                direction: rtl;
            }
        }
    }
    
    @media (max-width: ${variables.mobileL}) {
        .container-shopping-cart {
            .row-total {
                margin: 3em 0;
                display: flex;
                flex-direction: column;
            }
        }
    }
`;
