import styled from '@emotion/styled';

export default styled.div`
    .label {
        width: 100%;
        color: #56646C;
        display: block;
        margin-top: 1em;
        margin-bottom: .25em;
        font-size: .875em;
        line-height: 1.25em;
    }
    
    &.checkbox-label-style {
        padding-left: .75em;
        cursor: pointer;

        .label {
            line-height: 1.5em;
            color: #374151;
            font-weight: 500;
            font-size: 1em;
            margin: 0;
            cursor: pointer;
        }
    }
`;
