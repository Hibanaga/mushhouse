import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
    margin: 4em 0;
    
    .columns {
        display: grid;
        grid-template-columns: calc(5.65 / 12 * 100%) calc(5.65 / 12 * 100%);
        column-gap: calc(.35 / 12 * 100%);
        
        .column-gallery {
            position: relative;

            .inner-image {
                display: flex;
                justify-content: center;
                min-height: 25em;

                .image {
                    background-size: contain;
                    background-position: center center;
                    height: 100%;
                    width: 100%;
                }
            }

            .embla {
                overflow: hidden;
                margin-top: 1em;

                .embla-container {
                    display: flex;
                    flex-direction: row;
                    height: auto;
                    margin-left: -1em;

                    .embla-slide {
                        flex: 0 0 25%;
                        min-width: 0;
                        padding-left: 1em;

                        &.image {

                        }
                    }
                }
            }
        }
        
        .column-details {
            position: relative;


            .name {
                color: #252525;
                font-weight: 900;
                margin-bottom: .625em;
            }

            .inner-rating {
                margin-bottom: 1em;

                .inner-stars {
                }

                .count-reviews {
                }
            }

            .price {
                display: block;
                font-size: 1.75em;
                color: #dd2222;
                font-weight: 400;
                margin-bottom: .875em;
            }

            .description {
                color: #6f6f6f;
                font-weight: 300;
                display: block;
                line-height: 1.5em;
            }

            .inner-actions {
                margin-top: 2em;
                display: flex;
                gap: .5em;

                .add-to-cart-action {
                    .button {
                        padding: .95em 1.5em;

                        .description {
                            font-weight: 900;
                            letter-spacing: .025em;
                            text-transform: uppercase;
                            font-size: .975em;
                            padding-top: .15em;
                        }
                    }
                }

                .like-action {
                    .button {
                        height: 4em;
                        width: 4em;
                        background-color: #f5f5f5;

                        .description {
                            .icon {
                                font-size: 1em;
                                color: #6f6f6f;
                            }
                        }
                    }
                }
            }

            .inner-details {
                margin-top: 4em;
                padding-top: 4em;
                border-top: 1px solid #ebebeb;

                .inner-detail {
                    display: flex;
                    justify-content: space-between;
                    color: #1c1c1c;
                    margin-bottom: 1.25em;
                    max-width: 15em;

                    .option-description {
                        display: block;
                        font-weight: 600;
                        font-size: 1.15em;
                    }

                    .value {
                        display: block;
                        font-weight: 300;
                        font-size: 1.15em;
                        width: 4em;
                    }
                }
            }
        }
    }
`;
