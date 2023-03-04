import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    background-color: #FFF;
    box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
    border-radius: .375em;
    overflow: hidden;
    
    
    .inner-image {
        position: relative;
        height: 15em;
    }
    
    
    .inner-main {
        padding: 1em;
        height: 15em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .inner-content {
            height: 75%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .data-name {
                font-size: 1.4em;
                font-weight: 400;
            }

            .data-category {
                font-size: .875em;
                font-weight: 700;
                color: #919197;
                display: block;
                padding-bottom: .875em;
            }

            .data-price {
                display: block;
                font-size: 1.15em;
                color: #000000;
                margin-bottom: .5em;
            }
        }

        .inner-action {
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5%;
        }

    }
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
