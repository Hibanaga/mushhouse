import styled from 'styled-components';
import vars from 'styles/vars';

export default styled.div`
    position: relative;
    margin-top: 3em;
    
    .navigation-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25em;
        
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
    
    .row-elements {
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.75% 2em;
    }

    @media all and (max-width: ${vars.desktopXS}) {
        .row-elements {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media all and (max-width: ${vars.mobileL}) {
        .row-elements {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media all and (max-width: ${vars.mobileM}) {
        .row-elements {
            gap: .3% 2em;
            grid-template-columns: 1fr;
        }
    }
`;
