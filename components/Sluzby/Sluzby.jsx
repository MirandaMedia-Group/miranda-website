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
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.667 12.8334C11.667 10.6675 12.5274 8.59026 14.059 7.05871C15.5905 5.52716 17.6677 4.66675 19.8337 4.66675H28.0003V21.0001H19.8337C17.6677 21.0001 15.5905 20.1397 14.059 18.6081C12.5274 17.0766 11.667 14.9993 11.667 12.8334Z" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28 4.66675H36.1667C37.2391 4.66675 38.3011 4.87798 39.2919 5.2884C40.2827 5.69881 41.183 6.30036 41.9414 7.05871C42.6997 7.81705 43.3013 8.71734 43.7117 9.70817C44.1221 10.699 44.3333 11.761 44.3333 12.8334C44.3333 13.9059 44.1221 14.9678 43.7117 15.9587C43.3013 16.9495 42.6997 17.8498 41.9414 18.6081C41.183 19.3665 40.2827 19.968 39.2919 20.3784C38.3011 20.7888 37.2391 21.0001 36.1667 21.0001H28V4.66675Z" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28 29.1667C28 28.0942 28.2112 27.0322 28.6216 26.0414C29.0321 25.0506 29.6336 24.1503 30.392 23.392C31.1503 22.6336 32.0506 22.0321 33.0414 21.6216C34.0322 21.2112 35.0942 21 36.1667 21C37.2391 21 38.3011 21.2112 39.2919 21.6216C40.2827 22.0321 41.183 22.6336 41.9414 23.392C42.6997 24.1503 43.3013 25.0506 43.7117 26.0414C44.1221 27.0322 44.3333 28.0942 44.3333 29.1667C44.3333 30.2391 44.1221 31.3011 43.7117 32.2919C43.3013 33.2827 42.6997 34.183 41.9414 34.9414C41.183 35.6997 40.2827 36.3013 39.2919 36.7117C38.3011 37.1221 37.2391 37.3333 36.1667 37.3333C35.0942 37.3333 34.0322 37.1221 33.0414 36.7117C32.0506 36.3013 31.1503 35.6997 30.392 34.9414C29.6336 34.183 29.0321 33.2827 28.6216 32.2919C28.2112 31.3011 28 30.2391 28 29.1667V29.1667Z" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.667 45.4999C11.667 43.334 12.5274 41.2568 14.059 39.7252C15.5905 38.1937 17.6677 37.3333 19.8337 37.3333H28.0003V45.4999C28.0003 47.6658 27.1399 49.7431 25.6084 51.2746C24.0768 52.8062 21.9996 53.6666 19.8337 53.6666C17.6677 53.6666 15.5905 52.8062 14.059 51.2746C12.5274 49.7431 11.667 47.6658 11.667 45.4999Z" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.667 29.1667C11.667 27.0007 12.5274 24.9235 14.059 23.392C15.5905 21.8604 17.6677 21 19.8337 21H28.0003V37.3333H19.8337C17.6677 37.3333 15.5905 36.4729 14.059 34.9414C12.5274 33.4098 11.667 31.3326 11.667 29.1667Z" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3>Úchvatná grafika a web design</h3>
                    <div className={styles.texts}>
                        <p>Moderní, líbivý a především plně responzivní e-shop je základním předpokladem úspěšného prodeje.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 4.66675L7 14.0001V46.6668C7 47.9044 7.49167 49.0914 8.36683 49.9666C9.242 50.8418 10.429 51.3334 11.6667 51.3334H44.3333C45.571 51.3334 46.758 50.8418 47.6332 49.9666C48.5083 49.0914 49 47.9044 49 46.6668V14.0001L42 4.66675H14Z" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 14H49" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M37.3337 23.3333C37.3337 25.8086 36.3503 28.1826 34.6 29.9329C32.8497 31.6833 30.4757 32.6666 28.0003 32.6666C25.525 32.6666 23.151 31.6833 21.4007 29.9329C19.6503 28.1826 18.667 25.8086 18.667 23.3333" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3>Převod e-shopu od konkurence</h3>   
                    <div className={styles.texts}>
                        <p>Starý e-shop vám už nevyhovuje a je na čase nutně modernizovat.</p>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.image}`}>
                    <Image src="/img/sluzby1.jpg" width={360} height={360} alt="" layout='fill' objectFit='cover' objectPosition='center'></Image>
                </div>
                <div className={styles.item}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0003 4.66675L35.2103 19.2734L51.3337 21.6301L39.667 32.9934L42.4203 49.0467L28.0003 41.4634L13.5803 49.0467L16.3337 32.9934L4.66699 21.6301L20.7903 19.2734L28.0003 4.66675Z" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3>PPC a zbožové vyhledávače</h3>   
                    <div className={styles.texts}>
                        <p>E-shop je připraven ke spuštění a nastává moment, dát o sobě vědět zákazníkům.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.25 10.5V19.25H29.75V10.5H47.25ZM47.25 7H29.75C28.8217 7 27.9315 7.36875 27.2751 8.02513C26.6187 8.6815 26.25 9.57174 26.25 10.5V19.25C26.25 20.1783 26.6187 21.0685 27.2751 21.7249C27.9315 22.3813 28.8217 22.75 29.75 22.75H47.25C48.1783 22.75 49.0685 22.3813 49.7249 21.7249C50.3812 21.0685 50.75 20.1783 50.75 19.25V10.5C50.75 9.57174 50.3812 8.6815 49.7249 8.02513C49.0685 7.36875 48.1783 7 47.25 7ZM21 43.75H10.5V29.75H21V26.25H10.5C9.57174 26.25 8.6815 26.6187 8.02513 27.2751C7.36875 27.9315 7 28.8217 7 29.75V43.75C7 44.6783 7.36875 45.5685 8.02513 46.2249C8.6815 46.8812 9.57174 47.25 10.5 47.25H21V43.75ZM52.5 35H29.449L33.9745 30.4745L31.5 28L22.75 36.75L31.5 45.5L33.9745 43.0255L29.449 38.5H52.5V35ZM19.25 10.5V19.25H10.5V10.5H19.25ZM19.25 7H10.5C9.57174 7 8.6815 7.36875 8.02513 8.02513C7.36875 8.6815 7 9.57174 7 10.5V19.25C7 20.1783 7.36875 21.0685 8.02513 21.7249C8.6815 22.3813 9.57174 22.75 10.5 22.75H19.25C20.1783 22.75 21.0685 22.3813 21.7249 21.7249C22.3813 21.0685 22.75 20.1783 22.75 19.25V10.5C22.75 9.57174 22.3813 8.6815 21.7249 8.02513C21.0685 7.36875 20.1783 7 19.25 7Z" fill="#59DC8E"/>
                    </svg>
                    <h3>Import a synchronizace dat v reálném čase</h3>   
                    <div className={styles.texts}>
                        <p>E-shop už máte, ale zatím nevíte, jak využít jeho maximální potenciál.</p>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.image}`}>
                    <Image src="/img/sluzby2.jpg" width={360} height={360} alt="" layout='fill' objectFit='cover' objectPosition='center'></Image>
                </div>
                <div className={styles.item}>
                    <Image src="/img/icon/Copy.svg" width={56} height={56} alt=""></Image>
                    <h3>Pravidelná správa Shoptetu</h3>   
                    <div className={styles.texts}>
                        <p>Jde vám hlava kolem z řady popisků a prodejních textů.. a že jich je.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.833 42L51.833 28L37.833 14" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.167 14L5.16699 28L19.167 42" stroke="#59DC8E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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