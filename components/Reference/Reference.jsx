import Image from 'next/image'
import Link from 'next/link'
import ReferenceItem from '../ReferenceItem/ReferenceItem'

import styles from './Reference.module.scss'

const Reference = () => {
    return (
        <>
            <div className={`columns col-1-4 align-center ${styles.reference}`}>
                <div className="column">
                    <h2>Reference</h2>
                </div>
                <div className="column">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className={styles.referenceGrid}>
                <ReferenceItem></ReferenceItem>
                <ReferenceItem></ReferenceItem>
                <ReferenceItem></ReferenceItem>
                <ReferenceItem></ReferenceItem>
                <ReferenceItem></ReferenceItem>
                <ReferenceItem></ReferenceItem>
            </div>
            <div className={styles.partnersBrands}>

            </div>
            <div className={styles.buttons}>
                <Link href="/reference">
                    <a className={`btn btn-secondary ${styles.btnSecondary}`}>Přejít na reference</a>
                </Link>
                <Link href="/kontakty">
                    <a className="btn btn-primary">Poptat řešení</a>
                </Link>
            </div>
        </>
    )
}

export default Reference
