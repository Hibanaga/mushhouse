import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;

    .layout-modal {
        .modal-container {
            max-width: 40em;
        }
    }

    .inner-body {
        padding: 1em;
        
        .subheadline {
            font-size: 1.375em;
            padding-bottom: 1.1em;
            border-bottom: 1px solid rgba(0,0,0,.2);
            margin-bottom: 1.375em;
            font-weight: 600;
            color: #000000;
        }
    }
    
    .inner-shopping-cart {
        margin-bottom: 2em;
    }
    
    .inner-total-price {
      padding: 2em 0;
      border-top: .01em solid rgba(0,0,0,.2);
        
        display: flex;
        justify-content: flex-end;
        font-weight: 600;
        
        .data-value {
            padding-left: .5em;
        }
    }
    
    .form {
        width: 100%;
        max-width: 100%;
        
        .inner-fullname {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1em;
        }
        
        .input-phone {
            margin-top: 1em;
            
            .layout-simple-label {
                margin-bottom: 1em;
                

                .label {
                    font-weight: 700;
                    color: #000000;
                }
                
                &::after {
                    font-size: .725em;
                    font-weight: 300;
                    content: "Укажите: индекс, город, улицу, док и квартиру.";
                }
            }
        }
        
        .input-promocode {
            margin-top: 1em;
            
            .layout-simple-label {
                margin-bottom: 1em;
                
                .label {
                    font-weight: 700;
                    color: #000000;
                }

                &::after {
                    font-size: .725em;
                    font-weight: 300;
                    content: "Введите промокод";
                }
            }
        }
        
        .inner-totalsum {
            .inner-total-form {
                display: flex;
                justify-content: flex-end;
                margin-top: 2em;
                font-size: .725em;
                padding-bottom: .5em;

                &:last-of-type {
                    font-weight: 600;
                    margin-top: 0;
                    font-size: .925em;
                    margin-bottom: 2em;
                }

                .data-value {
                    padding-left: .5em;
                }
            }
        }
        
        .button-submit-form {
            width: 100%;
            border-radius: 15em;
            overflow: hidden;
            
            .button {
                width: 100%;
                padding: 1.35em 0;
                
                .button-content {
                    font-size: 1em;
                }
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
    }
`;
