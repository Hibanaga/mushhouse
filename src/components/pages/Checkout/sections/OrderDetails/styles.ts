import styled from 'styled-components';


export default styled.aside`
    position: relative;

    margin-top: 1.25em;
    background-color: #f5f5f5;
    padding: 3em 2em;
    max-height: 30em;
    
    .th {
        font-size: 1.25em;
        font-weight: 900;
    }
    
    .headline-order {
        position: relative;
        margin: 0 0 .15em 0;
        font-size: 2em;
        color: #1c1c1c;
        font-weight: 700;
        
        .bottom-underline {
            bottom: -25%;
            height: 0.01em;
            width: 100%;
            background-color: #e1e1e1;
            position: absolute;
        }
    }
    
    .inner-th {
        padding: 1em 0;
    }
    
    .inner-products {
        width: 100%;
        margin-top: 2.5em;
        
        .inner-th {
            display: flex;
            justify-content: space-between;
        }
        
        .row-products {
            margin-top: .75em;
            margin-bottom: 1.5em;
            
            .inner-product {
                color: #6f6f6f;
                font-size: 1.1em;
                display: flex;
                justify-content: space-between;
                
                .option-label {
                    font-weight: 300;
                }
                .option-value {
                    font-weight: 900;
                }
            }
        }
    }

    .inner-price {
        display: flex;
        justify-content: space-between;
        padding: 1em 0;
        
        &.inner-price-subtotal {
            border-top: 0.01em solid #e1e1e1;
            border-bottom: 0.01em solid #e1e1e1;
            
            .price {
                padding-top: .05em;
                font-weight: 600;
                font-size: 1.2em;
            }
        }
        
        &.inner-price-total {
            border-bottom: 0.01em solid #e1e1e1;
            
            .price {
                padding-top: .05em;
                font-weight: 600;
                font-size: 1.2em;
                color: #dd2222;
            }
        }
    }
    
    .inner-action {
        margin-top: 3em;
    }
`;
