import React, { FunctionComponent } from 'react';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Routes from 'types/routes';

import Product from 'models/Product';

import Container from 'components/layout/Container';

import SectionDetails from './sections/Details';
import SectionHero from './sections/Hero';
import SectionRelated from './sections/Related';
import { getStaticStaticProps } from './index';
import StyledComponent from './styles';


const PageProduct: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ product }) => {
    const router = useRouter();

    return (
        <StyledComponent className="page-product">
            <div className="button-close">
                <Image
                    onClick={() => router.push(Routes.Home)}
                    src="/images/close-icon.svg"
                    className="image-button"
                    width={36}
                    height={36}
                    alt="alt layout toast image"
                />
            </div>

            <Container>
                <SectionHero product={new Product(product)} />
                <SectionDetails product={new Product(product)} />
                <SectionRelated product={new Product(product)} />

            </Container>
        </StyledComponent>
    );
};

export default PageProduct;
