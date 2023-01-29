import React, { FunctionComponent, useState } from 'react';

import { Option } from 'types/options';

import AccordionCollapse from 'components/layout/AccordionCollapse';
import Button from 'components/layout/Button';
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
                    defaultOpen={true}
                    options={[{ label:'hello', value:'hello' }, { label:'world', value:'world' }, { label:'goodbye', value:'goodbye' }]}
                    onChange={handleChangeOption}
                />
            </div>
            <div className="wrapper wrapper-hero">
                <SearchBar
                    selectedOption={selectedVariant}
                    onChangeVariant={handleChangeVariant}
                />

                <div className="description-hero">
                    <div className="wrapper-information">
                        <span className="cover-description">
                            FRUIT FRESH
                        </span>
                        <h2
                            className="headline"
                            dangerouslySetInnerHTML={{ __html: 'Vegetable<br/> 100% Organic' }}
                        />
                        <span className="sub-cover-description">
                            Free Pickup and Delivery Available
                        </span>

                        <div className="wrapper-button">
                            <Button>
                               SHOP NOW
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

export default HeroSection;
