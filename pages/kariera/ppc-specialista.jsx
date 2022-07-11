import HeroStaticSlim from '../../components/HeroStaticSlim/HeroStaticSlim'
import CareerForm from '../../components/CareerForm/CareerForm'
import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './detailKariera.module.scss'
import Image from 'next/image'

const detailKariera = () => {
	return (
		<>
			<HeroStaticSlim title='PPC specialista/ka' image='/img/kariera-hero.jpg'></HeroStaticSlim>
			<section className={`${styles.overallWrapper}`}>
				<div className='container-thin'>
					<div className={styles.head}>
						<span className={styles.logo}>Praha</span>
						{/* <a className='btn btn-secondary' href='#kontakt'>
							Mám zájem
						</a> */}
					</div>
					<p className={styles.biggerFont}>
						Rozšiřujeme tým a hledáme šikovného kolegu/kolegyni na pozici <strong>PPC specialisty</strong>, který bude zodpovědný za veškerou práci
						v kampaních na reklamních systémech <strong>Google Ads a Sklik</strong>.
					</p>
					<p className={styles.biggerFont}>
						Někoho, kdo se dokáže na 100 % postavit za své dílo a bude ke spravovaným profilům přistupovat tak, jako by se jednalo o jeho kampaně.
						<strong>NEHLEDÁME &quot;KLIKAŘE&quot;</strong>.
					</p>
					<div className={styles.part}>
						<h3>Co tě u nás čeká?</h3>
						<ul className={styles.list}>
							<li>Tvorba reklamních kampaní</li>
							<li>Nastavování, správa a optimalizace PPC kampaní</li>
							<li>Podpora a asistence marketingovému oddělení (mailová/telefonická komunikace s dodavateli, obchodními partnery apod.)</li>
							<li>Vyhodnocování reklamních kampaní na základě Google Analytics, webová analytika</li>
							<li>Návrhy pro optimalizaci webu a pro konverzní optimalizaci</li>
							<li>Reporting vedení společnosti</li>
						</ul>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
						{/* <p className={styles.marginTop}>
							Pojď pomáhat vylepšovat e-shopy naším stávajícím klientům enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in.
						</p> */}
					</div>
					<div className={styles.part}>
						<h3>Co by ti nemělo chybět?</h3>
						<ul className={styles.list}>
							<li>Prokazatelná praxe v oblasti PPC - Google a Sklik</li>
							<li>
								<strong>Pokročilá znalost Google Analytics, Google Ads, Seznam Sklik</strong>
							</li>
							<li>Schopnost vést a dotahovat vlastní projekty</li>
							<li>Proaktivní přístup</li>
							<li>Chuť pracovat v týmu</li>
						</ul>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
					</div>
					<div className={styles.part}>
						<h3>Co Ti za to nabízíme?</h3>
						<ul className={styles.list}>
							<li>
								Práci v mladém týmu úspěšné digitální agentury s portfoliem klientů, které rozhodně znáš, které posunou tvojí profesní zkušenost
								na další level
							</li>
							<li>Kolektiv srdcařů, kteří umí vzít za práci</li>
							<li>Spolupráci na různorodých a velmi zajímavých projektech napříč trhem a obory</li>
							<li>Pestrou práci a žádný stereotyp</li>
							<li>Možnost kariérního růstu</li>
							<li>Příjemné prostředí v Holešovické Marině</li>
							<li>
								Spoustu firemních benefitů (Sick days, Multisportka - plně hrazená Mirandou, pravidelné firemní snídaně, občasný Homeoffice,
								Teambuildingy atd.)
							</li>
							<li>Práce na IČO / HPP (in-house)</li>
							<li>Smlouva na dobu neurčitou</li>
							<li>Nástup možný ihned</li>
						</ul>
						<p className={styles.hideMobil}>Jdeš do toho? 🙂</p>
						<a href='#kontakt' className={`btn btn-secondary ${styles.hideMobil} `}>
							No jistě!
						</a>
					</div>
				</div>
			</section>
			<section className='no-margin'>
				<ContactForm />
			</section>
		</>
	)
}

export default detailKariera
