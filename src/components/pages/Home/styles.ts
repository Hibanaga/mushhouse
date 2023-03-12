import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    position: relative;
    z-index: 0;
    
    .button-shopping-cart {
        position: fixed;
        right: 5%;
        top: 25%;
        cursor: pointer;
        
        padding: .75em;
        background-color: rgba(255,255,255,.8);
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
        border-radius: 50%;
        width: 3.5em;
        height: 3.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        
        img {
            width: 75%;
            height: 75%;
        }
        
        .button-elements {
            position: absolute;
            bottom: -12.5%;
            right: -5%;
            width: 1.75em;
            height: 1.75em;
            background-color: red;
            border-radius: 50%;
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            .content {
                position: absolute;
                top: 52%;
                left: 52%;
                transform: translate(-50%, -50%);
                font-size: 1em;
                color: #FFF;
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
    }
`;

