import styled from 'styled-components';

export default styled.div`
    
    .button {
        border: none;
        outline: none;
        
        font-weight: 600;
    }
    
    // SIZES //
    &.small-size {
        .button {
            min-width: 4.5em;
            min-height: 2.35em;

            .description {
                font-size: .95em;
            }
        }
    }
    
    &.medium-size {
        .button {
            min-width: 6.75em;
            min-height: 3.25em;
            
            .description {
                font-size: 1.2em;
            }
        }
    }

    &.large-size {
        .button {
            min-width: 8em;
            min-height: 3.5em;
            
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
