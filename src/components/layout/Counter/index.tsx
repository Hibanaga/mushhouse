import Component from './component';

export enum CounterSizes {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export interface Props {
    size?: CounterSizes;
    value?: number;
    onChange: (value: number) => void;
}


Component.defaultProps = {
    size: CounterSizes.medium,
};

export default Component;
