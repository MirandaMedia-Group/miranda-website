import Link from "next/link"
import FetchedImage from "../FetchedImage/FetchedImage"

import styles from './ReferenceItem.module.scss'

const ReferenceItem = (props) => {
    return (
        <Link href={props.data.attributes.url ? props.data.attributes.url : `/reference/${props.data.attributes.slug}`} passHref>
            <div className={`${styles.item} ${props.isHomepage ? styles.itemHp : ''}`}>
                <FetchedImage
                    image={props.data.attributes.thumbnail}
                    layout="responsive"
                />
                <div className={styles.logo}>
                        <FetchedImage
                            image={props.data.attributes.logo}
                        />
                </div>
                <div className={styles.link}>
                        <a>
                            Detail reference
                            <span className={styles.arrow}>
                                <svg width="202" height="24" viewBox="0 0 202 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M201.061 13.0607C201.646 12.4749 201.646 11.5251 201.061 10.9394L191.515 1.39342C190.929 0.807628 189.979 0.807628 189.393 1.39341C188.808 1.9792 188.808 2.92895 189.393 3.51474L197.879 12L189.393 20.4853C188.808 21.0711 188.808 22.0208 189.393 22.6066C189.979 23.1924 190.929 23.1924 191.515 22.6066L201.061 13.0607ZM-1.31134e-07 13.5L200 13.5L200 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="white"/>
                                </svg>
                            </span>    
                        </a>
                </div>
            </div> 
        </Link>
    )
}

export default ReferenceItem