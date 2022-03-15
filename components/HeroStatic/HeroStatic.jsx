import Image from "next/image"
import Link from "next/link"
import styles from './HeroStatic.module.scss'

const HeroStatic = () => {
    return (
        <div className={styles.hero}>
            <Image src="/img/eshopy-hero.png" width="1920" height="1080" alt="" />
            <div className={styles.itemTexts}>
                <div className="container">
                    <h1>Připravíme vám Shoptet na míru</h1>
                    <p>Kompletní e-shopové řešení za nejkratší možnou dobu</p>
                    <div className="buttons-wrapper">
                        <Link href="/kontakty">
                            <a className="btn btn-primary">Chci Shoptetové řešení</a>
                        </Link>
                        <Link href="/reference">
                            <a className="btn btn-secondary">Naše práce</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroStatic