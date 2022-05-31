import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MainFooter.module.scss'
import ProjektBanner from '../ProjektBanner/ProjektBanner'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Footer() {
  const router = useRouter()
  const [strankyVisible, setStrankyVisible] = useState(false)
  const [sluzbyVisible, setSluzbyVisible] = useState(false)
  const [partneriVisible, setPartneriVisible] = useState(false)

  return (
    <>
      { router.pathname != "/e-shopy" && router.pathname != '/kontakty' && !router.pathname.includes('/kariera/') && (
        <section className='visible no-margin'>
          <ProjektBanner></ProjektBanner>
        </section> 
      )}
      <footer className={styles.footer}>
        <div className="container">
          <div className={`${styles.container}`}>
            <div className={styles.logo}>
              <Link href="/" passHref>
                <svg className={styles.footerLogo} width="67" height="55" viewBox="0 0 67 55" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H6.76955V6.54484H0V0ZM0 8.08755H6.76955V14.6324H0V8.08755ZM0 16.1517H6.76955V22.6966H0V16.1517ZM0 24.2159H6.76955V30.7607H0V24.2159ZM0 32.3034H6.76955V38.8483H0V32.3034ZM0 40.3676H6.76955V46.9125H0V40.3676ZM0 48.4552H6.76955V55H0V48.4552ZM8.60104 0H15.3706V6.54484H8.60104V0ZM8.60104 8.08755H15.3706V14.6324H8.60104V8.08755ZM8.60104 16.1517H15.3706V22.6966H8.60104V16.1517ZM8.60104 24.2159H15.3706V30.7607H8.60104V24.2159ZM8.60104 32.3034H15.3706V38.8483H8.60104V32.3034ZM8.60104 40.3676H15.3706V46.9125H8.60104V40.3676ZM8.60104 48.4552H15.3706V55H8.60104V48.4552ZM17.2253 8.08755H23.9948V14.6324H17.2253V8.08755ZM17.2253 16.1517H23.9948V22.6966H17.2253V16.1517ZM17.2253 24.2159H23.9948V30.7607H17.2253V24.2159ZM17.2253 32.3034H23.9948V38.8483H17.2253V32.3034ZM25.8263 16.1517H32.5959V22.6966H25.8263V16.1517ZM25.8263 24.2159H32.5959V30.7607H25.8263V24.2159ZM25.8263 32.3034H32.5959V38.8483H25.8263V32.3034ZM25.8263 40.3676H32.5959V46.9125H25.8263V40.3676ZM34.4273 16.1517H41.1969V22.6966H34.4273V16.1517ZM34.4273 24.2159H41.1969V30.7607H34.4273V24.2159ZM34.4273 32.3034H41.1969V38.8483H34.4273V32.3034ZM34.4273 40.3676H41.1969V46.9125H34.4273V40.3676ZM43.0284 8.08755H49.7979V14.6324H43.0284V8.08755ZM43.0284 16.1517H49.7979V22.6966H43.0284V16.1517ZM43.0284 24.2159H49.7979V30.7607H43.0284V24.2159ZM43.0284 32.3034H49.7979V38.8483H43.0284V32.3034ZM51.6294 0H58.399V6.54484H51.6294V0ZM51.6294 8.08755H58.399V14.6324H51.6294V8.08755ZM51.6294 16.1517H58.399V22.6966H51.6294V16.1517ZM51.6294 24.2159H58.399V30.7607H51.6294V24.2159ZM51.6294 32.3034H58.399V38.8483H51.6294V32.3034ZM51.6294 40.3676H58.399V46.9125H51.6294V40.3676ZM51.6294 48.4552H58.399V55H51.6294V48.4552ZM60.2305 0H67V6.54484H60.2305V0ZM60.2305 8.08755H67V14.6324H60.2305V8.08755ZM60.2305 16.1517H67V22.6966H60.2305V16.1517ZM60.2305 24.2159H67V30.7607H60.2305V24.2159ZM60.2305 32.3034H67V38.8483H60.2305V32.3034ZM60.2305 40.3676H67V46.9125H60.2305V40.3676ZM60.2305 48.4552H67V55H60.2305V48.4552Z" />
                </svg>
              </Link>
            </div>
            <div className='col-4'>
              <ul>
                <li><h4><strong className={styles.green}>MirandaMedia Group, s.r.o.</strong></h4></li>
                <li>Jankovcova 1595/14, 170 00</li>
                <li>Praha 7 - Holešovice</li>
                <li>Vchod B</li>
              </ul>
              <ul>
                <li><strong>IČO:</strong> 08272930</li>
                <li><strong>DIČ:</strong> CZ08272930</li>
                <li><strong>BÚ:</strong> 2201649999/2010</li>
              </ul>
            </div>
            <div className={`${styles.acordeon} ${strankyVisible && styles.visible}`}>
              <h4 onClick={(e) => {
                strankyVisible ? setStrankyVisible(false) : setStrankyVisible(true)
              }}
              >Stránky</h4>
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
            <div className={`${styles.acordeon} ${sluzbyVisible && styles.visible}`}>
              <h4 onClick={(e) => {
                sluzbyVisible ? setSluzbyVisible(false) : setSluzbyVisible(true)
                }
              }>
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
            <div className={`col-4 ${styles.sluzby}`}>
              <div className={`${styles.partneri} ${styles.acordeon} ${partneriVisible && styles.visible}`}>
                <h4 onClick={(e) => {
                  partneriVisible ? setPartneriVisible(false) : setPartneriVisible(true)
                }}>Partneři</h4>
                <div>
                  <div>
                    <Image src="/img/icon/google-partner.svg" width={60} height={44} alt="Google Partner"></Image>
                  </div>
                  <div>
                    <Image src="/img/icon/sklik.svg" width={100} height={49} alt="Sklik"></Image>
                  </div>
                  <div>
                    <Image src="/img/icon/shoptet-partner.svg" width={113} height={37} alt="Shoptet Partner"></Image>
                  </div>
                  <div>
                    <Image src="/img/icon/heureka.svg" width={63} height={60} alt="Heureka Partner"></Image>
                  </div>
                  <div>
                    <Image src="/img/icon/shoptet-premium.svg" width={58} height={58} alt="Shoptet PREMIUM"></Image>
                  </div>
                  <div>
                    <Image src="/img/icon/meta.jpg" width={105} height={60} alt="Meta Business Partner"></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.socials}>
                  <div>
                    <a href="mailto:info@mirandamedia.cz" className={styles.mail}>info@mirandamedia.cz</a>
                  </div>
                  <div>
                    <Link href="https://www.twitter.com">
                      <a target="_blank">
                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.8203 2.80659C28.7088 3.2759 27.5355 3.59701 26.3375 3.76991C27.6096 3.01655 28.5482 1.81857 28.9805 0.410645C27.7949 1.11461 26.4981 1.63332 25.1395 1.91738C22.8424 -0.527974 19.0015 -0.651477 16.5561 1.64567C15.3334 2.79424 14.6418 4.38743 14.6418 6.05471C14.6418 6.52402 14.7036 6.98098 14.8271 7.43794C9.93639 7.20328 5.37914 4.90614 2.27923 1.12696C1.77287 2.04088 1.50116 3.0783 1.50116 4.12807C1.50116 6.15351 2.51389 8.0431 4.20587 9.16697C3.2302 9.12992 2.27923 8.85822 1.43941 8.38891V8.45066C1.43941 11.3406 3.46485 13.823 6.29306 14.3911C5.762 14.5393 5.21859 14.6134 4.67518 14.6258C4.29232 14.6134 3.90946 14.5764 3.53896 14.5023C4.34172 16.96 6.60182 18.6396 9.18302 18.7014C7.02173 20.381 4.36642 21.2949 1.62467 21.2826C1.14301 21.2949 0.661347 21.2826 0.179688 21.2332C2.95849 23.0487 6.21896 24.012 9.54118 23.9996C19.0262 24.0614 26.7574 16.4289 26.8192 6.94393C26.8192 6.86983 26.8192 6.79573 26.8192 6.70927V5.93121C27.9925 5.06669 29.0052 4.01692 29.8203 2.80659Z" />
                        </svg>
                      </a>
                    </Link>
                    <Link href="https://www.instagram.com/mirandamediagroup/">
                      <a target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.16221C15.2041 2.16221 15.5836 2.1744 16.849 2.23213C18.019 2.28553 18.6544 2.48102 19.0773 2.64531C19.6373 2.863 20.0371 3.12308 20.457 3.54297C20.8769 3.96287 21.137 4.36266 21.3546 4.92274C21.519 5.34564 21.7145 5.98103 21.7679 7.15097C21.8256 8.41637 21.8378 8.79587 21.8378 12C21.8378 15.2042 21.8256 15.5837 21.7679 16.849C21.7145 18.019 21.519 18.6544 21.3546 19.0773C21.137 19.6374 20.8769 20.0372 20.457 20.4571C20.0371 20.877 19.6373 21.137 19.0773 21.3547C18.6544 21.519 18.019 21.7145 16.849 21.7679C15.5838 21.8256 15.2043 21.8378 12 21.8378C8.79563 21.8378 8.41613 21.8256 7.15097 21.7679C5.98098 21.7145 5.34559 21.519 4.92274 21.3547C4.36261 21.137 3.96282 20.877 3.54293 20.4571C3.12303 20.0372 2.86295 19.6374 2.64531 19.0773C2.48097 18.6544 2.28548 18.019 2.23209 16.8491C2.17435 15.5837 2.16216 15.2042 2.16216 12C2.16216 8.79587 2.17435 8.41637 2.23209 7.15102C2.28548 5.98103 2.48097 5.34564 2.64531 4.92274C2.86295 4.36266 3.12303 3.96287 3.54293 3.54297C3.96282 3.12308 4.36261 2.863 4.92274 2.64531C5.34559 2.48102 5.98098 2.28553 7.15092 2.23213C8.41632 2.1744 8.79582 2.16221 12 2.16221ZM12 0C8.74095 0 8.33234 0.0138139 7.05241 0.0722133C5.77511 0.130517 4.90283 0.333343 4.1395 0.630008C3.35039 0.936677 2.68118 1.347 2.01406 2.01411C1.34695 2.68123 0.936629 3.35044 0.629961 4.13954C0.333296 4.90288 0.13047 5.77516 0.0721656 7.05246C0.0137662 8.33234 0 8.741 0 12C0 15.2591 0.0137662 15.6677 0.0721656 16.9476C0.13047 18.2249 0.333296 19.0972 0.629961 19.8605C0.936629 20.6496 1.34695 21.3188 2.01406 21.9859C2.68118 22.6531 3.35039 23.0634 4.1395 23.37C4.90283 23.6667 5.77511 23.8695 7.05241 23.9278C8.33234 23.9862 8.74095 24 12 24C15.259 24 15.6677 23.9862 16.9475 23.9278C18.2248 23.8695 19.0971 23.6667 19.8605 23.37C20.6496 23.0634 21.3188 22.6531 21.9859 21.9859C22.653 21.3188 23.0633 20.6496 23.37 19.8605C23.6667 19.0972 23.8695 18.2249 23.9278 16.9476C23.9862 15.6677 24 15.2591 24 12C24 8.741 23.9862 8.33234 23.9278 7.05246C23.8695 5.77516 23.6667 4.90288 23.37 4.13954C23.0633 3.35044 22.653 2.68123 21.9859 2.01411C21.3188 1.347 20.6496 0.936677 19.8605 0.630008C19.0971 0.333343 18.2248 0.130517 16.9475 0.0722133C15.6677 0.0138139 15.259 0 12 0ZM12 5.83784C8.59671 5.83784 5.83779 8.59676 5.83779 12C5.83779 15.4033 8.59671 18.1622 12 18.1622C15.4032 18.1622 18.1622 15.4033 18.1622 12C18.1622 8.59676 15.4032 5.83784 12 5.83784ZM12 16C9.79085 16 7.99995 14.2091 7.99995 12C7.99995 9.7909 9.79085 8 12 8C14.2091 8 16 9.7909 16 12C16 14.2091 14.2091 16 12 16ZM19.8456 5.59438C19.8456 6.38968 19.2009 7.03441 18.4056 7.03441C17.6103 7.03441 16.9656 6.38968 16.9656 5.59438C16.9656 4.79909 17.6103 4.15441 18.4056 4.15441C19.2009 4.15441 19.8456 4.79909 19.8456 5.59438Z" />
                        </svg>
                      </a>
                    </Link>
                    <Link href="https://www.facebook.com/mirandamedia.cz">
                      <a target="_blank">
                        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.5748 7.77H7.7948V5.28C7.7948 4.33 8.3948 4.14 8.8448 4.14H11.5348V0H7.8448C3.7148 0 2.8148 3.09 2.8148 5.03V7.77H0.424805V12H2.8148V24H7.7948V12H11.1848L11.5748 7.77Z" />
                        </svg>
                      </a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCHWcwUeHvHtfpJkLsFOsqpQ">
                      <a target="_blank">
                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.9999 0C10.4338 0 4.50722 1.14407 4.50722 1.14407L4.49231 1.16112C2.41265 1.49372 0.819336 3.28075 0.819336 5.45406V11.9989V12.0011V18.5438V18.5459C0.821365 19.5839 1.19334 20.5871 1.86848 21.3755C2.54361 22.1639 3.47768 22.6857 4.50296 22.8474L4.50722 22.8538C4.50722 22.8538 10.4338 24 14.9999 24C19.566 24 25.4926 22.8538 25.4926 22.8538L25.4947 22.8517C26.5211 22.6903 27.4562 22.168 28.1319 21.3787C28.8075 20.5894 29.1794 19.5849 29.1805 18.5459V18.5438V12.0011V11.9989V5.45406C29.1789 4.41575 28.8072 3.41201 28.132 2.62319C27.4568 1.83438 26.5225 1.31219 25.4968 1.15047L25.4926 1.14407C25.4926 1.14407 19.566 0 14.9999 0ZM11.7275 6.97949L20.454 11.9989L11.7275 17.0184V6.97949Z" />
                        </svg>
                      </a>
                    </Link>
                    <Link href="https://www.linkedin.com/company/mirandamedia/">
                      <a href='_blank'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.1447 0.000390816H1.85516C0.895179 -0.0196088 0.0951949 0.730376 0.0751953 1.70036C0.0751953 1.71036 0.0751953 1.73036 0.0751953 1.74036V22.2699C0.0751953 23.2299 0.85518 23.9999 1.81516 23.9999C1.82516 23.9999 1.84516 23.9999 1.85516 23.9999H22.1447C23.1147 24.0099 23.9047 23.2299 23.9247 22.2599V1.74036C23.8947 0.770375 23.1047 0.0103906 22.1447 0.000390816ZM7.30505 20.05H3.68512V9.2502H7.30505V20.05ZM5.47509 7.76023C4.45511 7.85023 3.54513 7.09025 3.45513 6.07027C3.44513 6.01027 3.44513 5.94027 3.44513 5.88027C3.44513 4.84029 4.29511 3.99031 5.34509 4.00031C5.38509 4.00031 5.43509 4.00031 5.47509 4.00031C6.51507 3.93031 7.41505 4.7103 7.49505 5.75027C7.49505 5.79027 7.49505 5.83027 7.49505 5.88027C7.53504 6.88025 6.76506 7.73023 5.76508 7.77023C5.66508 7.77023 5.57508 7.77023 5.47509 7.76023ZM20.2748 20.05H16.6549V14.2701C16.6549 12.8201 16.1249 11.8102 14.8249 11.8102C13.9949 11.8102 13.2649 12.3301 12.9949 13.1101C12.9049 13.3901 12.8749 13.6801 12.8949 13.9801V20H9.27501C9.27501 20 9.32501 10.1702 9.27501 9.1602H12.8849V10.7002C13.5549 9.5602 14.7949 8.88021 16.1149 8.92021C18.4748 8.92021 20.2648 10.4602 20.2648 13.7901L20.2748 20.05Z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <a href="tel:+420732264251" className={styles.phone}>+420 732 264 251</a>
                  </div>
                </div>                
                <p className={styles.signature}>
                  © MirandaMedia Group s.r.o. 2022 | Zpracování osobních údajů
                </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer