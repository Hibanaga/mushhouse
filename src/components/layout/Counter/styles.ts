import styled from 'styled-components';
import variables from 'styles/vars';


export default styled.section`
    position: relative;
    
    .button {
        border: none;
        outline: none;
        background-color: #f5f5f5;
        
        .icon {
            color: #6f6f6f;
            transition: 150ms;
        }
        
        &:hover {
            .icon {
                color: #333;
            }
        }
    }
    
    .input {
        outline: none;
        text-align: center;
        border: none;
        background-color: #f5f5f5;
        color: #6f6f6f;
        height: 100%;
    }


    // SIZES //
    &.small-size {
        .button {
            height: 100%;

            .icon {

            }
        }

        .input {
            font-size: .95em;
        }
    }

    &.medium-size {
        display: flex;
        align-items: center;
        
        .button {
            height: 100%;
            padding: .95em 1em;

            .icon {
                font-size: 1.25em;
            }
        }

        .input {
            padding: .6em 0;
            font-size: 1.35em;
            max-width: 2em;
        }
    }

    &.large-size {
        .button {
            height: 100%;

            .icon {

            }
        }

        .input {
            font-size: .95em;
        }
    }
`;
