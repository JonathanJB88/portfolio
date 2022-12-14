import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Full Stack Developer looking for a job, open to work"
          />
          <meta
            name="keywords"
            content="Full Stack Web Developer, JavaScript, TypeScript, React, Redux, Node.js, Express, PostgreSQL, Next.js"
          />
        </Head>
        <body className="bg-gradient-to-r from-orange to-orange-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
