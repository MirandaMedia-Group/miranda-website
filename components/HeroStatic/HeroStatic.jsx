import Image from "next/image"
import Link from "next/link"
import styles from './HeroStatic.module.scss'

const HeroStatic = (props) => {
    return (
        <div className={`${styles.hero} ${props.overlay && styles.overlay} ${props.bigFont && styles.large}`}>
            { props.video && (
                 <video autoPlay playsInline muted preload="auto" style={{ width: 'auto', height: '100%' }}>
                     <source src={props.video} />
                 </video>
             )}
            { props.image && (
                <div className={styles.heroImage}>
                    <Image src={props.image} width="1920" height="1080" alt="" layout="fill" objectFit="cover"/> 
                </div>
            )}
            <div className={styles.itemTexts}>
                <div className={`container ${ props.maxWidth && styles.maxWidth}`}>
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                    { props.url && (<a href={`https://${props.url}`} className={styles.url} target="_blank" rel="noreferrer">{props.url}</a>) }
                    {
                        props.buttons && (
                            <div className="buttons-wrapper">
                                <a href="#kontakt" className="btn btn-primary">
                                    <span data-hover="Chci Shoptet na klíč">
                                        Chci Shoptet na klíč
                                    </span>
                                </a>
                                <Link href="/reference">
                                    <a className="btn btn-tertiary">
                                        <span data-hover="Naše práce">
                                            Naše práce
                                        </span>
                                    </a>
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