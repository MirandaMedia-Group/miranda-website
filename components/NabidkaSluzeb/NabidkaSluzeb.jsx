import styles from  './NabidkaSluzeb.module.scss'
import Link from 'next/link'

const NabidkaSluzeb = () => {
    return (
        <div className="container">
            <h2 className={styles.title}>Komplexní nabídka digitálních služeb</h2>
            <p className={styles.par}>Proč chodit jinam, když můžete získat všechny potřebné služby v digitalu a marketingu na jednom místě!</p>
            <div className={styles.sluzby}>
                <div className={styles.sluzba}>
                    <p className={styles.poradi}>01</p>
                    <h4>Shoptet & Shoptet Premium</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link href="e-shopy">
                        <a className={`btn-sm ${styles.btnSm}`}></a>
                    </Link>
                </div>
                <div className={styles.sluzba}>
                    <p className={styles.poradi}>02</p>
                    <h4>Software na míru</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <Link href="/#">
                        <a className={`btn-sm ${styles.btnSm}`}></a>
                    </Link>
                </div>
                <div className={styles.sluzba}>
                    <p className={styles.poradi}>03</p>
                    <h4>Produktové fotografie</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link href="/#">
                        <a className={`btn-sm ${styles.btnSm}`}></a>
                    </Link>
                </div>
                <div className={styles.sluzba}>
                    <p className={styles.poradi}>04</p>
                    <h4>Mobilní aplikace</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..</p>
                    <Link href="/#">
                        <a className={`btn-sm ${styles.btnSm}`}></a>
                    </Link>
                </div>
            </div>
        </div>
    )
} 

export default NabidkaSluzeb