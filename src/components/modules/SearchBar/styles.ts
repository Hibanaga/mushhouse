import styled from 'styled-components';


export default styled.div`
    position: relative;

    display: grid;
    grid-template-columns: calc(10.5 / 12 * 100%) calc(1.5 / 12 * 100%);
    box-sizing: border-box;

    .row-user-inputs {
        display: grid;
        grid-template-columns: calc(2.5 / 12 * 100%) calc(9.5 / 12 * 100%);
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
`;
