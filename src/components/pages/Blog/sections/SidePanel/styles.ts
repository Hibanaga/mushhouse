import styled from 'styled-components';
import variables from 'styles/vars';

export default styled.aside`
    .menu-categories {
        margin-top: 3em;
        
        .menu {
            .list-item {
                margin-top: .65em;
                padding: .4em 0;
                .name {
                    font-size: 1.15em;
                    font-weight: 300;
                    color: #666;
                }
            }
        }
    }

    .menu-recents {
        margin-top: 3em;
        
        .inner-news {
            .inner {
                position: relative;
                display: flex;
                margin-top: .65em;

                .inner-image {
                    .image {
                        max-width: 7.5em;
                    }
                }

                .inner-content {
                    padding-left: .65em;

                    .title {
                        font-size: 1.15em;
                        font-weight: 600;
                    }
                    .created-at {
                        font-size: .925em;
                        font-weight: 300;
                        display: block;
                        margin-top: .35em;
                    }
                }
            }
        }
    }
`;
