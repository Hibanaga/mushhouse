import styled from '@emotion/styled';

export default styled.div`
    .container {
        display: flex;
        justify-content: center;
        margin: 1em 0;

        .pagination-center {
            width: 3.5em;
            height: 3.5em;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .border-controls {
            border: 1px solid #F3F4F6;
        }

        .page {
            margin: 0 .5em;

            &.active {
                color: #4FC0B3;
            }
        }

        .container {
            display: flex;
        }

        .next {
            .next-link {
            }
        }

        .prev {
            .prev-link {
            }
        }

        .break {
            display: flex;
            align-items: center;
        }
    }
`;
