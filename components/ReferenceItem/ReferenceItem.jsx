import Image from "next/image"

import styles from './ReferenceItem.module.scss'

const ReferenceItem = () => {
    return (
        <div className={styles.item}>
            <Image src="/img/reference.jpg" alt="" width="710" height="710" />
            <div className={styles.logo}>
                <Image src="/img/reference-logo.png" alt="" width="203" height="82" />
            </div>
            <div className={styles.link}>
                <a href="#" className="btn">O projektu</a>
            </div>
        </div>
    )
}

export default ReferenceItem