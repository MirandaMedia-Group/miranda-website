import ReferenceItem from '../ReferenceItem/ReferenceItem'
import styles from './CaseStudy.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'

const CaseStudy = (props) => {
    return (
        <>
            <section className='container'>
                <div className={`columns col-1-4 align-center reference ${styles.margin}` }>
                    <div className="column">
                        <h2>Další case study</h2>
                    </div>
                    <div className="column">
                        <p>Omrkněte i další případovky neméně zajímavých projektů jako je tento.</p>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    //pagination

                    breakpoints={{
                        767: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    { props.reference && props.reference.map((item,index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ReferenceItem data={item}></ReferenceItem>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </>
    )
}

export default CaseStudy