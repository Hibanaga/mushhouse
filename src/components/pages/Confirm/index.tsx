import { GetServerSideProps } from 'next';

import { single } from 'requests/order';

import Component from './component';

export interface Props {
    order: any
}

Component.defaultProps = {
};

export const getStaticStaticProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const response = await single(query.id as string);

    try {
        return {
            props: {
                order: response,
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
