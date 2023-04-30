import css from '@emotion/css';

export default css`
    #cc--main {
        .cc_div {
            .cloud {
                border: 1px solid #4c107d31;

                #c-inr {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                }

                #c-inr-i {
                    width: 100%;
                    padding-right: 0px;
                }

                #c-bns {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1em;

                    button {
                        margin: 0px !important;
                        width: 100%;

                        &:first-of-type {
                            background-color: #D9BBA0;

                            &:hover {
                                opacity: .8;
                            }
                        }

                        &:last-of-type {
                            color: #000;
                            background-color: #E5E5E5;

                            &:hover {
                                opacity: .9;
                            }
                        }
                    }
                }
            }

            a {
                color: #D9BBA0;
                text-decoration: none !important;
            }

            a:hover {
                color: #000;
                text-decoration: underline;
            }

            #s-cnt {
                #cs {
                    #c-s-in {
                        #s-inr {
                            #s-hdr {
                                #s-c-bnc {
                                    #s-c-bn {
                                        background-color: #000;

                                        &:hover {
                                            opacity: .9;
                                        }

                                        &::after {
                                            content: '';
                                            position: absolute;
                                            left: 0.82em;
                                            top: 0.58em;
                                            height: 0.6em;
                                            width: 1.5px;
                                            background: #fff;
                                            transform: rotate(45deg);
                                            border-radius: 1em;
                                            margin: 0 auto;
                                        }

                                        &::before {
                                            content: '';
                                            position: absolute;
                                            left: 0.82em;
                                            top: 0.58em;
                                            height: 0.6em;
                                            width: 1.5px;
                                            background: #fff;
                                            transform: rotate(-45deg);
                                            border-radius: 1em;
                                            margin: 0 auto;
                                        }
                                    }
                                }
                            }

                            #s-bl {
                                color: #000;

                                .c-bl {
                                    border-radius: 0.35em;
                                    background-color: #efefef;

                                    &:hover {
                                        background-color: #dddddd;
                                    }

                                    .b-bn {
                                        cursor: pointer;
                                        border-radius: 0.35em;

                                        &:hover {
                                            background-color: #dddddd;
                                        }

                                        .b-tl {
                                            border-radius: 0.35em;

                                            &:hover {
                                                background-color: #dddddd;
                                            }
                                        }

                                        .b-tg {
                                            .c-tg {
                                                background-color: #aaa;
                                            }

                                            .c-tgl:checked ~ .c-tg {
                                                background-color: #D9BBA0
                                            }
                                        }
                                    }
                                }
                            }

                            #s-bns {
                                button {
                                    margin: 0px 10px !important;
                                    width: auto;

                                    &:first-of-type {
                                        background-color: #D9BBA0;

                                        &:hover {
                                            opacity: .9;
                                        }
                                    }

                                    &:last-of-type {
                                        color: #000;
                                        background-color: #E5E5E5;

                                        &:hover {
                                            opacity: .9;
                                        }
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
