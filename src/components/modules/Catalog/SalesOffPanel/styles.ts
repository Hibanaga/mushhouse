import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.section`
    position: relative;
    
    .headline-sales-off {
        justify-content: flex-start;
        
        .headline {
            .headline-underline {
                width: 100%;
            }
        }
    }

    .embla {
        overflow: hidden;
        margin-top: 4em;

        .embla-container {
            display: flex;
            flex-direction: row;
            height: auto;
            margin-left: -1em;

            .embla-slide {
                flex: 0 0 33.3%;
                min-width: 0;
                padding-left: 1em;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        .embla {
            overflow: hidden;
            .embla-container {
                .embla-slide {
                    flex: 0 0 50%;
                }
            }
        }
    }
    
    
    @media all and (max-width: ${variables.tabletS}) {
        .headline-sales-off {
           margin-top: 5em;
        }
    }
`;
