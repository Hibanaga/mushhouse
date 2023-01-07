import styled from 'styled-components';


export default styled.div`
    display: flex;
    justify-content: center;
    
    .headline {
        font-weight: 900;
        text-align: center;
        display: inline-block;
        position: relative;
        
        .headline-underline {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 110%;
            height: .1em;
            width: 40%;
            background-color: #7fad39;
        }
    }
`;
