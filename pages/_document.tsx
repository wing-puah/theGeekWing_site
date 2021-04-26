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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
