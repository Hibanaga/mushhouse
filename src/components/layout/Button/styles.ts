import styled from 'styled-components';

export default styled.div`
    
    .button {
        border: none;
        outline: none;
        
        font-weight: 600;
        width: 100%;
    }
    
    // SIZES //
    &.small-size {
        .button {
            height: 100%;

            .description {
                font-size: .95em;
            }
        }
    }
    
    &.medium-size {
        .button {
            height: 100%;
            padding: .95em 0;
            
            .description {
                font-size: 1.2em;
            }
        }
    }

    &.large-size {
        .button {
            height: 100%;
            
            .description {
                font-size: 1.5em;
            }
        }
    }
    
    // STYLES //
    &.primary-style {
        .button {
            background-color: transparent;
        }
        
        &.primary-variant {
            .button {
                background-color: #7fad39;
                transition: 150ms;
                
                .row-loading {
                    color: #FFF;
                }
                
                .description {
                    color: #FFF;
                }
                
                &:hover {
                    opacity: .75;
                }
            }
        }
    }
`;
