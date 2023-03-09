import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NavBar from "../components/Navbar";
import { createContext, FC, useContext, useEffect, useState } from "react";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence, motion } from "framer-motion";

const PageUrlContext = createContext<{
	urlHighlight: string;
	setUrlHighlight: React.Dispatch<React.SetStateAction<string>>;
}>(null!);

export function usePageUrl() {
	return useContext(PageUrlContext);
}

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
	const [mounted, setMounted] = useState(false);

	const [urlHighlight, setUrlHighlight] = useState("");

	let progressBar: JSX.Element | undefined;
	if (mounted) {
		progressBar = (
			<NextNProgress
				color="#808080"
				height={6}
				options={{
					showSpinner: false,
				}}
			/>
		);
	}
	// @ts-ignore
	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<>
			<PageUrlContext.Provider
				value={{
					urlHighlight,
					setUrlHighlight,
				}}
			>
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
				<NavBar highlight={urlHighlight} />
				{progressBar}
				<div className="flex overflow-auto justify-center scroll-smooth pt-[72px]">
					<div className="py-[2.5vw]">
						<div className="max-w-6xl p-3 bg-[rgba(100,100,100,.5)] rounded-3xl break-words overflow-clip w-[95vw]">
							<AnimatePresence mode="wait" initial={false}>
								<Component {...pageProps} key={router.asPath} />
							</AnimatePresence>
						</div>
					</div>
				</div>
				<iframe
					src="https://background3d.coder2195.repl.co/"
					className="overflow-hidden fixed top-0 left-0 w-full h-full -z-10"
				/>
			</PageUrlContext.Provider>
		</>
	);
};

export default App;
