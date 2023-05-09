import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    margin-top: 4.5em;
    
    display: grid;
    grid-template-columns: calc(5.5 / 12 * 100%) calc(6 / 12 * 100%);
    column-gap: calc(.5 / 12 * 100%);
    
    .column-images {
        
        .inner-image {
            position: relative;
            height: 18em;
            width: 100%;
        }

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
                display: flex;
                overflow: hidden;
                width: 100%;
                height: 100%;
                
                .slide-item {
                    width: 100%;
                    height: 100%;
                    //padding: .5em;
                    min-height: 18em;
                    overflow: hidden;
                    flex: 1 1 100%;
                   
                    cursor: pointer;
                    background-color: #D9BBA0;
                    border-radius: .275em;
                    padding: 0.75em 1.25em 0.3em 0.75em;
                    box-sizing: border-box;
                    //margin: 0 .675em;
                    background-color: #D9BBA0;
                    position: relative;
                  
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
                cursor: pointer;

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

            //.slick-track {
            //    display: flex;
            //
            //    .slick-slide {
            //        cursor: pointer;
            //        overflow: hidden;
            //        position: relative;
            //        background-color: #D9BBA0;
            //        border-radius: .275em;
            //        min-height: 12.5em;
            //        //margin: 0 .675em;
            //        padding: 0.75em 1.25em 0.3em 0.75em;
            //        box-sizing: border-box;
            //    }
            //}

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
        }
    }
    
    .column-details {
        .data-headline {
            display: block;
            font-size: 1.6em;
            margin-bottom: .825em;
            font-weight: 500;
        }
        .data-price {
            display: block;
            font-size: 1em;
            padding-bottom: 1em;
            margin-bottom: 1em;
        }
        
        .button-add-to-cart {
            display: inline-block;
            margin-bottom: 1.625em;
        }

        .data-description {
            display: block;
            font-size: .825em;
            margin-bottom: 1.5em;
        }
        
        .list {
            margin-bottom: 1em;
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        .column-images {
            .slider-wrapper {
                .slick-track {
                
                    .slick-slide {
                        min-height: 5.25em;
                        margin: 0 .275em;
                    }
                }
            }
        }
    }
   
    @media all and (max-width: ${variables.tabletS}) {
        .column-images {
            .inner-image {
                position: relative;
                height: 16.5em;
                width: 100%;
            }
        }
    }
    
    @media all and (max-width: ${variables.mobileL}) {
        display: flex;
        flex-direction: column;
        margin-top: 2.5em;

        .column-images {
            .inner-image {
                position: relative;
                height: 24em;
                width: 100%;
            }

            .slider-wrapper {
                .slick-track {

                    .slick-slide {
                        min-height: 7.25em;
                    }
                }
            }
        }

        .column-details {
            margin-top: 3em;
        }
    }
`;
