import styles  from './CoONasRikaji.module.scss'
import { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown"
import FetchedImage from '../FetchedImage/FetchedImage'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const CoONasRikaji = (props) => {
    const tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    const [activeData, setActiveData] = useState(0)
    const [textToggled, setTextToggled] = useState(false)
    const [isDesktop, setDesktop] = useState()
    const maxRefIndex = props.data.length - 1
    
    const prevRef = () => {
        if (activeData > 0) {
            setActiveData(activeData-1)
        } else {
            setActiveData(maxRefIndex)
        }
    }
    const nextRef = () => {
        if (activeData < maxRefIndex) {
            setActiveData(activeData+1)
        } else {
            setActiveData(0)
        }
    }
    const toggleText = (e) => {
        e.preventDefault()
        textToggled ? setTextToggled(false) : setTextToggled(true)
    }

    useEffect( () => {
        setDesktop(window.innerWidth > 830)
        window.addEventListener('resize', () => {
            setDesktop(window.innerWidth > 830)
        })

        return () => {
            window.removeEventListener('resize', () => {
                setDesktop(window.innerWidth > 830)
            })
        }
    }, [])

    return (
        <div className={styles.CoONasRikajiSection}>
            <div className='container narrow text-center'>
                <h2>Co říkáte na Mirandu</h2>
                <p className={styles.perex}>I ten slavnej českej šéfík z televize, co zatopil nejednomu gastru, pustil pár slov o Mirandě. No a jak jsme dopadli s jeho novým, 
                    parádně vymazleným e-shopem a co na nás říkají další vybraní klienti...</p>
            </div>
            <div className="container pagination-top">
                { !isDesktop && (
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{
                            clickable: true
                        }}
                    >
                    { props.data && props.data.map( (item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="item">
                                    <div className="columns col-4-6 align-center">
                                        <div className={`column ${styles.image}`}>
                                            <FetchedImage image={item.attributes.obrazek}/>
                                        </div>
                                        <div className={`column ${styles.texts}`}>
                                            <div className='text-center'>
                                                <a href="#" onClick={toggleText} className="btn btn-tertiary">
                                                    <span data-hover="Přečíst celé">
                                                        Přečíst celé
                                                    </span>
                                                </a>
                                            </div>
                                            <ReactMarkdown className={`${textToggled ? styles.toggled : ''} ${styles.description}`}>
                                                {item.attributes.text}
                                            </ReactMarkdown>
                                            <div className={styles.jmeno}>
                                                <div className={styles.author}>
                                                    <strong>{item.attributes.jmeno}</strong>
                                                    <span className={styles.position}>{item.attributes.pozice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }) }
                </Swiper>
                )}
                { isDesktop && (
                    <div className={styles.sliderWrapper}>
                        <div className="item">
                            <div className="columns col-4-6 align-center">
                                <div className={`column ${styles.image}`}>
                                    <FetchedImage image={props.data[activeData].attributes.obrazek}/>
                                    <div className={styles.arrows}>
                                        <div className={`${styles.arrowLeft} ${styles.arrow}`} onClick={prevRef}>
                                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807613 19.9792 0.807613 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM-1.31134e-07 13.5L30 13.5L30 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"/>
                                            </svg>
                                        </div>
                                        <div className={`${styles.arrowReft} ${styles.arrow}`} onClick={nextRef}>
                                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807613 19.9792 0.807613 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM-1.31134e-07 13.5L30 13.5L30 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"/>
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
                                    <ReactMarkdown className={`${textToggled ? styles.toggled : ''} ${styles.description}`}>
                                        {props.data[activeData].attributes.text}
                                    </ReactMarkdown>
                                    <div className={styles.jmeno}>
                                        <div className={styles.author}>
                                            <strong>{props.data[activeData].attributes.jmeno}</strong>
                                            <span className={styles.position}>{props.data[activeData].attributes.pozice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CoONasRikaji