import '../styles/globals.scss'

import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import LoadingScreen from '../components/LoadingScreen/LoadingScreen'
import { useState, useEffect } from 'react'

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
			{pageLoading && <LoadingScreen />}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
