import HeroStatic from "../../components/HeroStatic/HeroStatic";
import Image from "next/image";
import styles from "../../styles/reference.module.scss";
import CaseStudy from "../../components/CaseStudy/CaseStudy";

const ReferenceEpa = () => {
    return (
        <>
            <section className={styles.reference}>
                <section>
                <HeroStatic
                    title="EPA - svítidla Svítidla a osvětlení"
                    image="/img/reference-epa.jpg"
                    url="www.epasvitidla.cz"
                />
                </section>
                <section className="container">
                    <section className={`columns wider col-1-4 align-center  ${styles.absolute}`}>
                        <div className="column">
                            <h2>Nový začátek</h2>
                            <p>Pro EPA svítidla jsme vymysleli zbrusu novou grafiku na míru na kompletně nový e-shop na platformě Shoptet. Grafický návrh e-shopu byl uzpůsoben tak, aby odpovídal těm nejmodernějším trendům v oblasti e-commerce, včetně nejnovějšího řešení UX / UI.</p>
                        </div>
                        <div className={`column row ${styles.images} `}>
                            <div><Image src="/img/epa.jpg" width={450} height={450} alt=""  /></div>
                            <div><Image src="/img/epa2.jpg" width="250" height="450" alt="" /></div>
                            <div><Image src="/img/epa3.jpg" width="350" height="450" alt="" /></div>
                        </div>
                    </section>
                    <section className={styles.spolupraceGrid}>
                        <div className={`${styles.item} ${styles.large}` }>
                            <h2>Výsledky spolupráce</h2>
                            <p>Spolupráce již od prvních měsíců vykazovala velký nárůst v počt objednávek. Celkový obrat tak vystřelil raketově vzhůru! Toho jsme docílili zejména vhodnou kombinací PPC kampaní (Google Ads, Sklik, Facebook a zbožové vyhledávače). Díky pravidelné a důkladné práci s webovou analytikou jsme reklamní systémy optimalizovali k až naprosté dokonalosti.</p>
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">+305%</span>Nárůst obratu</p>
                        </div>
                        <div className={styles.item}>
                            <Image src="/img/epaVysledky.jpg" width={360} height={360} />
                        </div>
                        <div className={styles.item}>
                            <Image src="/img/epaVysledky2.jpg" width={360} height={360} />
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">-53%</span>Snížení PNO (již první měsíc)</p>
                        </div>
                        <div className={styles.item}>
                            <Image src="/img/epaVysledky3.jpg" width={360} height={360} />
                        </div>
                        <div className={styles.item}>
                            <p><span className="green">2,26%</span>Konverzní poměr (již první měsíc)</p>
                        </div>
                    </section>
                    <section className={styles.banner}>
                        <Image src="/img/epaBanner.jpg" width={1440} height={574} alt="renault" />
                        <div className={styles.text}>
                            <h2>Příběh pokračuje</h2>
                            <p>Klient EPA svítidla je pro nás jasným příkladem dobře fungujícího e-shopu, jehož konverzní míra stále vzrůstá a v součinnosti s tím roste i velikost celého elektronického obchodu. Jeho jednoznačně nejlepší vizitkou jsou další a další spokojení zákazníci.</p>
                        </div>
                    </section>
                </section>
                <CaseStudy></CaseStudy>

            </section>
        
        </>
    )
}

export default ReferenceEpa