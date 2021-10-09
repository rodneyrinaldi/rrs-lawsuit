import Head from "next/head";

import Test from "../components/test";

export default function Index() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>rrs.lawsuit</title>
        <meta name="description" content="rodneyrinaldi services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Test />
    </div>
  );
}
