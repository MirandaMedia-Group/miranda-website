import Image from 'next/image'
import styles from './Sluzby.module.scss'

const Sluzby = () => {
    return (
        <>
            <div className={styles.sluzbyGrid}>
                <div className={`${styles.item} ${styles.large}`}>
                    <div className={`columns align-center ${styles.certifikace}`}>
                        <Image src="/img/icon/shoptet-premium.png" width={200} height={200} alt="Shoptet premium"></Image>
                    </div>
                    <h2>Služby, které nabízíme</h2>
                    <p>Postavíme celý e-shop na klíč, zaškolíme vás v práci s administrací a posuneme výkon vašich kampaní na zcela jinou úroveň.</p>
                    <ul>
                        <li>Napojení jakéhokoliv systému pomocí API</li>
                        <li>Možnost programovat vlastní funkce</li>
                        <li>Neomezený počet produktů, uživatelů, e-mailů</li>
                        <li>Bez nutnosti vlastních programátorů</li>
                    </ul>
                    <div className="text-center" style={{marginTop: '20px'}}>
                        <a href="#kontakt" className='btn btn-primary'>
                            <span data-hover="Poptat služby">
                                Poptat služby
                            </span>
                        </a>
                    </div>
                </div>
                <div className={styles.item}>
                    <Image src="/img/icon/Grafika.svg" width={56} height={56} alt=""></Image>
                    <h3>Úchvatná grafika a web design</h3>
                    <div className={styles.texts}>
                        <p>Moderní, líbivý a především plně responzivní e-shop je základním předpokladem úspěšného prodeje.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <Image src="/img/icon/Icone-shopu.svg" width={56} height={56} alt=""></Image>
                    <h3>Převod e-shopu od konkurence</h3>   
                    <div className={styles.texts}>
                        <p>Starý e-shop vám už nevyhovuje a je na čase nutně modernizovat.</p>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.image}`}>
                    <Image src="/img/sluzby1.jpg" width={360} height={360} alt="" layout='responsive'></Image>
                </div>
                <div className={styles.item}>
                    <Image src="/img/icon/PPC.svg" width={56} height={56} alt=""></Image>
                    <h3>PPC a zbožové vyhledávače</h3>   
                    <div className={styles.texts}>
                        <p>E-shop je připraven ke spuštění a nastává moment, dát o sobě vědět zákazníkům.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <Image src="/img/icon/Import.svg" width={56} height={56} alt=""></Image>
                    <h3>Import a synchronizace dat v reálném čase</h3>   
                    <div className={styles.texts}>
                        <p>E-shop už máte, ale zatím nevíte, jak využít jeho maximální potenciál.</p>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.image}`}>
                    <Image src="/img/sluzby2.jpg" width={360} height={360} alt="" layout='responsive'></Image>
                </div>
                <div className={styles.item}>
                    <Image src="/img/icon/Copy.svg" width={56} height={56} alt=""></Image>
                    <h3>Pravidelná správa Shoptetu</h3>   
                    <div className={styles.texts}>
                        <p>Jde vám hlava kolem z řady popisků a prodejních textů.. a že jich je.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <Image src="/img/icon/Code.svg" width={56} height={56} alt=""></Image>
                    <h3>Programování a kódování</h3>  
                    <div className={styles.texts}>
                        <p>Potřebujete realizovat své nápady nad rámec běžných řešení?</p>
                    </div> 
                </div>
            </div>
            {/* <div className={styles.usp}>
                <div className={styles.uspItem}>
                    <Image src="/img/icon/100.svg" width={71} height={30} alt=""></Image>
                    <p>Více jak stovka <strong>realizovaných e-shopů</strong></p>
                </div>
                <div className={styles.uspItem}>
                    <Image src="/img/icon/cil.svg" width={30} height={30} alt=""></Image>
                    <p>Pro každý e-shop <strong>unikátní, plně responzivní grafický design</strong></p>
                </div>
                <div className={styles.uspItem}>
                    <Image src="/img/icon/building.svg" width={30} height={30} alt=""></Image>
                    <p><strong>Kamenná pobočka</strong> na Praze 7 v Holešovické Marině</p>
                </div>
                <div className={styles.uspItem}>
                    <Image src="/img/icon/people.svg" width={30} height={30} alt=""></Image>
                    <p><strong>Zkušený tým</strong> vývojářů, designérů, UX/UI profesionálů a specialistů na výkonnostní marketing</p>
                </div>
                <div className={styles.uspItem}>
                    <Image src="/img/icon/15let.svg" width={53} height={30} alt=""></Image>
                    <p><strong>Více jak 15 let zkušeností</strong> v e-commerce a on-line marketingu</p>
                </div>
                <div className={styles.uspItem}>
                    <Image src="/img/icon/education.svg" width={30} height={30} alt=""></Image>
                    <p><strong>Školíme a staráme se</strong> o růst vašeho podnikání v on-line světě</p>
                </div>
            </div> */}
        </>
    )
}

export default Sluzby