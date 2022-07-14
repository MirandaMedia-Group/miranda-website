import '../styles/globals.scss'

import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import LoadingScreen from '../components/LoadingScreen/LoadingScreen'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	const [pageLoading, setPageLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		const handleRouteStart = () => setPageLoading(true)
		const handleRouteDone = () => setPageLoading(false)

		router.events.on('routeChangeStart', handleRouteStart)
		router.events.on('routeChangeComplete', handleRouteDone)
		router.events.on('routeChangeError', handleRouteDone)
		window.addEventListener('load', handleRouteDone)

		return () => {
			router.events.off('routeChangeStart', handleRouteStart)
			router.events.off('routeChangeComplete', handleRouteDone)
			router.events.off('routeChangeError', handleRouteDone)
			window.removeEventListener('load', handleRouteDone)
		}
	}, [router.events])

	return (
		<>
			<Head>
				<link rel='shortcut icon' sizes='16x16' href='/favicon.ico' />
				<link rel='shortcut icon' sizes='32x32' href='/favicon-32x32.ico' />
			</Head>
			<Script id='gtm' strategy='afterInteractive'>
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-MDK728Q');`}
			</Script>
			{pageLoading && <LoadingScreen />}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
