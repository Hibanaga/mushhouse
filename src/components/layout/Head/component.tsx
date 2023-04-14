import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import { Props } from './types';

const LayoutHead: FunctionComponent<Props> = ({ title, children }) => {
    return (
        <Head>
            <title>{title}</title>
            {children}
        </Head>
    );
};

export default LayoutHead;
