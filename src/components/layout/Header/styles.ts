import styled from 'styled-components';


export default styled.header`
    position: relative;
    height: 4em;
    background-color: #333;
    
    .container {
        width: 95%;
        height: 100%;
        margin: 0 auto;
        max-width: 1440px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .wrapper {
            display: flex;
            align-items: center;
            height: 100%;
            
            .headline-logo {
                font-size: 2em;
            }
            
            .navigation-item {
                height: 100%;
                
                .link {
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
            }
            
            .wrapper-icon {
                margin-right: 1em;
                
                &:last-of-type {
                    margin-right: 0;
                }
            }
        }
    }
`;
