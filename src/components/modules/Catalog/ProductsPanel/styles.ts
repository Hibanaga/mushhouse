import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.section`
    position: relative;
    
    .container-products {
        margin-top: 6em;
        padding-top: 6em;
        border-top: 0.01em solid #ebebeb;
        
        .row-elements {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 1em;
            row-gap: 3em;

            margin-bottom: 4em;
        }
        
        .pagination-custom {
            .container {
                justify-content: flex-start;   
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        .container-products {
            .row-elements {
                grid-template-columns: auto auto;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
        .container-products {
            .pagination-custom {
                .container {
                    justify-content: center;
                }
            }
        }
    }
`;
