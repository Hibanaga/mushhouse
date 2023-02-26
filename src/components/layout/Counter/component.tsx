import React, { ChangeEvent, FunctionComponent } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutCounter: FunctionComponent<Props> = ({ size, value, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(parseInt(event.target.value))) return;
        onChange(parseInt(event.target.value));
    };

    const handlePlusAction = () => value && onChange(value + 1);
    const handleMinusAction = () => value && value > 1 && onChange(value - 1);

    return (
        <StyledComponent className={classNames(['layout-counter', `${size}-size`])}>
            <button
                className="button"
                onClick={handleMinusAction}
            >
                <HiMinus className="icon" />
            </button>
            <input
                // type="number"/**/
                className="input"
                value={value}
                onChange={handleChange}
            />
            <button
                className="button"
                onClick={handlePlusAction}
            >
                <HiPlus className="icon" />
            </button>
        </StyledComponent>
    );
};

export default LayoutCounter;
