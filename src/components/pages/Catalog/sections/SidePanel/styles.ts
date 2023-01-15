import styled from 'styled-components';


export default styled.aside`
    position: relative;
    
    .inner-departments {
        .list-departments {
            .list-item {
                cursor: pointer;
                .label {
                    display: block;
                    color: #1c1c1c;
                    font-size: 1em;
                    font-weight: 300;
                    padding: .45em 0;
                }
            }
        }
    }
    
    .inner-sizes {
        margin-top: 4em;
        
        .row-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            
            .button-select-size {
                .button {
                    padding: .75em 1.25em;
                    
                    .description {
                        font-size: 0.95em; 
                        font-weight: 300;
                        color: #6f6f6f;
                    }
                }
            }
        }
    }
    
    
    .inner-latest {
        margin-top: 4em;
        
        .embla {
            overflow: hidden;
            margin-top: 4em;

            .embla-container {
                display: flex;
                flex-direction: row;
                height: auto;
                margin-left: -1em;

                .embla-slide {
                    flex: 0 0 100%;
                    min-width: 0;
                    padding-left: 1em;
                    
                    .inner-slide {
                        display: flex;
                        
                        .image {
                            max-width: 5em;
                        }
                    }
                }
            }
        }
    }
`;
