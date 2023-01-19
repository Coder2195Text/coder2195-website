import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NavBar from "../components/Navbar";
import { FC, useEffect } from "react";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import * as THREE from "three";
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // @ts-ignore
  useEffect(() => {
    NET({
      el: "#bg",
      //@ts-ignore
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1,
      scaleMobile: 1,
      color: 0xff3f81,
      backgroundColor: 0x0,
      points: 20.0,
      maxDistance: 27.0,
      spacing: 20.0,
    });
  });
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
      <div className="scroll-smooth fixed w-screen h-screen py-20 overflow-auto px-3 top-0">
        <div id="bg" className="fixed left-0 top-0 w-full h-full -z-10"></div>
        <NavBar />
        <NextNProgress
          color="#808080"
          height={6}
          options={{
            showSpinner: false,
          }}
        />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
