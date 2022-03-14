import styles from './ZamereniItem.module.scss'
import Link from 'next/link'

const ZamereniItem = () => {
    return (
        <div className={styles.zamereniItem}>
            <h5 className={styles.title}>E-shopy</h5>
            <div className={styles.zamereniInnerText}>
            <p className={styles.zamereniText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <Link href="/e-shopy">
                    <a className="btn btn-primary">Zjistit více</a>
                </Link>
            </div>
        </div>
    )
}

export default ZamereniItem