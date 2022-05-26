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
                        <Link href="/jak-to-funguje">
                            <a className='btn btn-primary'>
                                <span data-hover="Zjisti, jak to u nás funguje">
                                    Zjisti, jak to u nás funguje
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`column ${styles.images} ${styles.mobileHidden2}`}>
                    <div className={styles.image}>
                        <Image src='/img/kancelar.jpg' width={450} height={450} alt="" priority={true}/>
                    </div>
                    <div className={`${styles.image} ${styles.video}`}>
                        <Image src='/img/kancelar2.jpg' width={250} height={450} alt="" priority={true}/>
                    </div>
                    <div className={styles.image}>
                        <Image src='/img/kancelar3.jpg' width={350} height={450} alt="" priority={true}/>
                    </div>
                </div>
                <div className={`column ${styles.images} ${styles.desktopHidden2}`}>
                    <div className={styles.image}>
                        <Image src='/img/kancelar.jpg' width={450} height={450} alt="" layout='responsive' priority={true}/>
                    </div>
                    <div className={`${styles.image} ${styles.video}`}>
                        <Image src='/img/kancelar2.jpg' width={250} height={450} alt="" layout='responsive' priority={true}/>
                    </div>
                    <div className={styles.image}>
                        <Image src='/img/kancelar3.jpg' width={350} height={450} alt=""  layout='responsive' priority={true}/>
                    </div>
                </div>
            </div>
            <div className={`buttons-wrapper ${styles.desktopHidden}`}>
                <Link href="/proc-s-nami">
                    <a className='btn btn-primary'>
                        <span data-hover="Zjisti, jak to u nás funguje">
                            Zjisti, jak to u nás funguje
                        </span>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Spoluprace