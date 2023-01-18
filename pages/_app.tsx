import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NavBar from "../components/navbar/Navbar";
import { FC, useEffect, useState } from "react";
import Head from "next/head";
import Background from "../components/background/Background";
import NextNProgress from "nextjs-progressbar";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="Coder2195's - 404 Not Found"
        additionalMetaTags={[
          {
            name: "msapplication-TileColor",
            content: "#000000",
          },
          {
            name: "theme-color",
            content: "#000000",
          },
        ]}
        openGraph={{
          images: [
            {
              url: "https://coder2195.vercel.app/favicon.ico",
              width: 256,
              height: 256,
              type: "image/png",
            },
          ],
          siteName: "Coder2195's Website",
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`scroll-smooth fixed w-screen h-screen py-20 overflow-auto px-3 bottom-0`}
      >
        <div id="bg" className="fixed left-0 top-0 w-full h-full -z-10"></div>
        <NavBar />
        <Background />
        <NextNProgress color="#808080" />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
