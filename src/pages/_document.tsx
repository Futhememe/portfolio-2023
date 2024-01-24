import { css } from "@/styled-system/css";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className={css({
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        overflowY: "scroll",
        scrollbar: "hidden",
      })}
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,701,501,401,901,400&f[]=cabinet-grotesk@800,500,700,400,300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Hello, I'm Gustavo an creative designer and developer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
