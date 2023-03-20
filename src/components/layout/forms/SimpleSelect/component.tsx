import React, { Fragment, FunctionComponent } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

import { Option } from 'types/options';

import SimpleError from 'components/layout/forms/SimpleError';
import SimpleLabel from 'components/layout/forms/SimpleLabel';
import { LabelVariants } from 'components/layout/forms/SimpleLabel/types';

import SimpleCheckbox from '../SimpleCheckbox';

import StyledComponent from './styles';
import { Props } from './types';

const SimpleSelect: FunctionComponent<Props> = ({ options, label, placeholder, onChange, customClassName, wrapperCss, error, value, type, multiline, subDescription, hasSelectAllButton, onChangeMulti }) => {
    const isMultiSelectValue = Array.isArray(value);
    const listOptions = hasSelectAllButton ? [{ label: 'Select all', value: 'all' }, ...options ] : options;
    const onClick = (option: Option<string> | Option<string>[]) => {
        !Array.isArray(option) && onChange && onChange(option);
        onChangeMulti && onChangeMulti(option);
    };

    return (
        <StyledComponent className="layout-forms-simple-select">
            <Menu
                as="div"
                className={classNames('wrapper-menu', wrapperCss || '')}
            >
                <div className="wrapper-inner">
                    {label && (
                        <SimpleLabel
                            variant={LabelVariants.Select}
                            label={label}
                        />
                    )}
                    <Menu.Button
                        className={classNames(
                            'action-button',
                            customClassName || '',
                            error ? 'error-action-button' : '',
                            !isMultiSelectValue && value?.value ? 'value' : 'no-value',
                            isMultiSelectValue && value.length ? 'multi-value' : 'no-multi-value',
                            `type-${type}`
                        )}
                    >
                        {!isMultiSelectValue && value?.label || placeholder}
                        <div className="inner-select">
                            <span className="total-count">{isMultiSelectValue && !!value.length && subDescription}</span>
                            <ChevronDownIcon
                                className="toggle-icon"
                                aria-hidden="true"
                            />
                        </div>
                    </Menu.Button>

                    {error && (
                        <SimpleError
                            customClassName={customClassName}
                            error={error}
                        />
                    )}
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    {multiline ? (
                        <Menu.Items className="wrapper-box-options wrapper-box-options-multiselect">
                            <div className="wrapper-options">
                                {listOptions.map(item => (
                                    <Menu.Item key={item.label}>
                                        {() => (
                                            <>
                                                <SimpleCheckbox
                                                    name={item.value}
                                                    label={item.label}
                                                    checked={isMultiSelectValue && value.some(({ value }) => item.value === value) || (value as Option<string>[]).length === options.length}
                                                    className={isMultiSelectValue && value.some(({ value }) => item.value === value) ? 'select-checkbox-option' : ''}
                                                    onChange={() => {
                                                        if ( item?.value === 'all') {
                                                            (value as Option<string>[]).length === options.length ? onClick([]) :onClick(options);
                                                        } else {
                                                            onClick(item);
                                                        }
                                                    }}
                                                />
                                            </>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    ) : (
                        <Menu.Items className="wrapper-box-options">
                            <div className="wrapper-options">
                                {options.map(item => (
                                    <Menu.Item key={item.label}>
                                        {() => (
                                            <button
                                                type="button"
                                                onClick={() => onClick(item)}
                                                className={classNames(
                                                    'option',
                                                    !isMultiSelectValue && item.value === value?.value ? 'select-option' : '',
                                                )}
                                            >
                                                {item.label}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    )}
                </Transition>
            </Menu>
        </StyledComponent>
    );
};

export default SimpleSelect;
