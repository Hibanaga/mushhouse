import React, { FunctionComponent, useState } from 'react';

import { Option } from 'types/options';

import AccordionCollapse from 'components/layout/AccordionCollapse';
import SearchBar from 'components/modules/SearchBar';

import StyledComponent from './styles';
import { Props } from './types';

const HeroSection: FunctionComponent<Props> = ({ }) => {
    const [selectedOption, setSelectedOption] = useState<Option>({ label:'hello', value:'hello' });
    const [selectedVariant, setSelectedVariant] = useState<Option>({ label:'hello', value:'hello' });

    const handleChangeOption = (nextValue: Option) => setSelectedOption(nextValue);
    const handleChangeVariant = (nextValue: Option) => setSelectedVariant(nextValue);

    return (
        <StyledComponent className="wrapper-page-container">
            <div className="wrapper wrapper-departments">
                <AccordionCollapse
                    value={selectedOption}
                    options={[{ label:'hello', value:'hello' }, { label:'world', value:'world' }, { label:'goodbye', value:'goodbye' }]}
                    onChange={handleChangeOption}
                />
            </div>
            <div className="wrapper wrapper-hero">
                <SearchBar
                    selectedOption={selectedVariant}
                    onChangeVariant={handleChangeVariant}
                />
            </div>
        </StyledComponent>
    );
};

export default HeroSection;
