import React, { FunctionComponent, useState } from 'react';

import { Option } from 'types/options';

import SimpleSelect from 'components/layout/forms/SimpleSelect';
import List from 'components/modules/List';

import StyledComponent from './styles';
import { Props } from './types';


const HomeSectionDetails: FunctionComponent<Props> = ({ categories }) => {
    const [filters, setFilters] = useState({ category: '' });

    return (
        <StyledComponent
            id="id_products-list"
            className="home-section-details"
        >
            <div className="inner-filter">
                <h2 className="headline">Наша продукция</h2>
                <SimpleSelect
                    hasClearButton
                    className="multi-select-category"
                    placeholder="Выберите категорию"
                    options={categories.map((element) => ({ label: element.name ?? '', value: element.slug ?? '' }))}
                    onChange={(newValue => {
                        setFilters({ ...filters, category: (newValue as Option<string>)?.value  });
                    })}
                />
            </div>
            <List filters={filters} />
        </StyledComponent>
    );
};

export default HomeSectionDetails;
