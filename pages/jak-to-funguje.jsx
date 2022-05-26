import HeroStatic from "../components/HeroStatic/HeroStatic"
import Image from "next/image"
import Link from "next/link"

import styles from '../styles/jak-to-funguje.module.scss'

const JakToFunguje = () => {
    return (
        <>
            <section>
                <HeroStatic
                    title="Jak to u&nbsp;nás funguje"
                    image="/img/proc-s-nami.jpg"
                    bigFont
                    maxWidth
                >

                </HeroStatic>
            </section>
            <section>
                <div className={`${styles.grid} container`}>
                    <div className={`${styles.item} ${styles.large}`}>
                        <h2>Kdo se na projektu podílí</h2>
                        <p>Miranda přináší do spolupráce ty nejlepší specialisty napříč obory. Není divu, že se pak projekty tvoří jedna báseň. 
                            Kdo stojí za výsledkem práce a z jakých chytrých hlaviček se skládá projektový tým jako v tomto případě...</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.number}>
                            <strong>2</strong>
                        </div>
                        <h3>Vedení společnosti</h3>
                        <p>Naši šéfíci Michal a Tomáš založili Mirandu a od prvního dne jsou u každého projektu. Otvírají dveře novým partnerstvím a dohlíží na to, aby všechno běželo jak na drátkách.</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.number}>
                            <strong>+2</strong>
                        </div>
                        <h3>Projektoví manažeři</h3>
                        <p>Tzv. projekťák je styčným důstojníkem celého projektu. Zodpovídá za strašnou spoustu věcí, ale především za výstupnou kvalitu a dodržení harmonogramu.</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.number}>
                            <strong>+10</strong>
                        </div>
                        <h3>Vývojáři</h3>
                        <p>Tým našich vývojářů za frontend i backend pracuje v Matrixu a zatím nebylo nic, s čím by si neporadili. Odvádějí skvělou práci a bez nich se žádný obdobný projekt neobejde.</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.number}>
                            <strong>+4</strong>
                        </div>
                        <h3>Grafici a UXáci</h3>
                        <p>Když je třeba dát obsahu tu správnou formu, nastoupí k dílu grafici a UX/UI designéři. Tihle borci umí udělat z e-shopu a webu ryzí potěšení pro zákazníka.</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.number}>
                            <strong>+3</strong>
                        </div>
                        <h3>Testeři</h3>
                        <p>Aniž by se projekt pořádně otestoval, nesmí ven. Od toho tu jsou naši testeři, kteří dokážou najít i ten nejmenší pixel mimo osu a pohlídat výstupnou kvalitu na 100 %</p>
                    </div>
                    <div className={`${styles.item} ${styles.image}`}>
                        <Image src="/img/grid4.jpg" width={360} height={360} alt="" layout="fill" objectFit="cover" objectPosition="center" priority={true}></Image>
                    </div>
                </div>
            </section>
            <section className="hidden">
                <div className="container">
                    <h2 className={styles.headline}>Průběh projektu</h2>
                    <div className={styles.cesta}>
                        <Image src="/img/cesta-funguje.svg" width={1156} height={1695} alt="" layout="responsive" priority={true}></Image>
                        <div className={styles.cestaItem} style={{left: '0px', top: '15%'}}>
                            <div className={styles.postavy} style={{right: '40px', top: '-140px'}}>
                                <Image src="/img/postava1.png" width={184} height={202} alt="" priority={true}></Image>
                            </div>
                            <Image src="/img/icon/chat.svg" width={24} height={24} alt="" priority={true}></Image>
                            <h3>První setkání</h3>
                            <p>Jak se říká, nikdy nedostaneš šanci udělat první dojem dvakrát. Na prvních setkáních se často láme chleba a je to ten nejdůležitější moment, kdy se rozhoduje o 
                                dalším osudu nových projektů v Mirandě.</p>
                        </div>
                        <div className={styles.cestaItem} style={{left: '50%', top: '4%', transform: 'translateX(-50%)'}}>
                            <div className={styles.postavy} style={{right: '-210px', top: '-150px'}}>
                                <Image src="/img/postava2.png" width={419} height={245} alt="" priority={true}></Image>
                            </div>
                            <Image src="/img/icon/file.svg" width={24} height={24} alt="" priority={true}></Image>
                            <h3>Analýza projektu</h3>
                            <p>Když dostaneme do ruky zadávací dokumentaci, zabere to nějakou tu chvíli, než všechno projdeme do posledního detailu. Analyzujeme,  validujeme, 
                                hledáme workaroundy a plánujeme...v tomhle bodě je do značné míry známo, jaká cesta před náma stojí.</p>
                        </div>
                        <div className={styles.cestaItem} style={{right: '0', top: '15%'}}>
                            <div className={styles.postavy} style={{right: '-170px', top: '-140px'}}>
                                <Image src="/img/postava3.png" width={320} height={268} alt="" priority={true}></Image>
                            </div>
                            <Image src="/img/icon/framer.svg" width={24} height={24} alt="" priority={true}></Image>
                            <h3>Návrh WF a&nbsp;grafiky</h3>
                            <p>Do pixelu vyladěný dráty a oku lahodící design si Miranda tuní většinou ve Figmě. Solidní prográmek pro každýho šikovnýho grafika a uixáka, 
                                kterej navíc běží kompletně on-line. To se pak iteruje jedna báseň.   </p>
                        </div>
                        <div className={styles.cestaItem} style={{right: '0', top: '53%'}}>
                            <Image src="/img/icon/figma.svg" width={24} height={24} alt="" priority={true}></Image>
                            <h3>Kódování</h3>
                            <p>Naši kodéři znají dneska od Reactu až po Shoptetí styly kdejakej programovací jazyk. Řeč, kterou dokonale ovládají, a nemaj proto problém udělat 
                                i z takový krabice jako je Shoptet řešení na klíč pro ty největší ryby v digitálním rybníku. </p>
                        </div>
                        <div className={styles.cestaItem} style={{left: '50%', top: '63%', transform: 'translateX(-50%)'}}>
                            <div className={styles.postavy} style={{right: '-235px', top: '-230px'}}>
                                <Image src="/img/postava4.png" width={426} height={280} alt="" priority={true}></Image>
                            </div>
                            <Image src="/img/icon/code.svg" width={24} height={24} alt="" priority={true}></Image>
                            <h3>Programování a API</h3>
                            <p>Naprogramovat funkce, který si klient žádá a napojit e-shop na kdejaký éerpéčko, platební bránu nebo dopravce zvládaj s přehledem ti nejlepší profíci 
                                v oboru. Chceš, aby e-shop komunikoval s vesmírnou lodí na druhým konci vesmíru? Tvé přání předem splněno jest!</p>
                        </div>
                        <div className={styles.cestaItem} style={{left: '0', top: '53%'}}>
                            <div className={styles.postavy} style={{left: '-20px', bottom: '-200px'}}>
                                <Image src="/img/postava5.png" width={479} height={284} alt="" priority={true}></Image>
                            </div>
                            <Image src="/img/icon/star.svg" width={24} height={24} alt="" priority={true}></Image>
                            <h3>Testování a ostrý start</h3>
                            <p>Během testování se nesmí zapomenout na sebemenší detail. Jde totiž o hodně! Ve chvíli, kdy se e-shop spustí a začnou se na něj hrnout
                                 nedočkaví zákazníci, musí všechno běžet jak po drátkách.</p>
                        </div>
                        <div className={styles.mirandaLogo}>
                            <svg width="197" height="161" viewBox="0 0 197 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H19.9045V19.1585H0V0ZM0 23.6745H19.9045V42.833H0V23.6745ZM0 47.2805H19.9045V66.439H0V47.2805ZM0 70.8865H19.9045V90.0451H0V70.8865ZM0 94.561H19.9045V113.72H0V94.561ZM0 118.167H19.9045V137.326H0V118.167ZM0 141.841H19.9045V161H0V141.841ZM25.2896 0H45.1941V19.1585H25.2896V0ZM25.2896 23.6745H45.1941V42.833H25.2896V23.6745ZM25.2896 47.2805H45.1941V66.439H25.2896V47.2805ZM25.2896 70.8865H45.1941V90.0451H25.2896V70.8865ZM25.2896 94.561H45.1941V113.72H25.2896V94.561ZM25.2896 118.167H45.1941V137.326H25.2896V118.167ZM25.2896 141.841H45.1941V161H25.2896V141.841ZM50.6474 23.6745H70.5519V42.833H50.6474V23.6745ZM50.6474 47.2805H70.5519V66.439H50.6474V47.2805ZM50.6474 70.8865H70.5519V90.0451H50.6474V70.8865ZM50.6474 94.561H70.5519V113.72H50.6474V94.561ZM75.937 47.2805H95.8415V66.439H75.937V47.2805ZM75.937 70.8865H95.8415V90.0451H75.937V70.8865ZM75.937 94.561H95.8415V113.72H75.937V94.561ZM75.937 118.167H95.8415V137.326H75.937V118.167ZM101.227 47.2805H121.131V66.439H101.227V47.2805ZM101.227 70.8865H121.131V90.0451H101.227V70.8865ZM101.227 94.561H121.131V113.72H101.227V94.561ZM101.227 118.167H121.131V137.326H101.227V118.167ZM126.516 23.6745H146.421V42.833H126.516V23.6745ZM126.516 47.2805H146.421V66.439H126.516V47.2805ZM126.516 70.8865H146.421V90.0451H126.516V70.8865ZM126.516 94.561H146.421V113.72H126.516V94.561ZM151.806 0H171.71V19.1585H151.806V0ZM151.806 23.6745H171.71V42.833H151.806V23.6745ZM151.806 47.2805H171.71V66.439H151.806V47.2805ZM151.806 70.8865H171.71V90.0451H151.806V70.8865ZM151.806 94.561H171.71V113.72H151.806V94.561ZM151.806 118.167H171.71V137.326H151.806V118.167ZM151.806 141.841H171.71V161H151.806V141.841ZM177.096 0H197V19.1585H177.096V0ZM177.096 23.6745H197V42.833H177.096V23.6745ZM177.096 47.2805H197V66.439H177.096V47.2805ZM177.096 70.8865H197V90.0451H177.096V70.8865ZM177.096 94.561H197V113.72H177.096V94.561ZM177.096 118.167H197V137.326H177.096V118.167ZM177.096 141.841H197V161H177.096V141.841Z" fill="#59DC8E"/>
                            </svg>
                        </div>
                    </div>
                    <div className={`${styles.nekonci} text-center`}>
                        <Image src="/img/icon/plus.svg" width={24} height={24} alt="" priority={true}></Image>
                        <h3>Tím to samozřejmě nekončí</h3>
                        <p>Miranda pokračuje ve spolupráci s Penny Market i po dokončení a předání e-shopu. Vídáme se na pravidelných schůzkách, dodáváme nové funkcionality, plánujeme další rozvoj...</p>
                    </div>
                    <div className="text-center" style={{marginTop: '60px'}}>
                        <Link href="/kontakty">
                            <a className='btn btn-tertiary'>
                                <span data-hover="Sjednat první setkání">
                                    Sjednat první setkání
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default JakToFunguje