import styled from 'styled-components';

export default styled.div`
    position: relative;
    
    .wrapper-image {
        position: relative;
        width: 100%;
        overflow: hidden;
        
        .image {
            width: 100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    
    .row-activity {
        display: flex;
        align-items: center;
        margin: .5em 0;
        
        .wrapper-activity {
            display: flex;
            align-items: center;
            color: #b2b2b2;
            
            &:last-of-type {
                margin-left: 2.5em;
            }
            
            &:first-of-type {
                .description {
                    padding-top: .1em;
                }
            }
            
            .icon {
            }
            
            .description {
                display: block;
                font-size: 1em;
                margin-left: .35em;
                font-weight: 300;
               
            }
        }
    }
    
    .headline {
        color: #1c1c1c;
        font-size: 1.25em;
        margin: 1em 0;
        font-weight: 700;
    }
    
    .description {
        color: #6f6f6f;
        font-weight: 300;
        font-size: 1.15em;
        line-height: 150%;
    }
`;
