import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Mia Mudzingwa" />
        <meta
          name="keywords"
          content="Next.js, React, User Card, User Modal, Responsive Design, Frontend Development, Web App, Tailwind CSS, User Interface, JavaScript, TypeScript, JSON API, Developer Portfolio"
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
