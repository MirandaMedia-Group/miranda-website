import Link from "next/link"

import styles from './PravaMirandaLink.module.scss'

const PravaMirandaLink = (props) => {
    return (
        <Link href={props.url} passHref>
            <div className={styles.listItem}>
                <span>Miranda</span>
                <h3>{props.title}</h3>
                <div className={styles.arrow}>
                    <svg width="52" height="24" viewBox="0 0 52 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"/>
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default PravaMirandaLink