import { Fragment } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const isProduction = process.env.NODE_ENV === "production";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {isProduction && (
            <Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-CMHCP6GYPN"
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CMHCP6GYPN');
        `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
