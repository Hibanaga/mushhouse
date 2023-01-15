import styled from 'styled-components';


export default styled.div`
    position: relative;
    
    background-color: #f5f5f5;
    color: #1c1c1c;
    padding: 2em;
    font-weight: 700;

    .headline {
        font-size: 1.65em;
    }
    
    .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em 0;
        
        &.inner-sub-total {
            margin-top: 1em;
        }
        
        &.inner-total {
            margin-bottom: 1em;
            border-bottom: none;
        }
        
        border-bottom: 1px solid #ebebeb;
        
        .description {
            font-size: 1.25em;
        }
        
        .value {
            color: #dd2222;
            font-size: 1.25em;
        }
    }
`;
