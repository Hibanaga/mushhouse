import styled from '@emotion/styled';

export default styled.section`
    position: relative;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    height: 3em;
    width: 100%;
    
    .button {
        border: none;
        outline: none;
        background-color: #f5f5f5;
        height: 100%;
        width: 100%;
        padding: 0;
        cursor: pointer;
        
        &:hover {
            opacity: .5;
        }
        
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
        width: 100%;
        padding: 0;
    }
`;
