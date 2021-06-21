import Head from 'next/head';
import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/globalStyles';

import { useStore } from 'store/setup';

type MyAppProps = {
  Component: any;
  pageProps: any;
};

const MyApp: FunctionComponent<MyAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore(pageProps.initialReduxState);

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
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
