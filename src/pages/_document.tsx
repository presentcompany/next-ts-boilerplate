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
      styles: <>{initialProps.styles}</>
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en-AU">
        <Head />

        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
