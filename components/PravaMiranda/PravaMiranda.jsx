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
                <Link href="/sluzby/design" passHref>
                    <div className={`${styles.sluzba} ${styles.vertical}`} style={{backgroundImage:'url(/img/design.png)'}}>
                        {/* <Image src="/img/design.png" width={345} height={600} alt=""/> */}
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Produktový design</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/socialni-site" passHref>
                    <div className={`${styles.sluzba} ${styles.vertical}`} style={{backgroundImage:'url(/img/socSite.png)'}}>
                        {/* <Image src="/img/socSite.png" width={345} height={600} alt="" /> */}
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Sociální sítě</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/ppc-vyhledavace" passHref>
                    <div className={styles.sluzba} style={{backgroundImage:'url(/img/ppc.png)'}}>
                        {/* <Image src="/img/ppc.png" width={710} height={290} alt=""/> */}
                        <div className={styles.text}>
                            <h3><span>Miranda</span>PPC</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/weby" passHref>
                    <div className={styles.sluzba} style={{backgroundImage:'url(/img/weby.png)'}}>
                        {/* <Image src="/img/weby.png" alt="" layout="fill" objectFit="cover"/> */}
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Weby &amp; e-shopy</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
                <Link href="/sluzby/influencer" passHref>
                    <div className={styles.sluzba} style={{backgroundImage:'url(/img/influencer2.png)'}}>
                        {/* <Image src="/img/influencer2.png" alt="" layout="fill" objectFit="cover"/> */}
                        <div className={styles.text}>
                            <h3><span>Miranda</span>Influencing</h3>
                            <a className={`${styles.btn} btn-sm`}></a>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PravaMiranda