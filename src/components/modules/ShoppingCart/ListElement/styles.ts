import styled from 'styled-components';


export default styled.div`
    position: relative;

    display: grid;
    grid-template-columns: calc(5 / 12 * 100%) calc(2 / 12 * 100%) calc(2 / 12 * 100%) calc(2 / 12 * 100%) calc(1 / 12 * 100%);
    border-bottom: 1px solid #ddd;
    padding: 1.5em 0;
    
    .inner {
        display: flex;
        align-items: center;
        
        &:not(:first-of-type) {
            justify-content: flex-end;
            margin-right: 1em;
        }
        
        .inner-image {
            max-width: 8em;
            
            .image {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }
           
        }
        
        .name {
            font-size: 1.15em;
            color: #1c1c1c;
            font-weight: 300;
            display: block;
            margin-left: 1.5em;
        }
        
        .price {
            font-size: 1.15em;
            font-weight: 900;
            color: #1c1c1c;
        }
        
        .icon {
            font-size: 1.45em;
            cursor: pointer;
            transition: 150ms;
            
            &:hover {
                color: #dd2222;
            }
        }
    }
`;
