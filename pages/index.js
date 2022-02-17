import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MirandaMedia Group s.r.o.</title>
        <meta name="description" content="MirandaMedia Group s.r.o." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      MirandaMedia web

    </div>
  )
}
