import styles  from './CoONasRikaji.module.scss'
import Image from "next/image"
import Link from 'next/link'

const CoONasRikaji = () => {
    const tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return (
        <div className={styles.CoONasRikajiSection}>
            <div className='container'>
                <h2>Co o náš říkají</h2>
                <div className="slider-wrapper">
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
                                <p><strong>Spolupráci s Miranda Media si velice cením</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className={styles.perex}>
                                    <Link href="#">
                                        <a className={`btn btn-secondary ${styles.btn}`}>Přečíst celý rozhovor</a>
                                    </Link>
                                    <Link href="#">
                                        <a className={`btn btn-primary ${styles.btn}`}>Přehrát video</a>
                                    </Link>
                                    <div className={styles.author}>
                                        <strong>Markéta Zrnková</strong>
                                        <span className={styles.position}>marketing specialist ve společnosti Penny</span>
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