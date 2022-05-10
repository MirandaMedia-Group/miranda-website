import styles from './Spoluprace.module.scss'
import Image from 'next/image'
import Link from 'next/link';

const Spoluprace = () => {
    return (
        <div>
            <div className="container">
                <div className={`columns col-1-4 wider align-center ${styles.section}`}>
                    <div className='column'>
                        <h2>Proč si začít s Mirandou?</h2>
                        <p>Protože tahle agenturní dáma umí být věrná a spolehlivá každým coulem. Pro svého zákazníka udělá, co mu na očích vidí a nikdy 
                            nenechá ležet kdejakou pořádnou výzvu bokem.</p>
                    </div>
                    <div className='column'>
                        <div className={styles.images}>
                            <div className={styles.image}>
                                <Image src='/img/kancelar.jpg' width={450} height={450} alt=""/>
                            </div>
                            <div className={styles.image}>
                                <Image src='/img/kancelar2.jpg' width={250} height={450} alt=""/>
                            </div>
                            <div className={styles.image}>
                                <Image src='/img/kancelar3.jpg' width={350} height={450} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns col-4-1 align-center">
                    <div className="column">
                        <ol className={styles.list}>
                            <li>Naši klienti a reference jsou tou nejcennější vizitkou</li>
                            <li>Digitalizujeme podnikání a dodáváme výkon e-shopům více jak 15 let</li>
                            <li>Držíme slovo a přes to vlak nejede</li>
                        </ol>
                    </div>
                    <div className="column text-right">
                        <Link href="/jak-to-funguje">
                            <a className='btn btn-primary'>
                                <span data-hover="Zjisti, jak to u nás funguje">
                                    Zjisti, jak to u nás funguje
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spoluprace