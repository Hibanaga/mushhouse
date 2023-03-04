import React, { FunctionComponent, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { single } from 'requests/products';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import Toast from 'components/layout/Toast';
import { ToastVariants } from 'components/layout/Toast/types';

import StyledComponent from './styles';
import { Props } from './types';


const PageProduct: FunctionComponent<Props> = ({  }) => {
    const { query } = useRouter();

    useEffect(() => {
        query && query.id && getProduct(query.id as string);
    }, [JSON.stringify({ id: query.id })]);

    const getProduct = async (id: string) => {
        try {
            const response = await single(id);

            console.log('response: ', response);
        } catch (error) {
            toast(
                <Toast
                    variant={ToastVariants.Error}
                    message="Server error. Try again"
                />,
            );
        }
    };

    console.log('router: ', query.id);

    return (
        <StyledComponent className="page-product">
            <Header />

            <Container>

            </Container>
        </StyledComponent>
    );
};

export default PageProduct;
