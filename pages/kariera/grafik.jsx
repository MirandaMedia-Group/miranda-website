import HeroStaticSlim from '../../components/HeroStaticSlim/HeroStaticSlim'
import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './detailKariera.module.scss'
import Image from 'next/image'

const detailKariera = () => {
	return (
		<>
			<HeroStaticSlim title='Seniorní grafik/designér' image='/img/kariera-hero.jpg'></HeroStaticSlim>
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
						<h3>Co u nás budeš dělat?</h3>
						<ul className={styles.list}>
							<li>
								<strong>
									Tvořit vizuály e-shopů, webových stránek, propagačních materiálů, firemních identit, maskotů produktových obalů, bannerů a
									dalších. Více mrkni na naše stránky a portfolio.
								</strong>
							</li>
							<li>Kreativní návrhy firemních materiálů a značek</li>
							<li>Návrhy tiskovin a propagačních materiálů</li>
							<li>Design produktů</li>
						</ul>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
					</div>
					<div className={styles.part}>
						<h3>Jaké na Tebe máme požadavky?</h3>
						<ul className={styles.list}>
							<li>
								<strong>Jsi prokazatelně seniorní a zkušený grafik</strong>
							</li>
							<li>Dokážeš správně odhadnout náročnost projektů a pohlídat si jejich realizaci v termínu</li>
							<li>
								<strong>Umíš pracovat s Figmou</strong>
							</li>
							<li>HTML5 bannery Google Web Designer, motion design</li>
							<li>Znáš alespoň jednu či více z těchto aplikací:, Adobe XD, Sketch, Photoshop</li>
							<li>Máš hlavu plnou kreativních nápadů</li>
							<li>Jsi schopný navnímat zákazníka a produkt</li>
						</ul>
					</div>
					<div className={styles.part}>
						<h3>Na co se můžeš těšit?</h3>
						<ul className={styles.list}>
							<li>
								<strong>Finanční ohodnocení dle Tvých prokazatelných zkušeností</strong>
							</li>
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
								<strong>
									Spoustu firemních benefitů (Sick days, Multisportka - plně hrazená Mirandou, pravidelné firemní snídaně, občasný Homeoffice,
									Teambuildingy atd.)
								</strong>
							</li>
							<li>Práce na IČO / HPP (in-house)</li>
							<li>
								<strong>Smlouva na dobu neurčitou</strong>
							</li>
						</ul>
					</div>
					<div className={styles.part}>
						<p>
							<strong>Pokud Tě naše nabídka zaujala, tak se nám ozvi!</strong>
						</p>
						<p>
							<strong>Pošli nám prosím svoje CV společně s několika ukázkami Tvé práce.</strong>
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
