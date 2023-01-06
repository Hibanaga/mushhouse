import bannerHero from 'static/images/global/hero-home.jpg';
import styled from 'styled-components';


export default styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2em;
    margin-top: 2em;
    
    .wrapper {
        &.wrapper-departments {
            width: 25%;
        }
        
        &.wrapper-hero {
            max-width: 75%;
            width: 100%;
            
            .description-hero {
                margin-top: 2em;
                width: 100%;
                background-image: url(${bannerHero});
                background-position: center center;
                background-size: cover;
                height: 25em;
                
                .wrapper-information {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 7.5%;
                    
                    .cover-description {
                        display: block;
                        letter-spacing: .4em;
                        font-weight: 600;
                        font-size: .875em;
                        color: #7fad39;
                        padding-bottom: 1em;
                    }
                    
                    .headline {
                        font-size: 3.5em;
                        font-weight: 600;
                    }
                    
                    .sub-cover-description {
                        display: block;
                        padding-top: .375em;
                        font-size: .875em;
                        font-weight: 300;
                        color: #6f6f6f;
                    }
                    
                    .wrapper-button {
                        margin-top: 2.5em;
                        max-width: 10em;
                    }
                }
            }
        }
    }
`;
