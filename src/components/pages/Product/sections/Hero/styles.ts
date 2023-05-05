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
            height: 20em;
            width: 100%;
        }

        .slider-wrapper {
            position: relative;

            .slick-list {
                overflow: hidden;
                border-radius: 1em;
            }

            .slick-track {
                display: flex;
                margin-top: 1em;

                .slick-slide {
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                    background-color: #D9BBA0;
                    border-radius: .275em;
                    min-height: 6.25em;
                    margin: 0 .675em;
                    padding: 0.75em 3em 0.3em 0.75em;
                    box-sizing: border-box;
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
