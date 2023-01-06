import styled from 'styled-components';

export default styled.div`
    position: relative;
    width: 100%;
    
    .transition-leave {
        transition: 100ms ease-in;
    }
    
    .transition-leave-from {
        opacity: 1;
    }
    
    .transition-leave-to {
        opacity: 0;
    }

    .wrapper-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        padding: 0 1em;
        width: 100%;
        
        .header {
            font-weight: 500;
        }
    }

    .list {
        position: absolute;
        width: 100%;
        left: 0;
        top: 105%;
        background-color: #FFF;
        border: 1px solid #ebebeb;

        .item {
            
            .label {
                display: block;
                font-weight: 300;
                padding-left: .35em;
            }
            
            &:hover {
                background-color: rgba(224, 224, 224, 0.2);
            }
            
            &.active {
                color: #7fad39;
            }
        }
    }
    
    // SIZES //
    &.small-size {
        .wrapper-header {
            min-height: 2.35em;
            
            .header {
                font-size: .95em;
            }
        }
    }
    
    &.medium-size {
        .wrapper-header {
            min-height: 3.25em;
            
            .header {
                font-size: 1.2em;
            }
        }

        .list {
            padding: .5em 0;

            .item {
                cursor: pointer;
                padding: .5em .75em;

                .label {
                    font-size: 1.25em;
                }
            }
        }
    }
    
    &.large-size {
        .wrapper-header {
            min-height: 3.5em;
            
            .header {
                font-size: 1.5em;
            }
        }
        
        .list {
           padding: .35em 0;
           
            .item {
                cursor: pointer;
                padding: .45em .65em;
                
                .label {
                    font-size: 1.5em;
                }
            }
        }
    }
`;
