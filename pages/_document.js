/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Define at the page level prior to launch */}
                    <title>Precursor</title>
                    {/* ======================================== */}
                    <link rel="icon" href="/daxter.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
