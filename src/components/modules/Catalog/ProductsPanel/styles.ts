import styled from 'styled-components';


export default styled.section`
    position: relative;


    .container-products {
        margin-top: 6em;
        padding-top: 6em;
        border-top: 0.01em solid #ebebeb;
        
        .row-elements {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 1em;
            row-gap: 3em;

            margin-bottom: 6em;
        }
    }
    
`;
