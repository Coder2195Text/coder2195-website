import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NavBar from "../components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import Head from "next/head";
import Background from "../components/background/Background";
import Script from "next/script";

const AppBody: FC<{
  children: JSX.Element | JSX.Element[];
  mounted: boolean;
}> = ({ children, mounted }) => {
  //if not mounted, just return the children which will already be handled against hydration mismatch
  if (!mounted) return <>{children}</>;
  const { resolvedTheme } = useTheme();
  return (
    <div
      className={`scroll-smooth fixed w-screen h-[calc(100vh-72px)] overflow-auto px-3 py-4 bottom-0 ${resolvedTheme}`}
    >
      <NavBar />
      <div id="bg" className={`fixed left-0 top-0 w-full h-full -z-10`}></div>
      <span id="top"></span>
      <Background mounted={mounted} />
      {children}
    </div>
  );
};

export interface PageProps {
  mounted: boolean;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider enableSystem={false}>
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

      <AppBody mounted={mounted}>
        <Component {...pageProps} mounted={mounted} />
      </AppBody>
    </ThemeProvider>
  );
};

export default App;
