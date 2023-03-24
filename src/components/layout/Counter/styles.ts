import styled from '@emotion/styled';

export default styled.section`
    position: relative;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    
    .button {
        border: none;
        outline: none;
        height: 2.5em;
        min-width: 2.5em;
        padding: 0;
        cursor: pointer;
       
        
        .inner-image {
            position: relative;
            display: flex;
            margin: 0 auto;
            width: 2em;
            height: 2em;
        }
        
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
        width: 100%;
        background-color: transparent;
        color: #6f6f6f;
        padding: 0;
    }
`;
