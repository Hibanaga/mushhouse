import React, { ChangeEvent, FunctionComponent } from 'react';
import Image from 'next/image';
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
                <div className="inner-image">
                    <Image
                        fill
                        objectFit="contain"
                        src="/images/remove-icon.svg"
                        alt="minus icon"
                    />
                </div>
            </button>
            <input
                className="input"
                value={value}
                min={1}
                onChange={handleChange}
            />
            <button
                className="button"
                onClick={handlePlusAction}
            >
                <Image
                    src="/images/add-icon.svg"
                    width={26}
                    height={26}
                    alt="add icon"
                />
            </button>
        </StyledComponent>
    );
};

export default LayoutCounter;
