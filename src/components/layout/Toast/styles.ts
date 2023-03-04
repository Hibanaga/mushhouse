import styled from '@emotion/styled';

import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;
    height: 2.85em;
    
    display: flex;
    align-items: center;
    
    &.success-style {
        .inner-icons {
            background: #26AE65;
            box-shadow: 0 4px 4px rgba(38, 174, 101, 0.15);
        }
    }
    
    &.error-style {
        .inner-icons {
            background-color: #E95966;
            box-shadow: 0 4px 4px rgba(233, 89, 102, 0.15);
        }
    }
    
    .inner-icons {
        position: absolute;
        left: -5%;
        
        
        height: 4.75em;
        width: 3.5em;
        border-radius: .275em;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        
        
        .image {
            width: 2em;
        }
    }
    
    .inner-content {
        margin-left: 3.25em;
        margin-right: 2em;
        
        .headline {
            color: #333333;
            font-weight: 400;
            letter-spacing: 0.03em;
            font-size: .875em;
            margin-top: .325em;
            line-height: 145%;
        }
    }
    
    
    .inner-actions {
        position: absolute;
        right: 0;
        
        .image-button {
            cursor: pointer;
        }
    }
`;
