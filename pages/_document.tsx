import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full" data-theme="propulsion-society">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
