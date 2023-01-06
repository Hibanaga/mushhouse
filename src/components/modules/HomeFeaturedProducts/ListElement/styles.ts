import styled from 'styled-components';

export default styled.div`
    position: relative;
    
    
    .wrapper-image {
        position: relative;
        width: 100%;
        overflow: hidden;

        &:hover {
            .wrapper-icons {
                transform: translatey(0);
            }
        }
        
        .image {
            width: 100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        
        .wrapper-icons {
            position: absolute;
            bottom: 0;
            width: 100%;
            transition: 250ms ease-in-out;
            
            transform: translateY(3.5em);
            
            display: flex;
            justify-content: center;
            margin-bottom: .5em;
            
            .wrapper-icon {
                background-color: #FFF;
                border: 1px solid #bababa;
                margin: .25em;
                border-radius: 50%;
                font-size: 1.25em;
                padding: .4em;
                cursor: pointer;
                
                display: flex;
                align-items: center;
                justify-content: center;
                
                transition: 300ms ease-in-out;

                &:hover {
                    transform: rotate(360deg);
                    background-color: #7fad39;
                    color: #FFF;
                }
            }
        }
    }
    
    .wrapper-content {
        margin-top: .65em;
        
        .name {
            text-align: center;
            font-size: 1.5em;
            font-weight: 300;
        }
        
        .price {
            display: block;
            text-align: center;
            margin-top: .65em;
            font-weight: 600;
            font-size: 1.15em;
        }
    }
`;
