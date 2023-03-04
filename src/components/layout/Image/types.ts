import { ImageProps } from 'next/image';

export interface Props extends ImageProps {
    className?: string;
    imageUrl?: string;
    altText?: string;
}
