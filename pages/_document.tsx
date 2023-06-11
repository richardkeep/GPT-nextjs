import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate Academic papers in seconds."
          />
          <meta property="og:site_name" content="academic.io" />
          <meta
            property="og:description"
            content="Generate your Academic content in seconds."
          />
          <meta property="og:title" content="Academic Content Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Academic Content Generator" />
          <meta
            name="twitter:description"
            content="Generate Academic papers in seconds."
          />
          <meta
            property="og:image"
            content="https://academia.io/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://academia.io/og-image.png"
          />
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
