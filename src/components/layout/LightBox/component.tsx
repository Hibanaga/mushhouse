import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const LightBox: FunctionComponent<Props> = ({ imageSrc, onClose }) => {
    return (
        <StyledComponent className="layout-light-box">
            <div className="button-wrapper">
                <button
                    className="button-close fade-in"
                    onClick={() => onClose(false)}
                >
                    <div className="button-close-icon" />
                </button>
            </div>
            <div className="image-container">
                <div
                    className="image"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                />
            </div>
        </StyledComponent>
    );
};

export default LightBox;
