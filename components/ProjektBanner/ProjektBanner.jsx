import styles from './ProjektBanner.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function ProjektBanner () {
    return (
        <div className={`${styles.projektBanner}`}>
            <div className='container columns col-4-6'>
                <div className="column">
                    <div className={styles.rocket}>
                        <Image src="/img/rocket.png" width={632} height={653} alt=""></Image>
                    </div>
                </div>
                <div className="column">
                    <h2>Nastartujte váš projekt</h2>
                    <p>Miranda od počátku tvrdí, že je to hlavně o lidech, co umí vzít za práci a do každýho projektu přinesou pořádnej zápal a nadšení! Tahle energie se pak šíří napříč celým týmem. Není pak divu, že vznikaj projekty, na který můžete být právem pyšní!</p>
                    <Link href="/kontakty">
                        <a className="btn btn-tertiary">
                            <span data-hover="Spojit se s Mirandou">
                                Spojit se s Mirandou
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjektBanner