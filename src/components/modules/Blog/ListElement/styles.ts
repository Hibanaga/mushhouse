import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;
   
    .inner-image {
        width: 100%;
        
        .image {
            width: 100%;
            background-size: cover;
        }
    }

    .row-activity {
        display: flex;
        align-items: center;
        margin: .5em 0;

        .wrapper-activity {
            display: flex;
            align-items: center;
            color: #b2b2b2;
            
            .icon {
                font-size: 1.15em;
            }

            &:last-of-type {
                margin-left: 2.5em;
            }

            &:first-of-type {
                .description {
                    padding-top: .1em;
                }
            }

            .icon {
            }

            .description {
                display: block;
                font-size: 1em;
                margin-left: .35em;
                font-weight: 300;

            }
        }
    }
    
    .inner-content {
        .title {
            font-size: 1.5em;
            font-weight: 900;
            margin-top: .75em;
            line-height: 145%;
        }
        .subheadline {
            display: block;
            font-weight: 300;
            font-size: 1.15em;
            line-height: 140%;
            padding: .65em 0;
        }
        
        .inner-actions {
            max-width: 10em;
            
            .button-read-more {
                .button {
                    background-color: transparent;
                    border: 1px solid #1c1c1c;
                    padding: .75em 0;
                    .description {
                        font-weight: 400;
                        color: #1c1c1c;
                    }
                }
            }
        }
    }
`;
