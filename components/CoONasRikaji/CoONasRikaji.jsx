import styles  from './CoONasRikaji.module.scss'
import Image from "next/image"
import Link from 'next/link'

const CoONasRikaji = () => {
    const tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return (
        <div className={styles.CoONasRikajiSection}>
            <div className='container'>
                <h2>Co říkáte na Mirandu</h2>
                <p className='text-center narrow'>I ten slavnej českej šéfík z televize, co zatopil nejednomu gastru, pustil pár slov o Mirandě. No a jak jsme dopadli s jeho novým, parádně vymazleným e-shopem a co na nás říkají další vybraní klienti...</p>
                <div className={styles.sliderWrapper}>
                    <div className="item">
                        <div className="columns col-4-6 align-center">
                            <div className={`column ${styles.image}`}>
                                <Image src="/img/pohlreich.jpg" width={590} height={590} alt="Zdeněk Pohlreich"></Image>
                                <div className={styles.arrows}>
                                    <div className={`${styles.arrowLeft} ${styles.arrow}`}>
                                        <svg width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26 1L2 25L26 49" stroke="white" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className={`${styles.arrowReft} ${styles.arrow}`}>
                                        <svg width="27" height="50" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L19.5 19.5L1 38" stroke="white" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.tiles}>
                                    {
                                        tiles.map( (tile, index) => {
                                                return <div className={styles.tile} key={index}></div>
                                            }   
                                        )
                                    }
                                </div>
                            </div>
                            <div className={`column ${styles.texts}`}>
                                <p><strong>Spolupráci s Mirandou jsme započali koncem roku 2021.</strong> Lidé z Mirandy nás vyhledali a oslovili sami, a tak jsme jednoho dne zasedli ke společnému stolu. 
                                    Dostali jsme nabídku na zpracování e-shopu na míru pro náš nově vznikající podnik butikové cukrárny, který chystáme otevřít v průběhu roku 2022. 
                                    Spolupráce se nám vydařila a  e-shop jsme vytvořili. <strong>Celý proces realizace proběhl podle předem dohodnutých postupů a termínů, bez zbytečných obezliček. </strong>
                                    Jednu věc máme za sebou ale nezůstali jsme u ní a s dalšími projekty společné navazujeme. Spolehlivosti si totiž cením, v kuchyni se bez ní nedá existovat.</p>
                                <div className={styles.perex}>
                                    <div className={styles.author}>
                                        <strong>Zdeněk Pohlreich</strong>
                                        <span className={styles.position}>Majitel Café Imperial</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoONasRikaji