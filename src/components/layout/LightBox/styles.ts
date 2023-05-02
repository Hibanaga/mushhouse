import styled from '@emotion/styled';

import vars from 'theme/styles/vars';

export default styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
    z-index: 9999;
    align-items: center;
    justify-content: space-between;
    
    .button-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 0 2.3em;
        padding: 0.7em;
        z-index: 9999;

        .button-close {
            width: 3em;
            height: 3em;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: 150ms;
            
            &:hover {
                background-color: rgba(255, 255, 255, 0.6);
            }

            .button-close-icon {
                width: 100%;
                height: 100%;
                mask: url("/images/icon-x.svg") no-repeat center;
                background-color: #000;
            }
        }
    }

    .image-container {
        display: flex;
        width: 100%;
        height: inherit;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        .image {
            height: 100%;
            max-width: 40%;
            width: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        
    }

    animation: fadeInModal 300ms linear forwards;
    @keyframes fadeInModal {
        100% {
            background-color: rgba(0, 0, 0, 0.95);
        }
    }

    .fade-in {
        animation: fadeIn ease 0.4s;
        -webkit-animation: fadeIn ease 0.4s;
        -moz-animation: fadeIn ease 0.4s;
        -o-animation: fadeIn ease 0.4s;
        -ms-animation: fadeIn ease 0.4s;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-o-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-ms-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media only screen and (max-width: ${vars.tabletS}) {
        .image-container {
            position: relative;

            .image {
                max-width: 1224px;
            }
        }
    }
`;
