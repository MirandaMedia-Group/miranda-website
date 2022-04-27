import styles from './Projekty.module.scss'
import Image from 'next/image'


const Projekty = () => {
    return (
        <div className={`container ${styles.projekty}`}>
            <h2 className={styles.title}>Mirandiny projekty</h2>
            <p>Tohle je naše rodina. Projekty, do kterých jsme vstoupili nebo je od samotnýho začátku vystavěli. 
                Tak to omrkněte, protože Miranda není pouze digitálně naladěná agentura.</p>
            <div className={styles.slider}>
                <div className={styles.projekt}>
                    <Image src="/img/man-black.svg" width={150} height={150}></Image>
                    <h5>Obchod se slovy</h5>
                    <p>Copywriting a obsahový marketing</p>
                </div>
                <div className={styles.projekt}>
                    <Image src="/img/produktovka.svg" width={150} height={150}></Image>
                    <h5>Produktové fotografie</h5>
                    <p>Produktové fotografie</p>
                </div>
                <div className={styles.projekt}>
                    <Image src="/img/lemito.svg" width={150} height={150}></Image>
                    <h5>LemitoMedia</h5>
                    <p>Naše původní agentura</p>
                </div>
                <div className={styles.projekt}>
                    <Image src="/img/epiderma.svg" width={150} height={150}></Image>
                    <h5>Epiderma</h5>
                    <p>Kosmetika a CBD produkty</p>
                </div>
            </div>
        </div>
    )
}

export default Projekty