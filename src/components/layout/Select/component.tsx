import React, { Fragment, FunctionComponent, useState } from 'react';
import { Transition } from '@headlessui/react';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutSelect: FunctionComponent<Props> = ({ value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledComponent className="layout-select">
            <div
                className="wrapper-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="header">{value.label}</span>
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
                        >
                            <span>{option.label}</span>
                        </li>
                    ))}

                </ul>
            </Transition>
        </StyledComponent>
    );
};

export default LayoutSelect;
