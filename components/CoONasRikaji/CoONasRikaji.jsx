import styles  from './CoONasRikaji.module.scss'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import FetchedImage from '../FetchedImage/FetchedImage'

const CoONasRikaji = (props) => {
    const tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    const [activeData, setActiveData] = useState(0)
    const maxRefIndex = props.data.length - 1
    
    const prevRef = () => {
        if (activeData > 0) setActiveData(activeData-1)
    }
    const nextRef = () => {
        if (activeData < maxRefIndex) setActiveData(activeData+1)
    }

    return (
        <div className={styles.CoONasRikajiSection}>
            <div className='container narrow text-center'>
                <h2>Co říkáte na Mirandu</h2>
                <p>I ten slavnej českej šéfík z televize, co zatopil nejednomu gastru, pustil pár slov o Mirandě. No a jak jsme dopadli s jeho novým, 
                    parádně vymazleným e-shopem a co na nás říkají další vybraní klienti...</p>
            </div>
            <div className="container">
                <div className={styles.sliderWrapper}>
                    <div className="item">
                        <div className="columns col-4-6 align-center">
                            <div className={`column ${styles.image}`}>
                                <FetchedImage image={props.data[activeData].attributes.obrazek} />
                                <div className={styles.arrows}>
                                    <div className={`${styles.arrowLeft} ${styles.arrow}`} onClick={prevRef}>
                                        <svg width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26 1L2 25L26 49" stroke="white" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className={`${styles.arrowReft} ${styles.arrow}`} onClick={nextRef}>
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
                                <ReactMarkdown>
                                    {props.data[activeData].attributes.text}
                                </ReactMarkdown>
                                <div className={styles.perex}>
                                    <div className={styles.author}>
                                        <strong>{props.data[activeData].attributes.jmeno}</strong>
                                        <span className={styles.position}>{props.data[activeData].attributes.pozice}</span>
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