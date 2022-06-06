import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import type {
  DocumentContext,
  DocumentProps,
  DocumentInitialProps
} from 'next/document';

export default class Document extends NextDocument<DocumentProps | unknown> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await NextDocument.getInitialProps(ctx);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) => <App {...props} />
        });
    } catch (error) {
      console.log(error);
    }

    return {
      ...initialProps,
      styles: [<>{initialProps.styles}</>]
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en-AU">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
