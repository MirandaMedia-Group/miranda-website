import Image from 'next/image'
import Link from 'next/link'
import styles from "./MainHeader.module.scss"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationBar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/img/logo.png" width="67" height="55" />
          </Link>
        </div>
        <nav className={styles.navigation}>
          <Link href="/proc-s-nami">
            <a className={styles.navLink}>Proč s námi</a>
          </Link>
          <Link href="/reference">
            <a className={styles.navLink}>Reference</a>
          </Link>
          <Link href="/sluzby" >
            <a className={styles.navLink} >Služby</a>
          </Link>
          <Link href="/e-shopy" >
            <a className={styles.navLink} >E-shopy</a>
          </Link> 
          <Link href="/kariera" >
            <a className={styles.navLink} >Kariera</a>
          </Link>
          <Link href="/kontakty" >
            <a className={styles.navLink}>Kontakty</a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar