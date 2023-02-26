import styled from 'styled-components';
import vars from 'styles/vars';

export default styled.div`
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 8px;
    display: grid;
    grid-template-rows: calc(5 / 12 * 100%) calc(7 / 12 * 100%);
    
    .test-warapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin-top: 1em;
        
        .layout-button {
            margin-top: .5em;
            border-radius: 8px;
            overflow: hidden;
            
            .button {
               width: auto;
                padding: .65em 1.25em;
            }
        }
    }
    
    .wrapper-image {
        position: relative;
        width: 100%;
        overflow: hidden;
        min-height: 11em;
        border-top-left-radius: 0.375em;
        border-top-right-radius: 0.375em;

        &:hover {
            .wrapper-icons {
                transform: translatey(0);
            }
        }

        .image {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        
        .wrapper-icons {
            position: absolute;
            bottom: 0;
            width: 100%;
            transition: 250ms ease-in-out;
            
            transform: translateY(3.5em);
            
            display: flex;
            justify-content: center;
            margin-bottom: .5em;
            
            .wrapper-icon {
                background-color: #FFF;
                border: 1px solid #bababa;
                margin: .25em;
                border-radius: 50%;
                font-size: 1.25em;
                padding: .4em;
                cursor: pointer;
                
                display: flex;
                align-items: center;
                justify-content: center;
                
                transition: 300ms ease-in-out;

                &:hover {
                    transform: rotate(360deg);
                    background-color: #7fad39;
                    color: #FFF;
                }
            }
        }
    }
    
    .wrapper-content {
        cursor: pointer;
        margin-top: 4em;
        padding: 0 1em .5em 1em;
        max-height: 7em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .name {
            text-align: center;
            font-size: 1.25em;
            font-weight: 300;
        }
        
        .price {
            display: block;
            text-align: center;
            margin-top: .65em;
            font-weight: 600;
            font-size: 1.15em;
        }
    }
    
    @media all and (max-width: ${vars.desktopXS}) {
        grid-template-rows: calc(6 / 12 * 100%) calc(6 / 12 * 100%);

        .wrapper-image {
            min-height: 12em;
            max-height: 12em;
        }
    }

    @media all and (max-width: ${vars.tabletM}) {
        .wrapper-image {
            min-height: 10em;
            max-height: 10em;
        }

        .wrapper-content { 
            margin-top: 3em;
        }
    }
    
    @media all and (max-width: ${vars.mobileL}) {
        grid-template-rows: calc(5 / 12 * 100%) calc(7 / 12 * 100%);

        .wrapper-content {
            margin-top: 5.5em;
            max-height: 5.5em;
        }

        .wrapper-image {
            min-height: 12em;
            max-height: 12em;
        }
    }
    
    @media all and (max-width: ${vars.mobileM}) {
        grid-template-rows: calc(7 / 12 * 100%) calc(5 / 12 * 100%);
        
        .wrapper-image {
            min-height: 15em;
            max-height: 15em;
        }

        .wrapper-content {
            margin-top: 3.25em;
        }
    }
`;
