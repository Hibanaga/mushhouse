import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import SimpleError from 'components/layout/forms/SimpleError';
import SimpleLabel from 'components/layout/forms/SimpleLabel';
import { LabelVariants } from 'components/layout/forms/SimpleLabel/types';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutFormSimpleCheckbox: FunctionComponent<Props> = ({ name, onChange, error, checked, label, className }) => {
    return (
        <StyledComponent className={classNames(['layout-form-simple-checkbox', className])}>
            <div className="wrapper-checkbox">
                <input
                    id={name}
                    name={name}
                    type="checkbox"
                    className="checkbox"
                    onChange={onChange}
                    checked={checked}
                />
                <SimpleLabel
                    variant={LabelVariants.Checkbox}
                    name={name}
                    label={label}
                />
            </div>
            {error && <SimpleError error={error} />}
        </StyledComponent>
    );
};

export default LayoutFormSimpleCheckbox;
