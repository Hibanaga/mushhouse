import React, { FunctionComponent, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { CgMenu } from 'react-icons/cg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const AccordionCollapse:FunctionComponent<Props> = ({ value, options, onChange, size, style }) => {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <StyledComponent className={classNames([
            'layout-accordion-collapse',
            `${size}-size`,
            `${style}-style`,
        ])}
        >
            <div
                className="hero"
                onClick={() => setIsExpand(!isExpand)}
            >
                <div className="wrapper-icon">
                    <CgMenu />
                </div>
                <span className="headline">
                    all departments
                </span>
                <div className="wrapper-icon">
                    {isExpand ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>

            <Collapse in={isExpand}>
                <ul className="collapse-body">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => onChange(option)}
                            className={classNames(['collapse-item', option.value === value.value && 'selected'])}
                        >
                            <span className="collapse-description">{option.label}</span>
                        </li>
                    ))}
                </ul>
            </Collapse>
        </StyledComponent>
    );
};

export default AccordionCollapse;
