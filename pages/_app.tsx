import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NavBar from "../components/Navbar";
import { FC, useEffect, useState } from "react";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import * as THREE from "three";
//@ts-ignore
import CLOUDS from "vanta/dist/vanta.clouds.min";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const [vanta, setVanta] = useState(0);
	const [mounted, setMounted] = useState(false);

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

		const element = document.getElementById("bg");

		if (!vanta && !element?.children.length) {
			setVanta(
				CLOUDS({
					el: element,
					//@ts-ignore
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					skyColor: 0x0,
					cloudColor: 0x0,
					cloudShadowColor: 0x501818,
					sunColor: 0xf118ff,
					sunGlareColor: 0x3090ff,
					sunlightColor: 0xff,
				})
			);
		}
	}, []);
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
			<div id="bg" className="fixed left-0 top-0 w-full h-full -z-10"></div>
			<NavBar />
			{progressBar}
			<div className="scroll-smooth fixed w-screen top-[72px] h-[calc(100vh-72px)] flex justify-center  overflow-auto">
				<div>
					<br className="select-none h-4" />
					<div className="max-w-6xl p-3 bg-[rgba(100,100,100,.5)] rounded-3xl w-screen break-words">
						<Component {...pageProps} />
					</div>
					<br className="select-none h-4" />
				</div>
			</div>
		</>
	);
};

export default App;
