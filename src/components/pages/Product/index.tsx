import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';

import { single } from 'requests/products';

import Component from './component';

Component.defaultProps = {
};

export const getStaticStaticProps: GetServerSideProps = async (context) => {
    const { query } = context;
    try {
        const response = await single(query.id as string);

        return {
            props: {
                product: response,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {},
        };
    }
};

export default Component;
