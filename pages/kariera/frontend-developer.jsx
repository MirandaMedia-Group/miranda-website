import HeroStaticSlim from '../../components/HeroStaticSlim/HeroStaticSlim'
import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './detailKariera.module.scss'
import Image from 'next/image'

const detailKariera = () => {
	return (
		<>
			<HeroStaticSlim title='Front-end developer' image='/img/kariera-hero.jpg'></HeroStaticSlim>
			<section className={`${styles.overallWrapper}`}>
				<div className='container-thin'>
					<div className={styles.head}>
						<span className={styles.logo}>Praha</span>
						{/* <a className='btn btn-secondary' href='#kontakt'>
							Mám zájem
						</a> */}
					</div>
					<p className={styles.biggerFont}>
						Úspěšná digitální a marketingová agentura MirandaMedia, která se za velmi krátkou dobu stala lídrem v oblasti služeb e-commerce a
						výkonnostních kampaní, hledá do svých řad nové kolegy a kolegyně na pozici <strong>Front-end developera</strong>.
					</p>
					<div className={styles.part}>
						<h3>Kdo je Miranda?</h3>
						<p>
							Jsem úspěšná full-service digitální a marketingová agentura. Stojím za takovými projekty jako je e-shop{' '}
							<strong>Penny Market, Philips, Pivovar Svijany, Motosalon Klokočka a další</strong>. Všechny tyhle e-shopy jsem postavila od A do Z
							a na míru. Kromě toho spolupracuju dlouhodobě se Zdeňkem Pohlreichem a jeho týmem a jinými neméně zajímavými klienty.
						</p>
						<p>
							Vyznám se v e-commerce a v digitálu jako žádná jiná. U mě se potkáš se{' '}
							<strong>správou sociálních sítí, produkt designem, návrhem webů, správou výkonnostních kampaní</strong> a řadou dalších služeb,
							které zajišťuju pro své partnery pod jednou střechou. Když se za mnou budeš chtít zastavit, najdeš mě jen kousek od řeky v pražských
							Holešovicích.
						</p>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
						{/* <p className={styles.marginTop}>
							Pojď pomáhat vylepšovat e-shopy naším stávajícím klientům enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in.
						</p> */}
					</div>
					<div className={styles.part}>
						<h3>Koho hledáme?</h3>
						<ul className={styles.list}>
							<li>Do naší party vývojářů hledáme nového kolegu či kolegyni na pozici Front-end developera.</li>
							<li>Máš za sebou pouze kurz? Jsi samouk a hledáš první práci v oboru? Nevadí, rádi si tě zaučíme.</li>
						</ul>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
					</div>
					<div className={styles.part}>
						<h3>Co u nás tvoříme?</h3>
						<ul className={styles.list}>
							<li>Kompletní e-shopové řešení na míru na platformě Shoptet</li>
							<li>Tvorba kampaňových landing pages a microsites</li>
							<li>Tvorba standardních webů na Wordpressu</li>
						</ul>
					</div>
					<div className={styles.part}>
						<h3>Přes co nepojede vlak?</h3>
						<ul className={styles.list}>
							<li>Znalost HTML5 a CSS3</li>
							<li>Znalost čistého Javascriptu, starší projekty jsou v jQuery</li>
							<li>Základní pojem o tom, jak funguje Wordpress a jak se tvoří custom šablony</li>
							<li>Máš cit pro kvalitní a přehledný kód</li>
						</ul>
					</div>
					<div className={styles.part}>
						<h3>Co je tvá výhoda?</h3>
						<ul className={styles.list}>
							<li>Máš své projekty, kterými se nám můžeš pochlubit</li>
							<li>Máš chuť se dál aktivně vzdělávat a rozšiřovat si obzory</li>
							<li>Políbil tě některý z reaktivních frameworků</li>
							<li>Používáš některý z preprocesorů (ideálně Sass)</li>
							<li>Víš, co znamená API a proč a jak se používá</li>
						</ul>
					</div>
					<div className={styles.part}>
						<h3>Co nás čeká dál?</h3>
						<ul className={styles.list}>
							<li>Shoptet vyvíjí novou verzi, kde bude třeba Next.js a GraphQL</li>
							<li>Vybíráme další řešení pro stavbu e-shopů, jsme otevřeni návrhům</li>
						</ul>
					</div>
					<div className={styles.part}>
						<h3>Co nabízíme?</h3>
						<ul className={styles.list}>
							<li>Práci v mladém týmu digitální agentury s portfoliem klientů, které rozhodně znáš</li>
							<li>Kolektiv srdcařů, kteří umí vzít za práci</li>
							<li>Účast na různorodých a mnohdy velmi zajímavých projektech napříč trhem a obory</li>
							<li>Pestrou práci a žádný stereotyp</li>
							<li>Možnost kariérního růstu</li>
							<li>Práci, za kterou jsou vidět jasné a konkrétní výsledky</li>
							<li>Být součástí agenturního týmu, který rychle roste a neklade si malé cíle</li>
							<li>Spoustu firemních benefitů (pravidelné firemní snídaně, teambuildingy, dog-friendly office, multisport, sickdays apod.)</li>
							<li>Práce na IČO/HPP</li>
						</ul>
					</div>
					<div className={styles.part}>
						<p>
							Jdeš do toho? <strong>Pošli nám ideálně tebou nakódované portfolio</strong> (rozuměj životopis ve formě webovky, pokud za sebou
							nemáš žádný projekt), na papírová CVčka nehrajeme. Když nás zaujmeš, pozveme Tě k nám do nových kanceláří v Holešovicích na
							demo-day. Dostaneš jednoduché zadání a když se ti to povede, plácneme si a nastupuješ.
						</p>
					</div>
					<p className={styles.hideMobil}>Jdeš do toho? 🙂</p>
					<a href='#kontakt' className={`btn btn-secondary ${styles.hideMobil} `}>
						No jistě!
					</a>
				</div>
			</section>
			<section className='no-margin'>
				<ContactForm />
			</section>
		</>
	)
}

export default detailKariera
