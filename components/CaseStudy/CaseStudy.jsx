import ReferenceItem from '../ReferenceItem/ReferenceItem'
import styles from './CaseStudy.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'

const CaseStudy = (props) => {
    return (
        <>
            <section className='container'>
                <div className={styles.top}><h2>Další case study</h2><p>Omrkněte i další případovky neméně zajímavých projektů jako je tento. </p></div>
            </section>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                navigation
                pagination
            >
            </Swiper>
        </>
    )
}

export default CaseStudy