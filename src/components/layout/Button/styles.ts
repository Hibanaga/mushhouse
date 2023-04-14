import styled from '@emotion/styled';

export default styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .button {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-size: 1em;
        text-decoration: none;
        cursor: pointer;

        border-radius: .4em;
        border: none;

        &.focused-button {
            background-color: #4d4d4d;
        }

        .layout-spinner {
            position: relative;
            top: 0;

            .spinner {
                height: 1.2em;
            }
        }

        &.disabled {
            background-color: #909090 !important;
        }
    }

    a {
        text-decoration: none;
    }

    span {
        font-weight: 400;
        font-size: .925em;
        text-decoration: none;
        cursor: pointer;
    }

    .button-icon {
        margin-left: .5em;

        .button-icon-image {
            width: .7em;
        }
    }

    /* Layouts */

    &.layout-default {
        .button {
            padding: .7em 1.5em;
        }
    }

    &.layout-wide {
        .button {
            padding: .7em 3.5em;
        }
    }

    &.layout-block {
        width: 100%;

        .button {
            padding: .7em 1em;
            width: 100%;
        }
    }


    /* Sizes */

    &.size-small {
        .button {
            font-size: .75em;
            min-width: 6em;
        }
    }

    &.size-medium {
        .button {
            font-size: .9em;
            min-width: 8em;

        }
    }

    &.size-large {
        .button {
            font-size: 1.15em;
            min-width: 8em;
        }
    }


    /* Styles */

    &.style-primary {
        &.variant-primary {
            .button {
                background-color: #D9501E;
                color: #FFF;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-contained {
            .button {
                background-color: rgba(83, 196, 190, 0.15);
                color: #53C4BE;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-outline {
            .button {
                background-color: transparent;
                color: #36363b;
                border: .01em solid #36363b;
            }

            &:hover {
                .button {
                    background-color: #36363b;
                    color: #FFF;
                }
            }
        }

        &.variant-link {
            display: inline-block;

            .button {
                background-color: transparent;
                border: none;
                padding: 0;
                min-width: initial;

                color: #4FC0BA;
            }

            &:hover {
                opacity: 0.7;
            }
        }
    }

    &.style-secondary {
        &.variant-primary {
            color: #FFF;

            .button {
                background-color: #979797;
                padding: 1.05em;
            }

            &:hover {
                .button {
                    background-color: #6e6e6e;
                }
            }
        }

        &.variant-contained {
            .button {
                background-color: rgba(151, 151, 151, 0.15);
                padding: 1.05em;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-outline {
            color: #FFF;

            .button {
                background-color: transparent;
                border: 2px solid #979797;
                padding: 1.05em;
            }

            &:hover {
                .button {
                    background-color: #979797;
                }
            }
        }

        &.variant-link {
            color: #FFF;

            .button {
                background-color: transparent;
                padding: 1.05em;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }
    }

    &.style-error {
        &.variant-primary {
            .button {
                background-color: #FD6E6E;
                color: #FFF;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-contained {
            .button {
                background-color: rgba(253, 110, 110, 0.15);
                color: #FFF;
            }

            &:hover {
                .button {
                    opacity: .6;
                }
            }
        }

        &.variant-outline {
            .button {
                background-color: transparent;
                color: #FD6E6E;
                border: .01em solid #FD6E6E;
            }

            &:hover {
                .button {
                    background-color: #FD6E6E;
                    color: #FFF;
                }
            }
        }

        &.variant-link {
            .button {
                background-color: transparent;
                color: #FD6E6E;
            }

            &:hover {
                .button {
                    background-color: #FD6E6E;
                    color: #FFF;
                }
            }
        }
    }

    /* Modificators */

    &.disabled {
        .button {
            background-color: #4FC0BA;
            color: #FFF;
        }

        &:hover {
            .button {
                background-color: darken(#4FC0BA, 10%);
            }
        }
    }

    &.shadow {
        .button-shadow {
            display: block;
        }
    }

`;
