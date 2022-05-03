import Image from 'next/image'
import Link from 'next/link'
import Formular from '../components/Formular/Formular'
import styles from '../styles/kontakty.module.scss'

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.hero}>
          <Image src="/img/kontakt-hero.jpg" width="1920" height="1080" alt="" layout="responsive"/>
          <div className={styles.itemTexts}>
            <div className="container columns col-2 align-center">
              <div className="column">
                <h1>Kontakty</h1>
                <p>Jankovcova 1596/14b<br/>Praha 7 - Holešovice<br/>Vchod B</p>
                <div className="buttons-wrapper">
                    <a href="tel:00420732264251" className={`btn btn-primary project-phone ${styles.contactButton}`}>+420 732 264 251</a>
                    <a href="mailto:info@mirandamedia.cz" className={`btn btn-primary project-mail ${styles.contactButton}`}>info@mirandamedia.cz</a>
                </div>
              </div>
              <div className={`column ${styles.sidlo}`}>
                <h2>Sídlo společnosti:</h2>
                <p>MirandaMedia Group, s.r.o.<br/>Jankovcova 1596/14b, 170 00<br/>Praha 7 - Holešovice</p>
                <p><strong>IČO:</strong> 08272930<br/><strong>DIČ:</strong> CZ08272930</p>
                <p><strong>BÚ:</strong> 2201649999/2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`text-center`}>
        <div className="container">
          <h2>Kde sídlíme?</h2>
        </div>
        <div className={`${styles.mapSection}`}>
        </div>
      </section>
        <Formular />
    </>
  )
}