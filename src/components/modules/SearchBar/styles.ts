import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.div`
    position: relative;

    display: grid;
    grid-template-columns: calc(10 / 12 * 100%) calc(2 / 12 * 100%);
    box-sizing: border-box;

    .layout-input {
        .wrapper-input {
            .input {
                border: 1px solid #ebebeb;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
            }
        }
    }

    .row-user-inputs {
        //display: grid;
        border-top-left-radius: 8px;
        //grid-template-columns: calc(2.5 / 12 * 100%) calc(9.5 / 12 * 100%);
        border: 1px solid #ebebeb;
        border-right: 0;
        
        .container-select {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0;
            
            .separator {
                height: 50%;
                width: .1em;
                background-color: #ebebeb;
            }
        }
        
        .layout-input {
            .wrapper-input {
                .input {
                    border: none;
                }
            }
        }
    }
    
    .button-search {
        .button {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    
    @media all and (max-width: ${variables.tabletL}) {
        grid-template-columns: calc(10 / 12 * 100%) calc(2 / 12 * 100%);

        .row-user-inputs {
            grid-template-columns: calc(3 / 12 * 100%) calc(9 / 12 * 100%);
        }
    }
`;
