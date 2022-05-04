import Image from "next/image"
import Link from "next/link"
import styles from './HeroStatic.module.scss'

const HeroStatic = (props) => {
    return (
        <div className={styles.hero}>
           { props.image && (<Image src={props.image} width="1920" height="1080" alt="" layout="responsive"/>) }
           { props.video && (
                <video autoPlay style={{ width: '1920px', height: '1080px' }}>
                    <source src={props.video} />
                </video>
            )}
            <div className={styles.itemTexts}>
                <div className={`container ${ props.maxWidth && styles.maxWidth}`}>
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                    { props.url && (<a href={`https://${props.url}`} className={styles.url} target="_blank" rel="noreferrer">{props.url}</a>) }
                    {
                        props.buttons == 'true' && (
                            <div className="buttons-wrapper">
                                <Link href="/kontakty">
                                    <a className="btn btn-primary">Chci Shoptet na klíč</a>
                                </Link>
                                <Link href="/reference">
                                    <a className="btn btn-tertiary">Naše práce</a>
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