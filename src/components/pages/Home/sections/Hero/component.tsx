import React, { FunctionComponent, useState } from 'react';

import { Option } from 'types/options';

import AccordionCollapse from 'components/layout/AccordionCollapse';
import LayoutInput from 'components/layout/Input';
import LayoutSelect from 'components/layout/Select';

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
                {/*<LayoutSelect*/}
                {/*    value={selectedVariant}*/}
                {/*    options={[{ label:'hello', value:'hello' }, { label:'world', value:'world' }, { label:'goodbye', value:'goodbye' }]}*/}
                {/*    onChange={handleChangeVariant}*/}
                {/*/>*/}
                <LayoutInput />
            </div>
        </StyledComponent>
    );
};

export default HeroSection;
