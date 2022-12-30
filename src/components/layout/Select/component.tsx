import React, { Fragment, FunctionComponent, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutSelect: FunctionComponent<Props> = ({ value, options, onChange, size }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledComponent className={classNames([
            'layout-select',
            `${size}-size`,
        ])}
        >
            <div
                className="wrapper-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="header">{value.label}</span>
                <div className="wrapper-icon">
                    <IoIosArrowDown />
                </div>
            </div>
            <Transition
                as={Fragment}
                leave="transition-leave"
                leaveFrom="transition-leave-from"
                leaveTo="transition-leave-to"
                show={isOpen}
            >
                <ul className="list">
                    {options.map((option) =>  (
                        <li
                            className="item"
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
