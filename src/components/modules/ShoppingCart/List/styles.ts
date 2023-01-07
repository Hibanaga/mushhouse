import styled from 'styled-components';


export default styled.div`
    position: relative;
    
    .inner-table-header {
        display: grid;
        grid-template-columns: calc(5 / 12 * 100%) calc(2 / 12 * 100%) calc(2 / 12 * 100%) calc(2 / 12 * 100%) calc(1 / 12 * 100%);
        border-bottom: 1px solid #ddd;
        padding-bottom: 2em;
        
        .th {
            font-weight: 900;
            display: block;
            font-size: 1.35em;
            color: #1c1c1c;
            
            &:not(:first-of-type) {
                display: flex;
                justify-content: flex-end;
                margin-right: .35em;
            }
        }
    }
`;
