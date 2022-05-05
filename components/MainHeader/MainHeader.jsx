import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./MainHeader.module.scss"

const Navbar = () => {
  const router = useRouter()

  const actualHour = new Date().getHours()

  return (
    <header className={`${styles.mainHeader} ${router.pathname === "/" || router.pathname === '/kontakty' ? styles.headerWhite : ''}`}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <svg width="67" height="55" viewBox="0 0 67 55" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H6.76955V6.54484H0V0ZM0 8.08755H6.76955V14.6324H0V8.08755ZM0 16.1517H6.76955V22.6966H0V16.1517ZM0 24.2159H6.76955V30.7607H0V24.2159ZM0 32.3034H6.76955V38.8483H0V32.3034ZM0 40.3676H6.76955V46.9125H0V40.3676ZM0 48.4552H6.76955V55H0V48.4552ZM8.60104 0H15.3706V6.54484H8.60104V0ZM8.60104 8.08755H15.3706V14.6324H8.60104V8.08755ZM8.60104 16.1517H15.3706V22.6966H8.60104V16.1517ZM8.60104 24.2159H15.3706V30.7607H8.60104V24.2159ZM8.60104 32.3034H15.3706V38.8483H8.60104V32.3034ZM8.60104 40.3676H15.3706V46.9125H8.60104V40.3676ZM8.60104 48.4552H15.3706V55H8.60104V48.4552ZM17.2253 8.08755H23.9948V14.6324H17.2253V8.08755ZM17.2253 16.1517H23.9948V22.6966H17.2253V16.1517ZM17.2253 24.2159H23.9948V30.7607H17.2253V24.2159ZM17.2253 32.3034H23.9948V38.8483H17.2253V32.3034ZM25.8263 16.1517H32.5959V22.6966H25.8263V16.1517ZM25.8263 24.2159H32.5959V30.7607H25.8263V24.2159ZM25.8263 32.3034H32.5959V38.8483H25.8263V32.3034ZM25.8263 40.3676H32.5959V46.9125H25.8263V40.3676ZM34.4273 16.1517H41.1969V22.6966H34.4273V16.1517ZM34.4273 24.2159H41.1969V30.7607H34.4273V24.2159ZM34.4273 32.3034H41.1969V38.8483H34.4273V32.3034ZM34.4273 40.3676H41.1969V46.9125H34.4273V40.3676ZM43.0284 8.08755H49.7979V14.6324H43.0284V8.08755ZM43.0284 16.1517H49.7979V22.6966H43.0284V16.1517ZM43.0284 24.2159H49.7979V30.7607H43.0284V24.2159ZM43.0284 32.3034H49.7979V38.8483H43.0284V32.3034ZM51.6294 0H58.399V6.54484H51.6294V0ZM51.6294 8.08755H58.399V14.6324H51.6294V8.08755ZM51.6294 16.1517H58.399V22.6966H51.6294V16.1517ZM51.6294 24.2159H58.399V30.7607H51.6294V24.2159ZM51.6294 32.3034H58.399V38.8483H51.6294V32.3034ZM51.6294 40.3676H58.399V46.9125H51.6294V40.3676ZM51.6294 48.4552H58.399V55H51.6294V48.4552ZM60.2305 0H67V6.54484H60.2305V0ZM60.2305 8.08755H67V14.6324H60.2305V8.08755ZM60.2305 16.1517H67V22.6966H60.2305V16.1517ZM60.2305 24.2159H67V30.7607H60.2305V24.2159ZM60.2305 32.3034H67V38.8483H60.2305V32.3034ZM60.2305 40.3676H67V46.9125H60.2305V40.3676ZM60.2305 48.4552H67V55H60.2305V48.4552Z" />
            </svg>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li className={`${router.pathname == "/proc-s-nami" || router.pathname == '/jak-to-funguje' ? `${styles.active}` : ""} ${styles.hasChildren}`}>
              <span>O nás</span>
              <ul className={styles.menuLevel2}>
                <li>
                  <Link href="/proc-s-nami" passHref>
                    <a>Proč s námi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/jak-to-funguje">
                    <a>Jak to u nás funguje</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/reference">
                <a className={router.pathname == "/reference" ? `${styles.active}` : ""}>Reference</a>
              </Link>
            </li>
            <li>
              <Link href="/e-shopy" >
                <a className={router.pathname == "/e-shopy" ? `${styles.active}` : ""}>Shoptet na míru</a>
              </Link> 
            </li>
            <li className={`${router.pathname.includes("/sluzby") ? `${styles.active}` : ""} ${styles.hasChildren}`}>
              <Link href="/sluzby" >
                <a>Služby</a>
              </Link>
              <ul className={styles.menuLevel2}>
                <li>
                  <Link href="/sluzby/ppc-vyhledavace">
                    <a>PPC &amp; zbožové vyhledávače</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sluzby/design">
                    <a>Produktový design &amp; grafika</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sluzby/socialni-site">
                    <a>Sociální sítě</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sluzby/weby">
                    <a>Weby &amp; e-shopy na klíč</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sluzby/influencer">
                    <a>Influencer</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog" >
                <a className={router.pathname == "/blog" ? `${styles.active}` : ""}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/kariera" >
                <a className={router.pathname == "/kariera" ? `${styles.active}` : ""}>Kariera</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakty" >
                <a className={router.pathname == "/kontakty" ? `${styles.active}` : ""}>Kontakty</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          
          <a href="tel:00420732264251" className={styles.projectPhone}>
            <span className={`${actualHour > 8 && actualHour < 17 ? styles.online : styles.offline} ${styles.status}`}></span>
            +420 732 264 251
          </a>
          <a href="mailto:info@mirandamedia.cz" className={styles.projectMail}>info@mirandamedia.cz</a>
        </div>
    </header>
  )
}

export default Navbar