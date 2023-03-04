import { FunctionComponent } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutImage: FunctionComponent<Props> = (props) => {
    const { className, imageUrl, altText, ...restProps } = props;
    if (imageUrl) restProps.src = imageUrl;
    if (altText) restProps.alt = altText;

    return (
        <StyledComponent className={classNames('layout-image', className)}>
            <Image {...restProps} />
        </StyledComponent>
    );
};

export default LayoutImage;