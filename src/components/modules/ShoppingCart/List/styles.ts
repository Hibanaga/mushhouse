import styled from 'styled-components';
import variables from 'styles/vars';

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
    
    @media all and (max-width: ${variables.tabletL}) {
        .inner-table-header {
            padding-bottom: 1.5em;

            .th {
                font-size: 1.1em;
                margin-right: 0;
            }
        }
    }
    
    @media all and (max-width: ${variables.tabletS}) {
        .inner-table-header {
            .th {
                &:not(:first-of-type) {
                    margin-right: 0;
                }
            }
        }
    }
`;
