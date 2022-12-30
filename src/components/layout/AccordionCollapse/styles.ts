import styled from 'styled-components';


export default styled.div`
    position: relative;
    width: 100%;

    .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.75em;
        cursor: pointer;
        transition: 150ms;
        width: 100%;

        .wrapper-icon {
        }

        .headline {
            font-weight: 500;

            &:first-letter {
                text-transform: uppercase;
            }
        }
    }

    .collapse-body {
        .collapse-item {
            padding: .85em 1.5em;
            transition: 150ms;

            &.selected {
            }

            .collapse-description {
                font-weight: 300;
            }
        }
    }

    // SIZES //
    &.small-size {
        .hero {
            min-height: 2.35em;

            .headline {
                font-size: .95em;
            }

            .wrapper-icon {
                font-size: .95em;
            }
        }
    }

    &.medium-size {
        .hero {
            min-height: 3.35em;

            .headline {
                font-size: 1.2em;
            }

            .wrapper-icon {
                font-size: 1.2em;
            }
        }
    }

    &.large-size {
        .hero {
            min-height: 3.6em;

            .headline {
                font-size: 1.5em;
            }

            .wrapper-icon {
                font-size: 1.5em;
            }
        }
    }

    // VARIANTS //
    &.primary-style {
        .hero {
            background-color: #7fad39;

            .wrapper-icon {
                color: #FFF;
            }

            .headline {
                color: #FFF;
            }

            &:hover {
                opacity: .75;
            }
        }

        .collapse-body {
            border: 1px solid #ebebeb;
            border-top: none;

            .collapse-item {
                cursor: pointer;
                
                
                &:hover {
                    background-color: rgba(224, 224, 224, 0.2);
                }

                &.selected {
                    background-color: rgba(224, 224, 224, 0.6);
                }

                .collapse-description {
                }
            }
        }
    }
`;
