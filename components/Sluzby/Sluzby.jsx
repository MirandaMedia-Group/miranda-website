import Image from 'next/image'
import styles from './Sluzby.module.scss'

const Sluzby = () => {
    return (
        <div className={styles.sluzbyGrid}>
            <div className={`${styles.item} ${styles.large}`}>
                <div className="columns align-center">
                    <Image src="/img/icon/shoptet-premium.png" width={193} height={109} alt="Shoptet premium"></Image>
                    <Image src="/img/icon/google-partner.png" width={133} height={94} alt="Google partner"></Image>
                </div>
                <h2>Služby, které nabízíme</h2>
                <p>Zajistíme všechno, co je pro hladký provoz vašeho e-shopu nezbytné. Precizně, spolehlivě a na míru vašim požadavkům.</p>
                <ul>
                    <li>Napojení jakéhokoliv systému pomocí API</li>
                    <li>Možnost programovat vlastní funkce</li>
                    <li>Neomezený počet produktů, uživatelů, e-mailů</li>
                    <li>Bez nutnosti vlastních programátorů</li>
                </ul>
            </div>
            <div className={styles.item}>
                <h3>Úchvatná grafika a web design</h3>   
                <p>Moderní, líbivý a především plně responzivní e-shop je základním předpokladem úspěšného prodeje.</p>
            </div>
            <div className={styles.item}>
                <h3>Převod e-shopu od konkurence</h3>   
                <p>Starý e-shop vám už nevyhovuje a je na čase nutně modernizovat.</p>
            </div>
            <div className={`${styles.item} ${styles.image}`}>
                <Image src="/img/sluzby1.jpg" width={360} height={360} alt=""></Image>
            </div>
            <div className={styles.item}>
                <h3>PPC a zbožové vyhledávače</h3>   
                <p>E-shop je připraven ke spuštění a nastává moment, dát o sobě vědět zákazníkům.</p>
            </div>
            <div className={styles.item}>
                <h3>Školení a konzultace</h3>   
                <p>E-shop už máte, ale zatím nevíte, jak využít jeho maximální potenciál.</p>
            </div>
            <div className={`${styles.item} ${styles.image}`}>
                <Image src="/img/sluzby2.jpg" width={360} height={360} alt=""></Image>
            </div>
            <div className={styles.item}>
                <h3>Copywriting</h3>   
                <p>Jde vám hlava kolem z řady popisků a prodejních textů.. a že jich je.</p>
            </div>
            <div className={styles.item}>
                <h3>Programování a kódování</h3>   
                <p>Potřebujete realizovat své nápady nad rámec běžných řešení?</p>
            </div>
        </div>
    )
}

export default Sluzby