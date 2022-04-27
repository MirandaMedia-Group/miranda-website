import Image from "next/image"
import styles from './HeroCarousel.module.scss'

const HeroCarousel = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.item}>
                <Image src="/img/carousel.jpg" width="1920" height="1080" alt="" />
                <div className={`container ${styles.itemTexts}`}>
                    <h1>E-eshopy na&nbsp;míru</h1>
                </div>
            </div>
            <div className={`container ${styles.scrollDown}`}>
                <div className={styles.arrow}>
                    <svg width="24" height="155" viewBox="0 0 24 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9393 154.061C11.5251 154.646 12.4749 154.646 13.0607 154.061L22.6066 144.515C23.1924 143.929 23.1924 142.979 22.6066 142.393C22.0208 141.808 21.0711 141.808 20.4853 142.393L12 150.879L3.51472 142.393C2.92893 141.808 1.97918 141.808 1.3934 142.393C0.80761 142.979 0.80761 143.929 1.3934 144.515L10.9393 154.061ZM10.5 -1.78873e-08L10.5 153L13.5 153L13.5 1.78873e-08L10.5 -1.78873e-08Z" fill="white"/>
                    </svg>
                    <span>Scrolluj</span>
                </div>
            </div>
            <nav className={styles.carouselNavigation}>
                <ol>
                    <li>
                        Penny
                    </li>
                    <li>
                        PetCenter
                    </li>
                    <li>
                        PetCenter
                    </li>
                    <li>
                        PetCenter
                    </li>
                    <li>
                        PetCenter
                    </li>
                    <li>
                        PetCenter
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default HeroCarousel