import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.section`
    position: relative;
    overflow: hidden;
   
    .section-headline {
        background-color: #D9BBA0;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        padding: .5em 0;
        text-align: center;
        font-weight: 400;
        font-size: 2em;
    }
    
    .layout-layout-container {
        position: relative;
        padding: 4em 0;
        box-sizing: border-box;

        .slider-wrapper {
            position: relative;
            width: 100%;
            display: flex;
            flex-flow: column;

            .slick-list {
                overflow: hidden;
                border-radius: 1em;
            }

            .slick-track {
                overflow: hidden;
            }

            .slide-item {
                width: 100%;
                height: 100%;
                padding: 1em;
                overflow: hidden;
                position: relative;
                
                .headline {
                    font-size: 1.75em;
                    margin-bottom: 1em;
                    display: block;
                    font-weight: 300;
                    color: #271C15;
                    line-height: 150%;
                    text-align: center;
                }
                
                .inner-slide-content {
                    position: relative;
                    padding: 0 .75em .5em .75em;
                    
                    .data-content {
                        font-size: 1.25em;
                        display: block;
                        font-weight: 300;
                        color: #271C15;
                        line-height: 150%;
                        
                        .strong {
                            font-weight: 500;
                        }
                        
                        &:last-of-type {
                            margin-bottom: .375em;
                        }
                    }
                    
                    .list {
                        margin-top: 2em;
                        
                        .list-item {
                            font-weight: 300;
                            color: #271C15;
                            font-size: 1.25em;
                            position: relative;
                            padding-left: 1em;
                            line-height: 150%;

                            &:before {
                                content:"";
                                width: .5em;
                                height: .5em;
                                background-color: #D9501E;
                                position: absolute;
                                left: 0;
                                top: 50%;
                                transform: translateY(-50%);
                                border-radius: 50%;
                            }
                        }
                    }
                    
                    .inner-image {
                        position: absolute;
                        right: 2em;
                        bottom: -6.5em;
                        width: 20em;
                        height: 20em;
                    }
                }
                
                .inner-slide-content-shipping {
                    .data-content {
                        font-size: 1.25em;
                        display: block;
                        padding-bottom: 1em;
                        font-weight: 300;
                        color: #271C15;
                        line-height: 150%;

                        .strong {
                            font-weight: 500;
                        }
                    }
                    
                    .data-label {
                        font-size: 1.25em;
                        display: block;
                        font-weight: 500;
                        color: #271C15;
                        text-align: center;
                        line-height: 150%;
                        
                        
                        &.spacing {
                            margin-bottom: 1em;
                        }
                    }
                }
                
            }

            .button-arrow {
                position: absolute;
                width: 2em;
                height: 2em;
                top: 50%;
                transform: translateY(-50%);
                left: -2em;
                z-index: 10;
                transition: 250ms;

                .image {
                    filter: invert(85%) sepia(14%) saturate(624%) hue-rotate(342deg) brightness(92%) contrast(83%);
                }
                
                &:hover {
                    &:first-of-type {
                        left: -2.25em;
                    }

                    &:last-of-type {
                        right: -2.25em;
                    }
                }

                &:first-of-type {
                   .image {
                       transform: rotate(180deg);
                   }
               }
                
                &:last-of-type {
                    right: -2em;
                    left: initial;
                }
            }

            .slick-track {
                display: flex;

                .slick-slide {
                    overflow: hidden;
                    background-color: #D9BBA0;
                    border-radius: 1em;
                    min-height: 25em;
                    margin: 0 .675em;
                    padding: 0.75em 3em 0.3em 0.75em;
                    box-sizing: border-box;
                }
            }

            .slick-arrow {
                width: 1.5em;
                height: 1.5em;
                position: absolute;
                bottom: -0.65%;
                cursor: pointer;
                transition: 350ms;

                &:hover {
                    transform: scale(1.35);
                }
            }

            .slick-prev {
                .icon-arrow-slider {
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url('/images/arrow-slider.svg');
                }
            }

            .slick-next {
                .icon-arrow-slider {
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url('/images/arrow-slider.svg');
                    transform: rotate(180deg);
                }
            }
        }
    }

    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
