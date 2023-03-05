import { GetServerSideProps } from 'next';

import { list } from 'requests/categories';

import Component from './component';

Component.defaultProps = {
};

export const getStaticStaticProps: GetServerSideProps = async (context) => {
    try {
        const { elements } = await list();

        return {
            props: {
                categories: elements,
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
