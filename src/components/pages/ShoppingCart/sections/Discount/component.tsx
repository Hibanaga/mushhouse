import React, { FunctionComponent, useState } from 'react';

import Button from 'components/layout/Button';
import { ButtonStyles } from 'components/layout/Button/types';
import Input from 'components/layout/Input';

import StyledComponent from './styles';
import { Props } from './types';

const SectionTotalPrice: FunctionComponent<Props> = () => {
    const [input, setInput] = useState('');

    return (
        <StyledComponent className="section-discount">
            <h2 className="headline">Discount Codes</h2>

            <div className="inner-actions">
                <Input
                    value={input}
                    className="input-discount"
                    onChange={(event) => setInput(event.target.value)}
                />

                <Button
                    className="button-apply"
                    style={ButtonStyles.Secondary}
                >
                    APPLY COUPON
                </Button>
            </div>
        </StyledComponent>
    );
};

export default SectionTotalPrice;
