import HeroStatic from "../../components/HeroStatic/HeroStatic";
import Image from "next/image";
import styles from "../../styles/reference.module.scss";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import { fetchAPI } from "../../lib/api";

const ReferencePeugeot = ({ reference }) => {
    return (
        <>
            <section className={styles.reference}>
                <section>
                <HeroStatic
                    title="Autorizovaný prodej vozů Peugeot"
                    image="/img/reference-peugeot.jpg"
                    url="www.autotop-ul.cz"
                />
                </section>
                <section className="container">
                    <section className={`columns wider col-1-4 align-center  ${styles.absolute}`}>
                        <div className="column">
                            <h2>Nový začátek</h2>
                            <p>Pro Fair Autotop, tradičního dealera vozů Peugeot jsme začali spravovat PPC kampaně pomocí Google Ads a Sklik. Vše s jasným cílem, optimalizovat současné kampaně a zajistit zvýšení zájmu o nákup a servis vozů.</p>
                        </div>
                        <div className={`column row ${styles.images} `}>
                            <div><Image src="/img/peugeot.jpg" width={450} height={450} alt=""  /></div>
                            <div><Image src="/img/peugeot2.jpg" width="250" height="450" alt="" /></div>
                            <div><Image src="/img/peugeot3.jpg" width="350" height="450" alt="" /></div>
                        </div>
                    </section>
                    <section className={styles.spolupraceGrid}>
                        <div className={`${styles.item} ${styles.large}` }>
                            <h2>Výsledky spolupráce</h2>
                            <p>Ihned po optimalizaci kampaní jsme sledovali obrovské zlepšení z pohledu všech metrik – nárůst návštěvnosti webu, online poptávky na nové vozy, čas strávený na webu a s tím spojená míra okamžitého opuštění stránek. Nárust těchto metrik vedl k požadovanému nárůstu tržeb na straně klienta.</p>
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">-62,3%</span>Snížení nákladů na 1 online poptávku : <span>SNÍŽENÍ PNO</span></p>
                        </div>
                        <div className={styles.item}>
                            <Image src="/img/peugeotVysledky.jpg" width={360} height={360} alt="" />
                        </div>
                        <div className={styles.item}>
                            <Image src="/img/peugeotVysledky2.jpg" width={360} height={360} alt="" />
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">+169%</span>Do 3 měsíců od zahájení spolupráce: <span>Nárůst poptávek</span></p>
                        </div>
                        <div className={styles.item}>
                            <Image src="/img/peugeotVysledky3.jpg" width={360} height={360} alt="" />
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">-36%</span>Snížení míry okamžitého opuštění webu</p>
                        </div>
                    </section>
                    <section className={styles.banner}>
                        <Image src="/img/peugeotBanner2.jpg" width={1440} height={574} alt="peugoet" />
                        <div className={styles.text}>
                            <h2>Příběh pokračuje</h2>
                            <p>Nadále jsme marketingovou a strategickou součástí společnosti  Fair Autotop. Máme společný dlouhodobý a jasný cíl – udržovat povědomí o prémiové kvalitě dodávaných služeb, podpořit prodej nových vozů a nadále zvyšovat spokojenost stávajících klientů.</p>
                        </div>
                    </section>
                </section>
                <CaseStudy reference={reference}></CaseStudy>

            </section>
        
        </>
    )
}

export default ReferencePeugeot

export async function getStaticProps() {
    const referenceRes = await fetchAPI('/references', { populate: '*' })
  
    return {
        props: {
            reference: referenceRes.data,
        },
        revalidate: 1,
    }
}