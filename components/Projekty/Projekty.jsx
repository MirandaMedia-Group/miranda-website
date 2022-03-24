import styles from './Projekty.module.scss'
import Image from 'next/image'

const Projekty = () => {
    return (
        <div className={`container ${styles.projekty}`}>
            <h2 className={styles.title}><span className='green'>Mirandiny</span> projekty</h2>
            <p>Projekty které nám patří lorem ipsum dolor sit amet dolor sit amet.</p>
            <div className={styles.slider}>
                <div className={styles.projekt}>
                    <Image src="/img/man-black.svg" width={150} height={150}></Image>
                    <h5>Obchod se slovy</h5>
                    <p><strong>Copywriterská agenturka</strong> lorem ipsum dolor sit.</p>
                </div>
                <div className={styles.projekt}>
                    <Image src="/img/produktovka.svg" width={150} height={150}></Image>
                    <h5>Produktové fotografie</h5>
                    <p><strong>Fotografie přímo od nás</strong> lorem ipsum dolor sit.</p>
                </div>
                <div className={styles.projekt}>
                    <Image src="/img/lemito.svg" width={150} height={150}></Image>
                    <h5>LemitoMedia</h5>
                    <p>Copywriterská agentura lorem ipsum dolor sit.</p>
                </div>
                <div className={styles.projekt}>
                    <Image src="/img/epiderma.svg" width={150} height={150}></Image>
                    <h5>Epiderma</h5>
                    <p>Kosmetika lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Projekty