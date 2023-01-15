import styled from 'styled-components';


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
                flex: 0 0 25%;
                min-width: 0;
                padding-left: 1em;
            }
        }
    }
`;
