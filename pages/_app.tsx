import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NavBar from "../components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import Head from "next/head";

const AppBody: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const { theme } = useTheme();
  const resolvedTheme = theme ? theme : "light";
  return (
    <div
      className={`scroll-smooth fixed w-screen h-[calc(100vh-72px)] overflow-auto px-3 py-4 bottom-0 ${resolvedTheme}`}
    >
      <NavBar />
      <span id="top"></span>
      {children}
    </div>
  );
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <ThemeProvider enableSystem={false}>
      <DefaultSeo
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
      <AppBody>
        <Component {...pageProps} />
      </AppBody>
    </ThemeProvider>
  );
};

export default App;
