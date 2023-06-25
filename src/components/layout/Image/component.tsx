import { FunctionComponent } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

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
