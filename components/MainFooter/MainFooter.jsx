import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MainFooter.module.scss'

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Image src="/../public/img/footer.png" width={1920} height={364} />
        <div className={`container ${styles.container}`}>
          <div className='col-4'>
            <div className={styles.logo}>
              <Link href="/" passHref>
                <Image src="/img/logo.png" width="67" height="55" alt="MirandaMedia Group" />
              </Link>
              </div>
              <ul>
                <li>Jankovcova 1595/14</li>
                <li>Praha 7 - Holešovice</li>
                <li>Vchod A</li>
                <li>mapa</li>
              </ul>
              <ul>
                <li><strong>MirandaMedia Group, s.r.o.</strong></li>
                <li>Jankovcova 1595/14, 170 00</li>
                <li>Praha 7 - Holešovice</li>
              </ul>
              <ul>
                <li><span>IČO:</span> 08272930</li>
                <li><span>DIČ:</span> CZ08272930</li>
                <li><span>BÚ:</span> 2201649999/2010</li>
              </ul>
          </div>
          <div className='col-4'>
            <a href="tel:+420732264251" className={styles.phone}>+420 732 264 251</a>
            <a href="mailto:info@mirandamedia.cz" className={styles.mail}>info@mirandamedia.cz</a>
            <Image src="/../public/img/mapa.jpg" width={460} height={300} />
          </div>
          <div className={`col-4 ${styles.sluzby}`}>
            <div>
              <h4>Stránky</h4>
              <ul>
                <li>
                  <Link href="/#">
                    <a>Homepage</a>
                  </Link>
                </li>
                <li>
                  <Link href="/o-nas">
                    <a>O nás</a>
                  </Link>
                </li>
                <li>
                  <Link href="/reference">
                    <a>Reference</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sluzby">
                    <a>Sluzby</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kariera">
                    <a>Kariera</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kontakty">
                    <a>Kontakt</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>
                Služby
              </h4>
              <ul>
                <li>
                  <Link href="/strategie">
                    <a>Strategie</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kreativita-a-produkce">
                    <a>Kreativita a produkce</a>
                  </Link>
                </li>
                <li>
                  <Link href="/performace">
                    <a>Performace</a>
                  </Link>
                </li>
                <li>
                  <Link href="/brandove-kampane">
                    <a>Brandové kampaně</a>
                  </Link>
                </li>
                <li>
                  <Link href="/socialni-site">
                    <a>Sociální sítě</a>
                  </Link>
                </li>
                <li>
                  <Link href="/data-a-technologie">
                    <a>Data a technologie</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div class={styles.partneri}>
              <h4>Partneři</h4>
              <div>
                <img src="/img/icon/google-partner.svg"></img>
                <img src="/img/icon/shoptet-partner.svg"></img>
                <img src="/img/icon/shoptet-premium.svg"></img>
                <img src="/img/icon/sklik.svg"></img>
                <img src="/img/icon/heureka.svg"></img>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
              <div className={styles.socials}>
                <Link href="https://www.twitter.com">
                  <a target="_blank">
                    <img src="/img/icon/twitter.svg" />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/mirandamediagroup/">
                  <a target="_blank">
                    <img src="/img/icon/instagram.svg" />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/mirandamedia.cz">
                  <a target="_blank">
                    <img src="/img/icon/facebook.svg" />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCHWcwUeHvHtfpJkLsFOsqpQ">
                  <a target="_blank">
                    <img src="/img/icon/youtube.svg" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/company/mirandamedia/">
                  <a href='_blank'>
                    <img src="/img/icon/linkedin.svg" />
                  </a>
                </Link>
              </div>
              <p className={styles.signature}>
                © MirandaMedia Group s.r.o. 2022 | Zpracování osobních údajů
              </p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Footer