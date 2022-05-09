import styles from "./PravaMiranda.module.scss"
import Image  from 'next/image'
import Link from 'next/link'



const PravaMiranda = () => {
    return (
        <>
            <div className={styles.sluzby}>
                <div className={styles.sluzba}>
                    <div className={`${styles.text} ${styles.miranda}`}>
                        <h2>Miranda je ta pravá</h2>
                        <p>Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu přidáte pár 
                            nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní! </p>
                    </div>
                </div>
                <Link href="/sluzby/ppc-vyhledavace" passHref>
                    <div className={styles.sluzba}>
                        <Image src="/img/ppc.jpg" width={710} height={290} alt=""/>
                        <div className={styles.text}>
                            <h3><span>Miranda</span>PPC &amp; zbožové vyhledávače</h3>
                                <a className="btn-sm"></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/design" passHref>
                    <div className={styles.sluzba}>
                        <Image src="/img/design.jpg" width={345} height={600} alt=""/>
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Produktový design &amp; kreativa</h3>
                                <a className="btn-sm"></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/socialni-site" passHref>
                    <div className={styles.sluzba}>
                        <Image src="/img/socSite.jpg" width={345} height={600} alt="" />
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Sociální sítě</h3>
                                <a className="btn-sm"></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/weby" passHref>
                    <div className={styles.sluzba}>
                        <Image src="/img/weby.jpg" width={710} height={290} alt="" />
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Weby &amp; e-shopy na klíč</h3>
                                <a className="btn-sm"></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/influencer" passHref>
                    <div className={styles.sluzba}>
                        <Image src="/img/influencer.png" width={710} height={290} alt="" />
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Influencer marketing</h3>
                                <a className="btn-sm"></a>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PravaMiranda