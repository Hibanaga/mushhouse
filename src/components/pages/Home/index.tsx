import { GetServerSideProps } from 'next';

import { list } from 'requests/products';

import Component from './component';

Component.defaultProps = {
};

export const getStaticStaticProps: GetServerSideProps = async (context) => {
    try {
        const { meta, elements } = await list();

        return {
            props: {
                meta: meta,
                products: elements,
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
