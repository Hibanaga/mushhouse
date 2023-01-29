import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.header`
    position: relative;
    height: 4.5em;
    background-color: rgba(224, 224, 224, 0.2);
    
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    
    .container {
        width: 95%;
        height: 100%;
        margin: 0 auto;
        max-width: 1440px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .wrapper {
            display: flex;
            align-items: center;
            height: 100%;
            
            &.wrapper-logo {
                max-width: 20%;
                width: 100%;
            }
            
            &.wrapper-activity {
                max-width: 20%;
                width: 100%;
                justify-content: flex-end;
            }
            
            
            .headline-logo {
                font-size: 2em;
            }
            
            .navigation-item {
                height: 100%;
                cursor: pointer;
                margin: 0 .2em;
                
                .link {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    color: #000;
                    font-size: 1.1em;
                    padding: 0 .5em;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: .05em;
                    transition: 150ms;
                    
                    &:hover {
                        color: #7fad39;
                    }
                }

                &:hover {
                    background-color: rgba(224, 224, 224, 0.2);
                }
                
                &.active {
                    .link {
                        color: #7fad39;
                    }
                }
            }
            
            .wrapper-icon {
                margin-right: 1em;
                border-radius: 50%;
                padding: .65em;
                transition: 150ms;
                cursor: pointer;
                
                &:hover {
                    background-color: rgba(224, 224, 224, 0.7);
                }
                
                .icon {
                    font-size: 1.25em;
                }
                
                &:last-of-type {
                    margin-right: 0;
                }
            }
        }
    }
    
    .inner-drawer {
        display: none;
    }

    @media all and (max-width: ${variables.desktopXS}) {
        
    }

    @media all and (max-width: ${variables.tabletS}) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 2em;
        
        
        .container {
            display: none;
        }

        .inner-drawer {
            display: block;
            
            .drawer-body {
                .list {
                    margin: 0.75em 0;
                    
                    .list-item {
                        padding: .55em 0.35em;
                        .link {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            color: #000;
                            font-size: 1.1em;
                            padding: 0 .5em;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: .05em;
                            transition: 150ms;

                            &:hover {
                                color: #7fad39;
                            }
                        }
                    }
                }
            }
        }
    }
`;
