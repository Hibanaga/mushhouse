import { ImageProps } from 'next/image';

import Component from './component';

export interface Props extends ImageProps {
    className?: string;
    imageUrl?: string;
    altText?: string;
}


Component.defaultProps = {
    layout: 'fill',
    objectFit: 'cover',
    loading: 'lazy',
};
export default Component;
