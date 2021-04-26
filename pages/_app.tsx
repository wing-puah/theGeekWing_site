import Head from 'next/head';
import { FunctionComponent } from 'react';

type MyAppProps = {
  Component: any;
  pageProps: {};
};

const MyApp: FunctionComponent<MyAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
