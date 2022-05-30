import styles from './Spoluprace.module.scss'
import Image from 'next/image'
import Link from 'next/link';

const Spoluprace = () => {
    return (
        <>
            <div className={`columns col-1-4 wider align-center ${styles.section}`}>
                <div className='column'>
                    <h2>Proč si začít s Mirandou?</h2>
                    <p>Protože tahle agenturní dáma umí být věrná a spolehlivá každým coulem. Pro svého zákazníka udělá, co mu na očích vidí a nikdy 
                        nenechá ležet kdejakou pořádnou výzvu bokem.</p>
                    <div className={styles.mobileHidden}>
                        <Link href="/proc-s-nami">
                            <a className='btn btn-primary'>
                                <span data-hover="Více o nás">
                                    Více o nás
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`column ${styles.images}`}>
                    <div className={`${styles.image} ${styles.image1}`}>
                        <Image src="/img/proc-s-nami1.jpg" width={400} height={400} alt=""></Image>
                    </div>
                    <div className={`${styles.image} ${styles.image2}`}>
                        <Image src="/img/proc-s-nami2.jpg" width={508} height={508} alt=""></Image>
                    </div>
                    <div className={`${styles.image} ${styles.image3}`}>
                        <Image src="/img/proc-s-nami3.jpg" width={300} height={300} alt=""></Image>
                    </div>
                </div>
            </div>
            <div className={`buttons-wrapper ${styles.desktopHidden}`}>
                <Link href="/proc-s-nami">
                    <a className='btn btn-primary'>
                        <span data-hover="Více o nás">
                            Více o nás
                        </span>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Spoluprace