import "../styles/index.scss";

import Head from "next/head";
// import Navigation from 'sections/shared/Navigation'
// import Loader from 'components/Loader'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Main from "@/components/Main";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
// import GSAP from '@bigbstudio/blazer/libraries/gsap'
// import { repositoryName } from '../../prismicio'

const App = ({ Component, pageProps }) => {
	const [gsap, setGsap] = useState(null);
	const { events } = useRouter();

	useEffect(() => {
		import("@bigbstudio/blazer/libraries/gsap").then((gsapModule) => {
			setGsap(gsapModule.gsap);
		});
	}, []);

	useEffect(() => {
		if (gsap) {
			const handleRouteChange = () => {
				gsap.to("main", { autoAlpha: 1, duration: 0.6 });
				window.scroll(0, 0);
			};

			events.on("routeChangeComplete", handleRouteChange);
			return () => events.off("routeChangeComplete", handleRouteChange);
		}
	}, [gsap, events]);

	return (
		<PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
			<PrismicPreview>
				<Head>
					<title>Studio Oriell</title>
					<meta name="description" content="Studio Oriell" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1"
					/>
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="/imgs/meta/apple-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href="/imgs/meta/apple-icon-60x60.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="/imgs/meta/apple-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/imgs/meta/apple-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="/imgs/meta/apple-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="/imgs/meta/apple-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="/imgs/meta/apple-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/imgs/meta/apple-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/imgs/meta/apple-icon-180x180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/imgs/meta/android-icon-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/imgs/meta/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="96x96"
						href="/imgs/meta/favicon-96x96.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/imgs/meta/favicon-16x16.png"
					/>
					<link rel="manifest" href="/imgs/meta/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta
						name="msapplication-TileImage"
						content="/imgs/meta/ms-icon-144x144.png"
					/>
					<meta name="theme-color" content="#ffffff" />
				</Head>
				{/* <Navigation /> */}
				{/* <Loader/> */}
				<Main>
					<Component {...pageProps} />
				</Main>
			</PrismicPreview>
		</PrismicProvider>
	);
};

export default App;
