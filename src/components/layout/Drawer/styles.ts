import styled from 'styled-components';
import variables from 'styles/vars';


export default styled.header`
    .header {
        min-height: 4.5em;
        border-bottom: 1px solid #ddd;
        //-webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        //-moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        //box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 2em;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .overlayOpen {
        opacity: 1;
        z-index: 0;
        visibility: visible;
    }

    .overlayHidden {
        opacity: 0;
        z-index: -1;
        visibility: hidden;
        transition: 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    .drawer {
        top: 0;
        flex: 1 0 auto;
        height: 100%;
        display: flex;
        outline: 0;
        z-index: 1200;
        position: fixed;
        overflow-y: auto;
        flex-direction: column;

        background-color: #ffffff;
        width: 20em;
        flex-shrink: 0;

        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }

    .hidden {
        visibility: hidden;
        width: 100%;
        transform: translateX(100%);
        flex-shrink: 0;
        transition: 325ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }
    
    .animate {
        visibility: visible;
        transform: none;
        box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
        0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    }

    .drawerOpen {
    }

    .left {
        left: 0;
        right: auto;
    }

    .right {
        right: 0;
        left: auto;
    }

    @media all and (max-width: ${variables.mobileM}) {
        .drawer {
            width: 100%;
        }
    }
`;
