import styles from "./PravaMiranda.module.scss"
import Image  from 'next/image'
import Link from 'next/link'



const PravaMiranda = () => {
    return (
        <>
            <div>
                <div className={styles.sluzby}>
                    <div className={styles.sluzba}>
                        <div className={`${styles.text} ${styles.miranda}`}>
                            <h3>Miranda je ta pravá</h3>
                            <p>Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu přidáte pár 
                                nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní! </p>
                        </div>
                    </div>
                    <div className={styles.sluzba}>
                        <Image src="/img/ppc.jpg" width={710} height={290} layout="fill" alt=""/>
                        <div className={styles.text}>
                            <h4><span>Miranda</span>PPC &amp; zbožové vyhledávače</h4>
                            <Link href="/copywriting">
                                <a className="btn-sm"></a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sluzba}>
                        <Image src="/img/design.jpg" width={345} height={600} layout="fill" alt=""/>
                        <div className={styles.text}>
                            <h4><span>Miranda</span>Produktový design &amp; kreativa</h4>
                            <Link href="/design">
                                <a className="btn-sm"></a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sluzba}>
                        <Image src="/img/socSite.jpg" width={345} height={600} alt="" />
                        <div className={styles.text}>
                            <h4><span>Miranda</span>Sociální sítě</h4>
                            <Link href="/socialni-site">
                                <a className="btn-sm"></a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sluzba}>
                        <Image src="/img/weby.jpg" width={710} height={290}  layout="fill" alt="" />
                        <div className={styles.text}>
                            <h4><span>Miranda</span>Weby &amp; e-shopy na klíč</h4>
                            <Link href="/weby">
                                <a className="btn-sm"></a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sluzba}>
                        <Image src="/img/influencer.png" width={710} height={290}  layout="fill" alt="" />
                        <div className={styles.text}>
                            <h4><span>Miranda</span>Influencer</h4>
                            <Link href="/weby">
                                <a className="btn-sm"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PravaMiranda