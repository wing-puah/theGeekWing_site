import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet as ScStyleSheets } from 'styled-components';
import { ServerStyleSheets as MuiStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const scSheet = new ScStyleSheets();
    const muiSheet = new MuiStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            const muiEnhancer = muiSheet.collect(<App {...props} />);
            return scSheet.collectStyles(muiEnhancer);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {muiSheet.getStyleElement()}
            {scSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      scSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Exo:400,900|Open+Sans:400,400i,700,700i&display=swap"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
