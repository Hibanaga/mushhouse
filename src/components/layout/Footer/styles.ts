import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.footer`
    position: relative;
    background: #F3F6FA;
    color: #1c1c1c;

    .wrapper-page-container {
        display: grid;
        grid-template-columns: calc(4 / 12 * 100%) calc(3 / 12 * 100%) calc(5 / 12 * 100%);
        grid-column-gap: 1em;
        padding: 4em 0;

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
                        font-size: 1.15em;
                        padding-top: .75em;

                        .description {
                            display: block;
                            padding-right: .375em;
                        }

                        .value {
                            display: block;
                            font-weight: 300;
                        }
                    }
                }
            }
            
            &.wrapper-links {
                .list {
                    margin-top: 1.5em;
                    .item {
                        display: flex;
                        align-items: center;
                        font-size: 1em;
                        padding-top: .45em;
                        margin-top: .5em;

                        .link {
                            display: block;
                            font-weight: 300;
                        }
                    }
                }
            }
            
            &.wrapper-newsletter {
                .subheadline {
                    display: block;
                    margin: 1em 0;
                }
                
                .inner-email {
                    margin-top: 3em;
                    display: grid;
                    grid-template-columns: calc(9 / 12 * 100%) calc(3 / 12 * 100%);
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {

        .wrapper-page-container {
            display: flex;
            flex-direction: column;
            padding: 2em 0;
            
            .wrapper {
                margin: 1em 0;
                
                &.wrapper-newsletter {
                    order: 1;
                    
                }

                &.wrapper-links {
                    order: 0;
                }

                &.wrapper-address {
                    order: 2;
                    display: none;
                }
            }
        }
        
        
    }
`;
