import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutModal: FunctionComponent<Props> = ({ children, hasCancelButton, onClose }) => {
    return (
        <StyledComponent className="layout-modal">
            <div
                className="modal-backdrop"
                onClick={onClose}
            />
            <div className="modal-container">
                <div className="modal-body">
                    {hasCancelButton && (
                        <Image
                            onClick={() => onClose && onClose()}
                            src="/images/icon-x.svg"
                            className="image-button"
                            width={36}
                            height={36}
                            alt="alt layout toast image"
                        />
                    )}
                    {children}
                </div>
            </div>
        </StyledComponent>
    );
};

export default LayoutModal;
