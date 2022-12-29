import styled from 'styled-components';

export default styled.div`

    .wrapper-input {
        width: 100%;
        
        .input {
            width: 100%;
            outline: none;
        }
    }
    
    
    
    &.size-medium {
        .wrapper-input {
            .input {
                padding: .65em .45em;
            }
        }
    }
    
    &.style-primary {
        .wrapper-input {
            .input {
                padding: .65em .45em;
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
