import styles from "./PravaMiranda.module.scss"
import Image  from 'next/image'
import Link from 'next/link'



const PravaMiranda = () => {
    return (
        <>
            <div>
                <div className={styles.sluzby}>
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
                        <Image src="/img/weby.jpg" width={710} height={290}  layout="fill" alt="" />
                            <div className={styles.text}>
                                <h4><span>Miranda</span>Weby &amp; e-shopy na klíč</h4>
                                <Link href="/weby">
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
                </div>
            </div>
        </>
    )
}

export default PravaMiranda