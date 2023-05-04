import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Global } from '@emotion/core';
import { AppContextProvider } from 'context/AppContext';

import stylesBreakpoints from 'theme/styles/breakpoints';
import styleCookieSent from 'theme/styles/cookieconsent';
import stylesGlobal from 'theme/styles/global';

import CookiesPanel from '../src/components/layout/CookiesPanel';
import AppWrapper from '../src/components/wrapper/AppWrapper';

import 'theme/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <AppContextProvider>
            <>
                <Global
                    styles={[
                        stylesGlobal,
                        stylesBreakpoints,
                        styleCookieSent,
                    ]}
                />
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                        property="og:title"
                        content="Szamanita Panterina"
                    />
                    <meta
                        property="og:description"
                        content="Your best mushroom helper!"
                    />
                    <meta
                        property="og:image"
                        content="https://szamanita-pantherina.pl/images/favicons/android-chrome-192x192.png"
                    />
                    <meta
                        property="og:url"
                        content="https://szamanita-pantherina.pl"
                    />
                    <meta
                        property="og:type"
                        content="website"
                    />
                    <meta
                        name="keywords"
                        content="Mushroom, szamanita, panterina, szamanita-panterina"
                    />
                    <meta
                        name="description"
                        content="Mikrodozowanie Amanita Muscaria, Amanita Panthetina i inne"
                    />

                    <link
                        rel="shortcut icon"
                        href="/images/favicons/favicon.ico"
                    />
                    <link
                        rel="manifest"
                        href="/images/favicons/manifest.json"
                    />
                    <meta
                        name="theme-color"
                        content="#ffffff"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicons/favicon-16x16.png"
                        sizes="16x16"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicons/favicon-32x32.png"
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicons/favicon.ico"
                        sizes="64x64"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicons/favicon-96x96.png"
                        sizes="96x96"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicons/android-chrome-192x192.png"
                        sizes="192x192"
                    />

                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                </Head>
                <AppWrapper>
                    <Component {...pageProps} />
                    <CookiesPanel />
                </AppWrapper>
            </>
        </AppContextProvider>
    );
}
