import styled from 'styled-components';

export default styled.div`
    .wrapper-input {
        width: 100%;
        
        .input {
            width: 100%;
            outline: none;
            padding: 0 .75em;
            border: none;
        }
    }

    &.size-small {
        .wrapper-input {
            .input {
                min-height: 2.35em;
            }
        }
    }
    
    &.size-medium {
        .wrapper-input {
            .input {
                min-height: 3.25em;
            }
        }
    }
    
    &.size-large {
        .wrapper-input {
            .input {
                min-height: 3.05em;
                font-size: 1.15em;
            }
        }
    }
    
    &.style-primary {
        .wrapper-input {
            .input {
                //padding: .65em .45em;
            }
        }
    }
    
    &.variant-contained {
        .wrapper-input {
            .input {
                border: 1px solid #ebebeb;
            }
        }
    }

    &.variant-primary {
        .wrapper-input {
            .input {
                border-bottom: 1px solid #ebebeb;
            }
        }
    }
`;
