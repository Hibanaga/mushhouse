import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import { Props } from './types';

const LayoutHead: FunctionComponent<Props> = ({ title, description, children }) => {
    return (
        <Head>
            <title>{title}</title>
            {description && (
                <meta
                    name="description"
                    content={description}
                />
            )}

            {description}
            {children}
        </Head>
    );
};

export default LayoutHead;
