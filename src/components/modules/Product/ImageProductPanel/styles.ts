import styled from 'styled-components';
import variables from 'styles/vars';


export default styled.section`
    position: relative;
    
    .inner-image {
        display: flex;
        justify-content: center;
        min-height: 25em;
        
        .image {
            background-size: contain;
            background-position: center center;
            height: 100%;
            width: 100%;
        }
    }
    
    .embla {
        overflow: hidden;
        margin-top: 1em;
        
        .embla-container {
            display: flex;
            flex-direction: row;
            height: auto;
            margin-left: -1em;
            
            .embla-slide {
                flex: 0 0 25%;
                min-width: 0;
                padding-left: 1em;
                
                &.image {
                    
                }
            }
        }
    }
`;
