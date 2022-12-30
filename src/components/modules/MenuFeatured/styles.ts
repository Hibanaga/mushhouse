import styled from 'styled-components';


export default styled.div`
    position: relative;
    margin-top: 3em;
    
    .navigation-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .item {
            margin: 0 .65em;
            cursor: pointer;
            
            .content {
                font-size: 1.1em;
                
                .underline {
                    margin-top: .15em;
                    height: .1em;
                    width: 100%;
                    background-color: transparent;
                    
                    
                    &.active {
                        background-color: #7fad39;
                    }
                }
            }
        }
    }
`;
