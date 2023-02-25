import styled from 'styled-components';
import variables from 'styles/vars';


export default styled.section`
    width: 95%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 1160px;
    color: black;
    flex: 1 1 auto;
    
    @media all and (max-width: ${variables.desktopS}) {
        max-width: 1024px;
    }
`;
