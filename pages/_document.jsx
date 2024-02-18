import { Html, Head, Main, NextScript } from "next/document";
import neokpro from "../public/neokwhite.png";

export default function Document() {
  return (
    <Html
      className="scroll-smooth"
      prefix="https://ogp.me/ns/website#"
      lang="en"
    >
      <Head>
        {/* <title>neok ✦ developer</title> */}
        <meta name="title" content="neok ✦ developer" />
        <meta name="description" content="Developer // Designer // Weeb" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neok.vercel.app/" />
        <meta property="og:title" content="neok ✦ developer" />
        <meta
          property="og:description"
          content="Developer // Weeb"
        />
        <meta
          property="og:image"
          content={neokpro}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nvvr-huudas.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="neok ✦ developer"
        />
        <meta
          property="twitter:description"
          content="Developer // Weeb"
        />
        <meta
          property="twitter:image"
          content={neokpro}
        />

        {/* whatsapp */}
        <meta property="og:site_name" content="neok ✦ developer" />
        <meta property="og:title" content="neok ✦ developer" />
        <meta
          property="og:description"
          content="Developer // Weeb"
        />
        <meta
          property="og:image"
          itemprop="image"
          content={neokpro}
        />
        <meta property="og:type" content="website" />

        {/* canonical links */}
        <link rel="canonical" href="https://nvvr-huudas.vercel.app/" />
        <link
          rel="search"
          href="/opensearch.xml"
          type="application/opensearchdescription+xml"
          title="neok ✦ developer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Quicksand:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
