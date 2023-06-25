import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import { Props } from './types';

const LayoutHead: FunctionComponent<Props> = ({ title, name, description, children }) => {
    return (
        <Head>
            <title>{title}</title>
            {name && (
                <meta
                    property="og:title"
                    content={name}
                />
            )}

            {name && (
                <meta
                    property="title"
                    content={name}
                />
            )}
            {description && (
                <meta
                    name="description"
                    content={description}
                />
            )}
            {description && (
                <meta
                    property="og:description"
                    content={description}
                />
            )}

            {description}
            {children}

            {/*<meta*/}
            {/*    name="description"*/}
            {/*    content={product?.description?.description_short ? `${product?.description?.description_short}. Kupić w Polsce. Dostawa na terenie całego kraju.` : 'Produkty na podstawie muchomora czerwonego. Maści, kapsułki, kapelusze, proszek, Zbieramy i suszymy od 2012 roku. Dostawa w całej Polsce oraz innych krajach EU. Kupić w Polsce. Dostawa na terenie całego kraju.'}*/}
            {/*/>*/}
            {/*<meta*/}
            {/*    property="og:description"*/}
            {/*    content={product?.description?.description_short ? `${product?.description?.description_short}. Kupić w Polsce. Dostawa na terenie całego kraju.` : 'Produkty na podstawie muchomora czerwonego. Maści, kapsułki, kapelusze, proszek, Zbieramy i suszymy od 2012 roku. Dostawa w całej Polsce oraz innych krajach EU. Kupić w Polsce. Dostawa na terenie całego kraju.'}*/}
            {/*/>*/}
        </Head>
    );
};

export default LayoutHead;
