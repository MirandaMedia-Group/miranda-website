import Image from "next/image"
import Link from "next/link"

import styles from './ReferenceItem.module.scss'


const ReferenceItem = (props) => {
    const tmb = props.data.attributes.thumbnail.data.attributes,
      logo = props.data.attributes.logo.data.attributes

    return (
        <div className={styles.item}>
            <Image src={'http://164.92.206.112:1337' + tmb.url} alt="" width={tmb.width} height={tmb.height} />
            <div className={styles.logo}>
                <Image src={'http://164.92.206.112:1337' + logo.url} alt="" width={logo.width} height={logo.height} />
            </div>
            <div className={styles.link}>
                <Link href={`/detail-reference/${props.data.id}`} className="btn">
                    <a>O projektu</a>
                </Link>
            </div>
        </div>
        
    )
}

export default ReferenceItem