import Image from "next/image"
import Link from "next/link"
import styles from './HeroStatic.module.scss'

const HeroStatic = (props) => {
    return (
        <div className={styles.hero}>
           <Image src={props.image} width="1920" height="1080" alt="" />
            <div className={styles.itemTexts}>
                <div className="container">
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                    {
                        props.buttons == 'true' && (
                            <div className="buttons-wrapper">
                                <Link href="/kontakty">
                                    <a className="btn btn-primary">Chci Shoptetové řešení</a>
                                </Link>
                                <Link href="/reference">
                                    <a className="btn btn-secondary">Naše práce</a>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroStatic