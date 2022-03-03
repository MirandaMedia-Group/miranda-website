import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MirandaMedia Group s.r.o.</title>
        <meta name="description" content="MirandaMedia Group s.r.o." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />

    </div>
  )
}
