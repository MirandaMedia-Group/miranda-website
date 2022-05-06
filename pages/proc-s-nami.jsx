import HeroStatic from '../components/HeroStatic/HeroStatic'
import styles from '../styles/proc-s-nami.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section>
        <HeroStatic 
          title=""
          subtitle=""
          image="/img/proc-s-nami.jpg"
          buttons='false'
        />
      </section>
      <section className='text-center'>
        <div className="container narrow">
          <h2>Miranda</h2>
          <p>Jsme mladá agentura, ale se spoustou zkušeností elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
        </div>
        <div className={`container ${styles.grid}`}>
          <div className={`${styles.itemWide} ${styles.textItem}`}>
            <h3>Jak to všechno začalo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className={styles.itemWide}>
            <Image src="/img/grid1.jpg" width={700} height={710} alt="" layout="responsive"></Image>
          </div>
          <div>
            <Image src="/img/grid2.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div className={styles.textItem}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div>
            <Image src="/img/grid3.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div className={`${styles.textItem} text-center`}>
            <p><strong>25 <span>profesionálů</span></strong></p>
          </div>
          <div>
            <Image src="/img/grid2.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div>
            <Image src="/img/grid4.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div className={`${styles.itemWider} ${styles.textItem}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <Link href="/jak-to-funguje">
              <a className='btn btn-primary'>Zjisti jak to u nás funguje</a>
            </Link>
          </div>
          <div>
            <Image src="/img/grid5.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div>
            <Image src="/img/grid6.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div>
            <Image src="/img/grid4.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div>
            <Image src="/img/grid2.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div className={styles.itemWider}>
            <Image src="/img/grid7.jpg" width={953} height={466} alt="" layout="responsive"></Image>
          </div>
          <div className={styles.textItem}>
            <p><strong>15 let <span>zkušeností</span></strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
          </div>
          <div>
            <Image src="/img/grid5.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div className={styles.textItem}>
            <p><strong>Tomáš Cina <span>Jednatel společnosti</span></strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
          </div>
          <div>
            <Image src="/img/grid6.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div className={`${styles.textItem} text-center`}>
            <p><strong>150 <span>projektů</span></strong></p>
          </div>
          <div>
            <Image src="/img/grid2.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
          <div>
            <Image src="/img/grid4.jpg" width={466} height={466} alt="" layout="responsive"></Image>
          </div>
        </div>
      </section>
    </>
  )
}