import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
