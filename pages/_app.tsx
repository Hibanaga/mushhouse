import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/core';
import { AppContextProvider } from 'context/AppContext';

import stylesBreakpoints from 'theme/styles/breakpoints';
import stylesGlobal from 'theme/styles/global';

import CookiesPanel from '../src/components/layout/CookiesPanel';
import AppWrapper from '../src/components/wrapper/AppWrapper';

import 'theme/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppContextProvider>
            <>
                <Global
                    styles={[
                        stylesGlobal,
                        stylesBreakpoints,
                    ]}
                />
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link
                        rel="shortcut icon"
                        href="/images/favicons/favicon.ico"
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
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
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
