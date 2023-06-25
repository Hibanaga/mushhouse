import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Props, ToastVariants } from './index';
import StyledComponent from './styles';

const LayoutToast: FunctionComponent<Props> = ({ variant, message, closeToast }) => {
    const variantImage = (variant: ToastVariants) => {
        switch(variant) {
            case ToastVariants.Success:
                return '/images/toast-success-icon.svg';
            case ToastVariants.Error:
                return '/images/toast-notification-icon.svg';
            default:
                return '/images/toast-success-icon.svg';
        }
    };

    return (
        <StyledComponent className={classNames([
            'layout-toast',
            `${variant}-style`,
        ])}
        >
            <div className="inner-icons">
                <img
                    src={variantImage(variant)}
                    alt="alt toast icon"
                    className="image"
                />
            </div>

            <div className="inner-content">
                <h2 className="headline">{message}</h2>
            </div>

            <div className="inner-actions">
                <Image
                    onClick={closeToast}
                    src="/images/close-icon.svg"
                    className="image-button"
                    width={28}
                    height={28}
                    alt="alt layout toast image"
                />
            </div>

        </StyledComponent>
    );
};

export default LayoutToast;
