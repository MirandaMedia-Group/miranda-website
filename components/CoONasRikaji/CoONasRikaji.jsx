import styles  from './CoONasRikaji.module.scss'
import Image from "next/image"
import Link from 'next/link'

const CoONasRikaji = () => {
    return (
        <div className={styles.CoONasRikajiSection}>
            <div className='container'>
                <h2>Co o náš říkají</h2>
                <div className="slider-wrapper">
                    <div className="item">
                        <div className="columns col-1-3 align-center">
                            <div className="image column">
                                <Image src="/img/pohlreich.jpg" width={590} height={590} alt="Zdeněk Pohlreich"></Image>
                            </div>
                            <div className="texts column">
                                <p><strong>Spolupráci s Miranda Media si velice cením</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="perex">
                                    <Link href="#">
                                        <a className='btn btn-secondary'>Přečíst celý rozhovor</a>
                                    </Link>
                                    <Link href="#">
                                        <a className='btn btn-primary'>Přehrát video</a>
                                    </Link>
                                    <div className="author">
                                        <strong>Markéta Zrnková</strong>
                                        <span className="position">marketing specialist ve společnosti Penny</span>
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