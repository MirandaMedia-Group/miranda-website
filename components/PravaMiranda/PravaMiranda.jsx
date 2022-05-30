import styles from "./PravaMiranda.module.scss"
import Link from 'next/link'
import Image from "next/image"
import { useRef, useState } from 'react'
import PravaMirandaImage from "./PravaMirandaImage"
import PravaMirandaLink from "./PravaMirandaLink"



const PravaMiranda = () => {
    const ppc = useRef(null)
    const weby = useRef(null)
    const soc = useRef(null)
    const design = useRef(null)
    const influence = useRef(null)
    const [displayRef, setDisplayRef] = useState(ppc)

    return (
        <>
            {/* <div className={styles.sluzby}>
                <div className={styles.sluzba}>
                    <div className={`${styles.text} ${styles.miranda}`}>
                        <h2>Miranda je ta pravá</h2>
                        <p>Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu přidáte pár 
                            nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní! </p>
                    </div>
                </div>
                <Link href="/sluzby/design" passHref>
                    <div className={`${styles.sluzba} ${styles.vertical}`} style={{backgroundImage:'url(/img/design.png)'}}>
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Produktový design</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/socialni-site" passHref>
                    <div className={`${styles.sluzba} ${styles.vertical}`} style={{backgroundImage:'url(/img/socSite.png)'}}>
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Sociální sítě</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/ppc-vyhledavace" passHref>
                    <div className={styles.sluzba} style={{backgroundImage:'url(/img/ppc.png)'}}>
                        <div className={styles.text}>
                            <h3><span>Miranda</span>PPC</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/weby" passHref>
                    <div className={styles.sluzba} style={{backgroundImage:'url(/img/weby.png)'}}>
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Weby &amp; e-shopy</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/influencer" passHref>
                    <div className={styles.sluzba} style={{backgroundImage:'url(/img/influencer2.png)'}}>
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Influencing</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
            </div> */}
            <div className="narrow text-center">
                <h2>Miranda je ta pravá</h2>
                <p>Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu přidáte pár 
                    nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní! </p>
            </div>
            <div className={`columns col-2 ${styles.sluzbyWrapper}`}>
                <div className="column" style={{position: 'relative'}}>
                    {
                        displayRef == ppc && (
                            <>
                                <PravaMirandaImage 
                                    imageSrc="/img/ppc-bg.jpg"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                />
                            </>
                        )
                    }
                    {
                        displayRef == weby && (
                            <>
                                <PravaMirandaImage 
                                    imageSrc="/img/weby-bg.jpg"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    hashtags={['Shoptet & Shoptet PREMIUM','Software na míru', 'Copywriting','Webová analytika','Projektové řízení','UX/UI','Datové služby','Školení']}
                                />
                            </>
                        )
                    }
                    {
                        displayRef == soc && (
                            <>
                                <PravaMirandaImage 
                                    imageSrc="/img/soc-bg.jpg"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    hashtags={['Firemní identita','Copywriting']}
                                />
                            </>
                        )
                    }
                    {
                        displayRef == design && (
                            <>
                                <PravaMirandaImage 
                                    imageSrc="/img/design-bg.jpg"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    hashtags={['Produktové fotografie','Návrh značek']}
                                />
                            </>
                        )
                    }
                    {
                        displayRef == influence && (
                            <>
                                <PravaMirandaImage 
                                    imageSrc="/img/influence-bg.jpg"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                />
                            </>
                        )
                    }
                </div>
                <div className="column">
                    <ul className={styles.sluzbyList}>
                        <li onMouseEnter={() => { setDisplayRef(ppc) }}>
                            <PravaMirandaLink 
                                title="PPC kampaně"
                                url="/sluzby/ppc-vyhledavace"
                            />
                        </li>
                        <li onMouseEnter={() => { setDisplayRef(weby) }}>
                            <PravaMirandaLink 
                                title="Weby &amp; e-shopy"
                                url="/sluzby/weby"
                            />
                        </li>
                        <li onMouseEnter={() => { setDisplayRef(soc) }}>
                            <PravaMirandaLink 
                                title="Sociální sítě"
                                url="/sluzby/socialni-site"
                            />
                        </li>
                        <li onMouseEnter={() => { setDisplayRef(design) }}>
                            <PravaMirandaLink 
                                title="Kreativa"
                                url="/sluzby/design"
                            />
                        </li>
                        <li onMouseEnter={() => { setDisplayRef(influence) }}>
                            <PravaMirandaLink 
                                title="Influencing"
                                url="/sluzby/influencer"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PravaMiranda