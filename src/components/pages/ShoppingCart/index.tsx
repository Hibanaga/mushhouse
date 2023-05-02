import { GetServerSideProps } from 'next';

import { list } from 'requests/delivery';

import Component from './component';

export interface Props {
    delivery: { id: string }[]
}


Component.defaultProps = {
};

export const getStaticStaticProps: GetServerSideProps = async (context) => {
    const { elements } = await list();
    try {
        return {
            props: {
                delivery: elements,
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
