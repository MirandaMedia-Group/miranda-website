import Image from "next/image"
import Link from "next/link"
import FetchedImage from "../FetchedImage/FetchedImage"

import styles from './ReferenceItem.module.scss'


const ReferenceItem = (props) => {
    return (
        <div className={styles.item}>
            <FetchedImage
                image={props.data.attributes.thumbnail}
            />
            <div className={styles.logo}>
                <FetchedImage
                    image={props.data.attributes.logo}
                    responsive={false}
                />
            </div>
            <div className={styles.link}>
                <Link href={`/reference/${props.data.attributes.slug}`} className="btn">
                    <a>O projektu</a>
                </Link>
            </div>
        </div> 
    )
}

export default ReferenceItem