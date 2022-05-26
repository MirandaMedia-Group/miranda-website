import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ReferenceItem from '../ReferenceItem/ReferenceItem'

import styles from './Reference.module.scss'


const Reference = (props) => { 
    const router = useRouter()
    const [ isDesktop, setDesktop ] = useState()
    const isHomepage = router.pathname == '/' ? true : false

    useEffect( () => {
        setDesktop(window.innerWidth > 600)
        window.addEventListener('resize', () => {
            setDesktop(window.innerWidth > 600)
        })

        return () => {
            window.removeEventListener('resize', () => {
                setDesktop(window.innerWidth > 600)
            })
        }
    }, [])
    return (
        <>
            { !isDesktop && isHomepage && (
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    { props.data && props.data.map( (item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ReferenceItem data={item} isHomepage={router.pathname == '/' ? true : false}></ReferenceItem>
                            </SwiperSlide>
                        )
                    }) }
                </Swiper>
            )}
            { !isDesktop && !isHomepage && (
                 <div className={`${styles.referenceGrid} ${router.pathname == '/' ? styles.homePage : ''}`}>
                    { props.data && props.data.map( (item, index) => {
                        return <ReferenceItem key={index} data={item} isHomepage={router.pathname == '/' ? true : false}></ReferenceItem>
                    }) }
                </div>
            )}
            { isDesktop && (
                <div className={`${styles.referenceGrid} ${router.pathname == '/' ? styles.homePage : ''}`}>
                    { props.data && props.data.map( (item, index) => {
                        return <ReferenceItem key={index} data={item} isHomepage={router.pathname == '/' ? true : false}></ReferenceItem>
                    }) }
                </div>
            )}
        </>
    )
}
export default Reference
