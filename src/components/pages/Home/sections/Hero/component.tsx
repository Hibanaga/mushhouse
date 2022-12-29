import React, { FunctionComponent, useState } from 'react';

import { Option } from 'types/options';

import AccordionCollapse from 'components/layout/AccordionCollapse';

import StyledComponent from './styles';
import { Props } from './types';

const HeroSection: FunctionComponent<Props> = ({ }) => {
    const [selectedOption, setSelectedOption] = useState<Option>({ label:'hello', value:'hello' });

    const handleChangeOption = (nextValue: Option) => setSelectedOption(nextValue);

    return (
        <StyledComponent className="wrapper-page-container">
            <div className="wrapper wrapper-departments">
                <AccordionCollapse
                    value={selectedOption}
                    options={[{ label:'hello', value:'hello' }, { label:'world', value:'world' }, { label:'goodbye', value:'goodbye' }]}
                    onChange={handleChangeOption}
                />
            </div>
            <div className="wrapper wrapper-hero"></div>
        </StyledComponent>
    );
};

export default HeroSection;
