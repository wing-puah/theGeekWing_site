import Head from 'next/head';
import { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/globalStyles';

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
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
