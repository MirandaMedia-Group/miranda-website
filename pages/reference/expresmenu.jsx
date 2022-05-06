import HeroStatic from "../../components/HeroStatic/HeroStatic";
import Image from "next/image";
import styles from "../../styles/reference.module.scss";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import { fetchAPI } from "../../lib/api";

const ReferenceExpresmenu = ({ reference }) => {
    return (
        <>
            <section className={styles.reference}>
                <section>
                <HeroStatic
                    title="Tradiční česká jídla z Krkonoš, která šetří čas i peníze"
                    image="/img/reference-expresmenu.jpg"
                    url="www.expresmenu.com"
                />
                </section>
                <section className="container">
                    <section className={`columns wider col-1-4 align-center  ${styles.absolute}`}>
                        <div className="column">
                            <h2>Nový začátek</h2>
                            <p>Pro Expresmenu jsme vymysleli zbrusu novou komunikaci na sociálních sítích. Tak, aby odpovídala nejmodernějším trendům. Uzpůsobena byla primárně pro zvýšení tržeb a povědomí o značce. Včetně nových grafických podkladů.</p>
                        </div>
                        <div className={`column row ${styles.images} `}>
                            <div><Image src="/img/expresmenu1.jpg" width={450} height={450} alt=""  /></div>
                            <div><Image src="/img/expresmenu2.jpg" width="250" height="450" alt="" /></div>
                            <div><Image src="/img/expresmenu3.jpg" width="350" height="450" alt="" /></div>
                        </div>
                    </section>
                    <section className={styles.spolupraceGrid}>
                        <div className={`${styles.item} ${styles.large}` }>
                            <h2>Výsledky spolupráce</h2>
                            <p>Spolupráce již od prvního měsíce vykazovala obrovský nárůst v počtu objednávek. Celkový obrat vystřelil raketově vzhůru a to primárně díky nové detailně promyšlené komunikaci. Díky pravidelné a důkladné práci se nám podařilo zakončit první měsíc s neuvěřitelným posunem oproti měsíci, kdy jsme klienta přebírali</p>
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">+3287%</span>Nárust tržeb</p>
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">+4304%</span>Zvýšení zobrazení reklam</p>
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">-131%</span>Snížení nákladů</p>
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">-14%</span>Snížení PNO</p>
                        </div>
                        <div className={styles.item}>
                            <Image src="/img/expresmenuVysledky.jpg" width={360} height={360} alt="" />
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">-200 KČ</span>Snížení nákladu na jeden nákup</p>
                        </div>
                    </section>
                    <section className={styles.banner}>
                        <Image src="/img/expresmenuBanner.jpg" width={1440} height={574} alt="expresmenu" />
                        <div className={styles.text}>
                            <h2>Příběh pokračuje</h2>
                            <p>Klient Expresmenu je pro nás jasným příkladem dobře odvedené práce. Jsme rádi, že jsme sociální sítě mohli převzít a vymyslet novou strategii. Konverzní poměr šel raketově nahoru a to i díky tomu, že se staráme již nyní o kompletně celý marketing klienta.</p>
                        </div>
                    </section>
                </section>
                <CaseStudy reference={reference}></CaseStudy>

            </section>
        
        </>
    )
}

export default ReferenceExpresmenu

export async function getStaticProps() {
    const referenceRes = await fetchAPI('/references', { populate: '*' })
  
    return {
        props: {
            reference: referenceRes.data,
        },
        revalidate: 1,
    }
}