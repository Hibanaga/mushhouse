import React, { FunctionComponent } from 'react';
import { Spinner } from 'react-bootstrap';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutButton: FunctionComponent<Props> = ({ children, isLoading, onClick, size, variant, style, type, className }) => {
    const element = isLoading ? <div className="row-loading"><Spinner size="sm" /></div> : <span className="description">{children}</span>;

    return (
        <StyledComponent className={classNames([
            'layout-button',
            `${size}-size`,
            `${style}-style`,
            `${variant}-variant`,
            `${type}-type`,
            className,
        ])}
        >
            <button
                type={type}
                className="button"
                onClick={onClick}
            >
                {element}
            </button>
        </StyledComponent>
    );
};

export default LayoutButton;
