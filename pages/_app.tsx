import { FunctionComponent } from 'react';

type MyAppProps = {
  Component: any;
  pageProps: {};
};

const MyApp: FunctionComponent<MyAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
