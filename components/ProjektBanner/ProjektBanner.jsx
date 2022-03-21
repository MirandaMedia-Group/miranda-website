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
                    <h2>Nastartujte <span>váš projekt</span></h2>
                    <p><strong>Každý den vznikne po celým světě nepřeberný množství nápadů a  nových projektů.</strong> Jedny z nich skončej dřív, než řeknete švec a za nedlouho po nich ani pes neštěkne. 
                        Jenomže ty dobrý projekty rostou, vyvíjej se, inspirujou a přitahujou pozornost ostatních. V čem je ale rozdíl a kde se láme chleba? Miranda věří, že je to hlavně o lidech, 
                        kteří jsou produktem svých vlastních myšlenek stejně jako jejich projekty a partnerství, která vznikají.</p>
                    <Link href="/kontakty">
                        <a className="btn">Kontaktujte nás</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjektBanner