import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.aside`
    position: relative;
    
    .module-catalog-filter-element {
        &.inner-departments {
            .list-departments {
                .list-item {
                    cursor: pointer;
                    .label {
                        display: block;
                        color: #1c1c1c;
                        font-size: 1em;
                        font-weight: 300;
                        padding: .45em 0;
                    }
                }
            }
        }

        &.inner-sizes {
            margin-top: 4em;

            .row-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 1em;

                .button-select-size {
                    .button {
                        padding: .75em 1.25em;

                        .description {
                            font-size: 0.95em;
                            font-weight: 300;
                            color: #6f6f6f;
                        }
                    }
                }
            }
        }


        &.inner-latest {
            margin-top: 4em;

            .embla {
                overflow: hidden;
                margin-top: 4em;

                .embla-container {
                    display: flex;
                    flex-direction: row;
                    height: auto;
                    margin-left: -1em;

                    .embla-slide {
                        flex: 0 0 100%;
                        min-width: 0;
                        padding-left: 1em;

                        .inner-slide {
                            display: flex;
                            margin-top: 1em;

                            &:first-of-type {
                                margin-top: 0;
                            }

                            .image {
                                max-width: 5em;
                            }

                            .inner {
                                display: flex;
                                flex-direction: column;
                                padding: .55em 1em;

                                .name {
                                    font-size: 1.05em;
                                    font-weight: 300;
                                }

                                .price {
                                    font-size: 1.15em;
                                    font-weight: 900;
                                    padding-top: .675em;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
        .module-catalog-filter-element {
            .headline {
                font-size: 2.15em;
            }

            &.inner-departments {
                .list-departments {
                    .list-item {
                        .label {
                            font-size: 1.25em;
                        }
                    }
                }
            }

            &.inner-sizes {
                .row-buttons {
                    .button-select-size {
                        .button {
                            .description {
                                font-size: 1.15em;
                            }
                        }
                    }
                }
            }

            &.inner-latest {
                .embla {
                    .embla-container {
                        .embla-slide {
                            .inner-slide {
                                .image {
                                    max-width: 10em;
                                }

                                .inner {
                                    display: flex;
                                    flex-direction: column;
                                    padding: 2em 1.75em;

                                    .name {
                                        font-size: 1.45em;
                                        font-weight: 300;
                                    }

                                    .price {
                                        font-size: 1.85em;
                                        font-weight: 900;
                                        padding-top: .675em;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
