import Head from 'next/head'
import MainHeader from '../MainHeader/MainHeader'
import MainFooter from '../MainFooter/MainFooter'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MirandaMedia Group s.r.o.</title>
        <meta name="description" content="MirandaMedia Group s.r.o." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <main id="content">{ children }</main>
      <MainFooter />
    </>
  )
}

export default Layout