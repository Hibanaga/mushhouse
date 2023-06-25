import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    width: 100%;
    position: relative;
    
    
    .data-content {
        display: block;
        font-size: 1.1em;
        text-align: center;
        max-width: 80%;
        margin: 0 auto;
        color: #271C15;
        
        &.data-contact {
            margin-bottom: 1em;
        }

        &.data-bold {
            font-weight: 600;
        }
    }
    
    .inner-content {
        margin: 2em 0;
        
        &:first-of-type {
            margin-top: 4em;
        }
        
        .inner-order {
            margin-top: 2em;
        }
        
        .card-data {
            margin-top: 2em;
        }
    }

    .inner-szamanita {
        margin-bottom: 5em;
    }
    
    .inner-details {
        display: flex;
        justify-content: space-between;
        max-width: 55%;
        margin: 0 auto;
        
        .column {
            .section-headline {
                font-size: 1.275em;
                margin-bottom: .5em;
            }
            
            .list {
                .list-item {
                    display: block;
                    font-size: .925em;
                    margin-bottom: .375em;
                }
            }
        }
    }
    
    .table {
        max-width: 80%;
        margin: 0 auto;
        margin-bottom: 2em;
        
        .tr {
            display: flex;
            border-bottom: none;
            
            .th {
                padding: .5em 1em;
                border: .15em solid #000000;

                display: flex;
                justify-content: center;
                align-items: center;
                
                &:not(:last-of-type) {
                    border-right: none;
                }
                
                &.th-number {
                    width: 5%;
                    padding: .5em;
                }
                &.th-name {
                    width: 45%;
                    justify-content: flex-start;
                }
                &.th-quantity {
                    width: 15%;
                }
                &.th-price {
                    width: 15%;
                }
                &.th-total {
                    width: 20%;
                }
            }
        }
        
        .tb {
            .tr {
                .td {
                    padding: .5em 1em;
                    border: .15em solid #000000;
                    border-top: none;
                    
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:not(:last-of-type) {
                        border-right: none;
                    }
                    
                    &.td-number {
                        width: 5%;
                        padding: .5em;
                    }
                    &.td-name {
                        width: 45%;
                        justify-content: flex-start;
                    }
                    &.td-quantity {
                        width: 15%;
                    }
                    &.td-price {
                        width: 15%;
                    }
                    &.td-total {
                        width: 20%;
                    }
                }
            }
        }
    }

    @media all and (max-width: ${variables.mobileL}) {
        .inner-details {
            max-width: 80%;
        }
        
        .table {
            max-width: 90%;
        }

        .data-content {
            max-width: 90%;
        }
    }
    
    @media all and (max-width: ${variables.mobileM}) {
        .inner-details {
            max-width: 90%;
            
            .column {
                .section-headline {
                    font-size: 1em;
                }
                
                .list {
                    .list-item {
                        font-size: .825em;
                    }
                }
            }
        }
        
        .table {
            .tr {
                font-size: .725em;
            }
            
            .tb {
                .tr {
                    font-size: .725em;
                }
            }
        }

        .data-content {
            font-size: .825em;
        }
    }
`;

