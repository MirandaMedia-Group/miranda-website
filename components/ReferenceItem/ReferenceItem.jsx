import Image from "next/image"
import Link from "next/link"
import FetchedImage from "../FetchedImage/FetchedImage"

import styles from './ReferenceItem.module.scss'


const ReferenceItem = (props) => {
    return (
        <Link href={`/reference/${props.data.attributes.slug}`} passHref>
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
                        <a className="btn">O projektu</a>
                </div>
            </div> 
        </Link>
    )
}

export default ReferenceItem