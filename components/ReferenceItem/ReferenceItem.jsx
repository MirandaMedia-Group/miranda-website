import Link from "next/link"
import FetchedImage from "../FetchedImage/FetchedImage"

import styles from './ReferenceItem.module.scss'

const ReferenceItem = (props) => {
    return (
        <Link href={`/reference/${props.data.attributes.slug}`} passHref>
            <div className={`${styles.item} ${props.isHomepage ? styles.itemHp : ''}`} style={{backgroundColor: props.data.attributes.barva_pozadi}}>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
                <FetchedImage
                    image={props.data.attributes.thumbnail}
                />
                <div className={styles.logo}>
                    <div>
                        <FetchedImage
                            image={props.data.attributes.logo}
                            responsive={false}
                        />
                    </div>
                </div>
                <div className={styles.link}>
                        <a className="btn">O projektu</a>
                </div>
            </div> 
        </Link>
    )
}

export default ReferenceItem