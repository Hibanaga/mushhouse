import styled from 'styled-components';
import variables from 'styles/vars';


export default styled.section`
    position: relative;
    
    
    .name {
        color: #252525;
        font-weight: 900;
        margin-bottom: .625em;
    }
    
    .inner-rating {
        margin-bottom: 1em;
        
        .inner-stars {
        }
        
        .count-reviews {
        }
    }
    
    .price {
        display: block;
        font-size: 1.75em;
        color: #dd2222;
        font-weight: 400;
        margin-bottom: .875em;
    }
    
    .description {
        color: #6f6f6f;
        font-weight: 300;
        display: block;
        line-height: 1.5em;
    }
    
    .inner-actions {
        margin-top: 2em;
        display: flex;
        gap: .5em;
        
        .add-to-cart-action {
            .button {
                padding: .95em 1.5em;
                
                .description {
                    font-weight: 900;
                    letter-spacing: .025em;
                    text-transform: uppercase;
                    font-size: .975em;
                    padding-top: .15em;
                }
            }
        }
        
        .like-action {
            .button {
                height: 4em;
                width: 4em;
                background-color: #f5f5f5;
                
                .description {
                    .icon {
                        font-size: 1em;
                        color: #6f6f6f;
                    }
                }
            } 
        }
    }
    
    .inner-details {
        margin-top: 4em;
        padding-top: 4em;
        border-top: 1px solid #ebebeb;
        
        .inner-detail {
            display: flex;
            justify-content: space-between;
            color: #1c1c1c;
            margin-bottom: 1.25em;
            max-width: 15em;
            
            .option-description {
                display: block;
                font-weight: 600;
                font-size: 1.15em;
            }
            
            .value {
                display: block;
                font-weight: 300;
                font-size: 1.15em;
                width: 4em;
            }
        }
    }
`;
