import styled from '@emotion/styled';

export default styled.div`
    position: relative;
    width: 100%;
    padding: 1em auto;

    > ul {
        display: flex;
        justify-content: center;
        align-items: center;


        > li {
            margin: 0 1em;
            list-style: none;
            font-size: 1.3em;
            cursor: pointer;

            a {
                color: #121212;
                text-decoration: none;
            }

            &.selected {
                a {
                    font-weight: 600;
                    color: #D9BBA0;
                }
            }

            &.previous, &.next {
                margin: 0 .65em;
            }
            
            .inner-image {
                position: relative;
                width: 1.5em;
                height: 1.5em;
                
                &:hover {
                    .image {
                        filter: invert(85%) sepia(14%) saturate(624%) hue-rotate(342deg) brightness(92%) contrast(83%);
                    }
                }

                .image {
                    transition: 150ms;
                }
                
                &.prev-icon {
                    .image {
                        transform: rotate(-180deg);
                    }
                }
                
                &.next-icon {
                   .image {
                       transform: rotate(180deg);
                   } 
                }
            }

            .next-icon, .prev-icon {
                color: #D9BBA0;
            }

            .next-icon {
                transform: rotate(180deg);
            }
        }
    }
`;
