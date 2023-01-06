import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    
    .wrapper-image {
        position: relative;
        width: 100%;
        overflow: hidden;
        height: 100%;
        
        .image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    
    .wrapper-content {
        .row-activity {
            display: flex;
            align-items: center;
            margin: .5em 0;

            .wrapper-activity {
                display: flex;
                align-items: center;
                color: #b2b2b2;

                &:last-of-type {
                    margin-left: 2.5em;
                }

                &:first-of-type {
                    .description {
                        padding-top: .1em;
                    }
                }

                .icon {
                }

                .description {
                    display: block;
                    font-size: 1em;
                    margin-left: .35em;
                    font-weight: 300;

                }
            }
        }

        .headline {
            color: #1c1c1c;
            font-size: 1.25em;
            margin: 1em 0;
            font-weight: 700;
        }

        .description {
            color: #6f6f6f;
            font-weight: 300;
            font-size: 1.15em;
            line-height: 150%;
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        .row-activity {
            .wrapper-activity {
                .description {
                    font-size: .925em;
                }
            }
        }
        
        
        .headline {
            font-size: 1em;
        }

        .description {
            font-size: .875em;
        }
    }

    @media all and (max-width: ${variables.mobileL}) {
        border: 1px solid #ddd;
        border-radius: .25em;
        
        .wrapper-content {
            padding: 0 .85em .35em .85em;
        }
    }
`;
