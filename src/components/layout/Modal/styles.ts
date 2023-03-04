import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(1 67 93 / 50%);
        z-index: 98;
    }

    .modal-container {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100%;
        max-width: 65em;
        background-color: #FFF;
        box-shadow: 0 6px 20px rgba(31, 33, 34, 0.1);
        z-index: 99;
        transform: translate(-50%, -50%);
        padding: .5em;
        border-radius: .5em;

        .modal-body {
            .image-button {
                position: absolute;
                top: 3%;
                right: 2%;
                cursor: pointer;
            }
        }
    }

    @media all and (max-width: ${variables.mobileL}) {
        .modal-container {
            position: fixed;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 90%;
            transform: none;
        }
    }
`;
