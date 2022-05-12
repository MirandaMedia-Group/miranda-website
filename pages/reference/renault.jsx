import ReferenceHead from "../../components/ReferenceHead/ReferenceHead";
import Image from "next/image";
import styles from "../../styles/reference.module.scss";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import { fetchAPI } from "../../lib/api";

const ReferenceRenault = ({ reference }) => {

    const referenceData = [
        {
            id: 1,
            nazev: 'renault'
        },
        {
            id: 2,
            nazev: 'epiderma'
        }
    ]
    return (
        <>
            <section className={styles.reference}>
            <ReferenceHead
                title="Autorizovaný prodej vozů Renault a Dacia"
                image="/img/reference-renault.jpg"
                url="www.autohornat.cz"
                pozadi="radial-gradient(69.87% 136.42% at 100% 99.98%, #FFFFFF 0%, rgba(247, 244, 213, 0) 100%), linear-gradient(0deg, #FFF4D6, #FFF4D6), #F7F0EA"
            />
            </section>
            <section className={`columns wider col-1-4 align-center container hidden ${styles.absolute}`}>
                <div className="column">
                    <h2>Nový začátek</h2>
                    <p>Pro Autoavant, tradičního dealera vozů Renault a Dacia jsme začali spravovat PPC kampaně pomocí Google Ads, Sklik a sociální sítě Facebook. Vše s jasným cílem, optimalizovat současné kampaně a zajistit zvýšení zájmu o nákup a servis vozů.</p>
                </div>
                <div className={`column row ${styles.images} `}>
                    <div><Image src="/img/renault.jpg" width={450} height={450} alt=""  /></div>
                    <div ><Image src="/img/renault2.jpg"  width={250} height={450} /></div>
                    <div className={styles.mobilHide}><Image src="/img/renault2.png" width={355} height={160}/></div>
                    <div><Image src="/img/renault3.jpg" width="350" height="450" alt="" /></div>
                </div>
            </section>
            <section className={`container ${styles.spolupraceGrid}`}>
                <div className={`${styles.item} ${styles.large}` }>
                    <h2>Výsledky spolupráce</h2>
                    <p>Ihned po optimalizaci kampaní jsme sledovali obrovské zlepšení z pohledu všech metrik – nárůst návštěvnosti webu, online poptávky na nové vozy, čas strávený na webu a s tím spojená míra okamžitého opuštění stránek. Nárust těchto metrik vedl k požadovanému nárůstu tržeb na straně klienta.</p>
                </div>
                <div className={styles.item}>
                    <p><span className="green">-79,4%</span>Snížení nákladů na 1 online poptávku : <span>SNÍŽENÍ PNO</span></p>
                </div>
                <div className={styles.item}>
                    <Image src="/img/renaultVysledky.jpg" width={360} height={360} alt="" layout="fill"  objectFit="cover" objectPosition="center"/>
                </div>
                <div className={styles.item}>
                    <Image src="/img/renaultVysledky2.jpg" width={360} height={360} alt="" layout="fill" objectFit="cover" objectPosition="center"/>
                </div>
                <div className={styles.item}>
                    <p><span className="green">+109%</span>Do 3 měsíců od zahájení spolupráce: <span>Nárůst poptávek</span></p>
                </div>
                <div className={styles.item}>
                    <Image src="/img/renaultVysledky3.jpg" width={360} height={360} alt=""  layout="fill"  objectFit="cover" objectPosition="center" />
                </div>
                <div className={styles.item}>
                    <p><span className="green">+445%</span>Zvýšení relevantních fanoušků na sociálních sítích: </p>
                </div>
            </section>
            <section className={`container ${styles.banner}`}>
                <div><Image src="/img/renaultBanner.jpg" width={1440} height={574} alt="renault" /></div>
                <div  className={styles.mobilHide}><Image src="/img/renaultBannerMobil.jpg" width={335} height={655} alt="renault"/></div>
                <div className={styles.text}>
                    <h2>Příběh pokračuje</h2>
                    <p>Nadále jsme marketingovou a strategickou součástí společnosti  Fair Autotop. Máme společný dlouhodobý a jasný cíl – udržovat povědomí o prémiové kvalitě dodávaných služeb, podpořit prodej nových vozů a nadále zvyšovat spokojenost stávajících klientů.</p>
                </div>
            </section>
            <section className="hidden">
                <CaseStudy reference={reference}></CaseStudy>
            </section>
        </>
    )
}

export default ReferenceRenault

export async function getStaticProps() {
    const referenceRes = await fetchAPI('/references', { populate: '*' })
  
    return {
        props: {
            reference: referenceRes.data,
        },
        revalidate: 1,
    }
}