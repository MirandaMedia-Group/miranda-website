import PripadovkyHead from '../../components/PripadovkyHead/PripadovkyHead'
import Image from 'next/image'
import styles from '../../styles/pennyDomu.module.scss'

const pennyDomu = () => {
    return (
        <>
            <PripadovkyHead 
            image="/img/pennyHead.jpg"
            text="Než potkalo Penny Mirandu, nebylo u nich jak nakoupit, aniž byste museli vytáhnout paty 
            z domu. Dneska frčí e-shop na plný obrátky 
            a spokojení zákazníci posílají jednu 
            objednávku za druhou."
            logo="/img/pennyLogo.svg"
            width="528"
            height="150"
            />
            <section>
                <ul className={styles.nav}>
                    <li><a href="#oPenny">O Penny</a></li>
                    <li><a href="#cile">Společné cíle</a></li>
                    <li><a href="#oProjektu">Co o projektu říká</a></li>
                    <li><a href="#ukazky">Ukázka webu</a></li>
                </ul>
            </section>
            <div className='container'>
                <section className={styles.row}>
                    <Image src="/img/pennyImg.jpg" width={710} height={710} />
                    <div className={styles.text}>
                        <div>
                            <h2>Kdo by neznal Penny Market</h2>
                            <p>Penny Market s.r.o. je dceřinou společností mezinárodního obchodního řetězce REWE, který provozuje přes 15 000 prodejen v 20 evropských zemích a zaměstnává kolem 330 000 lidí. PENNY kromě České republiky najdete i v Německu, Rakousku, Itálii, Maďarsku a Rumunsku.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.cile}>
                    <h2>Naše společné cíle</h2>
                    <p>Jednoho dne zazvonil v Mirandě telefon, že prý Penny Market poptává digitální agenturu na tvorbu nového e-shopu. Od té chvíle se spustil kolotoč schůzek a jednání, které nás dovedly k výhradní spolupráci na vytvoření e-commerce platformy na klíč.</p>
                    <div>
                        <ul>
                            <li>Analýza zadávací technické dokumentace</li>
                            <li>Návrh řešení a časová osa projektu</li>
                            <li>Návrh struktury a grafického designu e-shopu</li>
                            <li>Napojení na dopravce DoDo</li>
                            <li>Kódování na platformu Shoptet</li>
                            <li>Naprogramování požadovaných funcionalit</li>
                            <li>Napojení na reklamní systémy</li>
                        </ul>
                        <p>..a mnohem,, mnohem více</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default pennyDomu