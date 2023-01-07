import React, { Fragment, FunctionComponent, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutSelect: FunctionComponent<Props> = ({ selectedOption, options, onChange, size }) => {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <StyledComponent className={classNames([
            'layout-select',
            `${size}-size`,
        ])}
        >
            <div
                className="wrapper-header"
                onClick={() => setIsExpand(!isExpand)}
            >
                <span className="header">{selectedOption.label}</span>
                <div className="wrapper-icon">
                    {isExpand ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>
            <Transition
                as={Fragment}
                leave="transition-leave"
                leaveFrom="transition-leave-from"
                leaveTo="transition-leave-to"
                show={isExpand}
            >
                <ul className="list">
                    {options.map((option) =>  (
                        <li
                            className={classNames(['item', selectedOption.value === option.value && 'active'])}
                            key={option.value}
                            onClick={() => onChange(option)}
                        >
                            <span className="label">{option.label}</span>
                        </li>
                    ))}

                </ul>
            </Transition>
        </StyledComponent>
    );
};

export default LayoutSelect;
