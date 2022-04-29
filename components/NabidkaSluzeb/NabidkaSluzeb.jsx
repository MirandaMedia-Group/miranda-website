import styles from  './NabidkaSluzeb.module.scss'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const NabidkaSluzeb = () => {
    return (
        <>
            <div className="container narrow text-center">
                <h2 className={styles.title}>Komplexní nabídka digitálních služeb</h2>
                <p>Proč chodit jinam, když můžete získat všechny potřebné služby v digitalu a marketingu na jednom místě!</p>
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                >
                    <SwiperSlide>
                        <div className={styles.sluzba}>
                            <p className={styles.poradi}>01</p>
                            <h4>Shoptet &amp; Shoptet Premium</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Link href="/e-shopy">
                                <a className={`btn-sm ${styles.btnSm}`}></a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.sluzba}>
                            <p className={styles.poradi}>02</p>
                            <h4>Software na míru</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <Link href="/#">
                                <a className={`btn-sm ${styles.btnSm}`}></a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.sluzba}>
                            <p className={styles.poradi}>03</p>
                            <h4>Produktové fotografie</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Link href="/#">
                                <a className={`btn-sm ${styles.btnSm}`}></a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.sluzba}>
                            <p className={styles.poradi}>04</p>
                            <h4>Mobilní aplikace</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..</p>
                            <Link href="/#">
                                <a className={`btn-sm ${styles.btnSm}`}></a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.sluzba}>
                            <p className={styles.poradi}>04</p>
                            <h4>Mobilní aplikace</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..</p>
                            <Link href="/#">
                                <a className={`btn-sm ${styles.btnSm}`}></a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.sluzba}>
                            <p className={styles.poradi}>04</p>
                            <h4>Mobilní aplikace</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..</p>
                            <Link href="/#">
                                <a className={`btn-sm ${styles.btnSm}`}></a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.sluzba}>
                            <p className={styles.poradi}>04</p>
                            <h4>Mobilní aplikace</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..</p>
                            <Link href="/#">
                                <a className={`btn-sm ${styles.btnSm}`}></a>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.ourServiceBtn}>
                    <Link href="/sluzby">
                        <a className="btn btn-tertiary">Naše služby</a>
                    </Link>
                </div>
            </div>
        </>
    )
} 

export default NabidkaSluzeb