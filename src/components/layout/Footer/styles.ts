import styled from 'styled-components';

export default styled.footer`
    position: relative;
    background: #F3F6FA;
    color: #1c1c1c;

    .wrapper-page-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1em;
        padding: 2em 0;

        .wrapper {
            .headline {
                font-size: 1.25em;
                font-weight: 700;
            }

            &.wrapper-address {
                .list {
                    .item {
                        display: flex;
                        align-items: center;
                        font-size: 1em;
                        padding-top: .45em;

                        .description {
                            display: block;
                            padding-right: .375em;
                        }

                        .value {
                            display: block;
                        }

                        .link {

                        }
                    }
                }
            }
            
            &.wrapper-links {
                .list {
                    .item {
                        display: flex;
                        align-items: center;
                        font-size: 1em;
                        padding-top: .45em;

                        .link {
                          
                        }
                    }
                }
            }
            
            &.wrapper-newsletter {
                .description {
                    display: block;
                    margin: 1em 0;
                }
            }
        }
    }
`;
