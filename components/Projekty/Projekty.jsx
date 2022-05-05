import styles from './Projekty.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const Projekty = () => {
    return (
        <>
            <div className="container narrow text-center">
                <h2 className={styles.title}>Mirandiny projekty</h2>
                <p>Tohle je naše rodina. Projekty, do kterých jsme vstoupili nebo je od samotnýho začátku vystavěli. 
                    Tak to omrkněte, protože Miranda není pouze digitálně naladěná agentura.</p>
            </div>
            <div className={`container ${styles.projekty}`}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                >
                    <SwiperSlide>
                        <div className={styles.projekt}>
                            <Image src="/img/man-black.svg" width={150} height={150} alt=""></Image>
                            <h5>Obchod se slovy</h5>
                            <p>Copywriting a obsahový marketing</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projekt}>
                            <Image src="/img/produktovka.svg" width={150} height={150} alt=""></Image>
                            <h5>Produktové fotografie</h5>
                            <p>Produktové fotografie</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projekt}>
                            <Image src="/img/lemito.svg" width={150} height={150} alt=""></Image>
                            <h5>LemitoMedia</h5>
                            <p>Naše původní agentura</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projekt}>
                            <Image src="/img/epiderma.svg" width={150} height={150} alt=""></Image>
                            <h5>Epiderma</h5>
                            <p>Kosmetika a CBD produkty</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Projekty