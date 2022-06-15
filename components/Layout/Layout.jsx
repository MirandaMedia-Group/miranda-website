import Head from 'next/head'
import MainHeader from '../MainHeader/MainHeader'
import MainFooter from '../MainFooter/MainFooter'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>MirandaMedia Group s.r.o.</title>
				<meta name='description' content='MirandaMedia Group s.r.o.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDK728Q" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			></noscript>
			<MainHeader />
			<main id='content'>{children}</main>
			<MainFooter />
		</>
	)
}

export default Layout
