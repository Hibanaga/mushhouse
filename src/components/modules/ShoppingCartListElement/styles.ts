import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    display: grid;
    gap: .75em;
    grid-template-columns: calc(3 / 12 * 100%) calc(3 / 12 * 100%) calc(3 / 12 * 100%) calc(2.85 / 12 * 100%);
    margin-bottom: 1em;
    
    .inner-image {
        width: 100%;
        height: 7em;
        position: relative;
        
        img {
            width: 100%;
            height: 100%;
            background-size: cover;
        }
    }
    
    
    .inner-remove {
        display: flex;
        justify-content: center;
        align-items: center;

        .inner-close-button {
            display: block;
            position: relative;
            width: 3em;
            height: 3em;
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            border-radius: 50%;

            img {
                width: 100%;
                height: 100%;
                filter: invert(48%) sepia(16%) saturate(5%) hue-rotate(356deg) brightness(87%) contrast(88%);
            }
            
            &:hover {
                background-color: #f6f6f6;
            }
        }
    }
    
    .inner-counter {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
    }
   
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
