import Image from 'next/image'
import Link from 'next/link'
import styles from "./MainHeader.module.scss"

const Navbar = () => {
  return (
    <header className={styles.mainHeader}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image src="/img/logo.png" width="67" height="55" alt="MirandaMedia Group" />
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/proc-s-nami">
                <a>Proč s námi</a>
              </Link>
            </li>
            <li>
              <Link href="/reference">
                <a>Reference</a>
              </Link>
            </li>
            <li>
              <Link href="/sluzby" >
                <a>Služby</a>
              </Link>
            </li>
            <li>
              <Link href="/e-shopy" >
                <a>E-shopy</a>
              </Link> 
            </li>
            <li>
              <Link href="/kariera" >
                <a>Kariera</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakty" >
                <a>Kontakty</a>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar