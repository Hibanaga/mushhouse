import React, { FunctionComponent } from 'react';

import { Option } from 'types/options';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    const departments: Option[] = [
        { label: 'Fresh Meat', value: 'fresh-meat' },
        { label: 'Vegetables', value: 'vegetables' },
        { label: 'Fruit & Nut Gifts', value: 'fruit-and-nut' },
        { label: 'Fresh Berries', value: 'fresh-berries' },
        { label: 'Ocean Foods', value: 'ocean-foods' },
    ];

    return (
        <StyledComponent className="page-catalog-sections-side-panel">
            <div className="inner">
                <h2 className="headline-option">Department</h2>

                <ul className="list-departments">
                    {departments.map(({ label, value }) => (
                        <li
                            key={value}
                            className="list-item"
                        >
                            <span className="label">{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledComponent>
    );
};

export default HomePage;
