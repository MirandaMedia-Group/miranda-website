import HeroStaticSlim from '../../components/HeroStaticSlim/HeroStaticSlim'
import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './detailKariera.module.scss'
import Image from 'next/image'

const detailKariera = () => {
	return (
		<>
			<HeroStaticSlim title='Office manažerka - asistentka vedení' image='/img/kariera-hero.jpg'></HeroStaticSlim>
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
							<li>
								<strong>Šikovnou kolegyni, která se postará o hladký chod celé firmy</strong>, především pak kanceláře i o běžnou
								administrativu.
							</li>
							<li>
								Sympaťačku, na kterou se budeme moct spolehnout. Parťačku do týmu,{' '}
								<strong>co si pohlídá veškeré úkoly a nelekne se, když za ní přijdeme s něčím novým nebo netradičním</strong>. Komunikativního a
								pečlivého člověka, který chce do práce chodit s radostí a bavit se tím, co dělá.
							</li>
							<li>
								Hledáme záskok za mateřskou dovolenou. <strong>Nástup cca v polovině srpna - dle domluvy</strong>. Smlouva na dobu určitou na 3
								roky.{' '}
							</li>
						</ul>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
					</div>
					<div className={styles.part}>
						<h3>Co bude tvým úkolem?</h3>
						<ul className={styles.list}>
							<li>Zorganizovat běžný chod naší agentury</li>
							<li>Domlouvání schůzek, evidence kalendáře, ověřování a příprava smluv</li>
							<li>Zajištění provozu kanceláře - evidence pošty, pochůzky, telefon, usazování návštěv, administrativa</li>
							<li>Příprava podkladů, prezentací, grafů, tabulek a nabídek</li>
							<li>Objednávání kancelářských potřeb a občerstvení</li>
							<li>Asistentská činnost managementu společnosti</li>
							<li>Výpomoc s HR agendou</li>
							<li>Pomoc s organizací firemních akcí</li>
							<li>Ad-hoc úkoly</li>
						</ul>
					</div>
					<div className={styles.part}>
						<h3>Zkušenosti vhodné pro tuto pozici?</h3>
						<ul className={styles.list}>
							<li>Dobrá znalost práce s MS Office (Excel, Word, PowerPoint, Outlook)</li>
							<li>Velmi dobré komunikační a organizační schopnosti, multitasking</li>
							<li>Předchozí zkušenost na podobné pozici je velkou výhodou nikoli však podmínkou</li>
							<li>Vynikající znalost češtiny slovem i písmem je podmínkou</li>
							<li>Angličtina na dobré úrovni výhodou</li>
							<li>Přizpůsobivost (flexibilita)</li>
							<li>Zvládání zátěžových situací</li>
							<li>Aktivní přístup</li>
						</ul>
					</div>
					<div className={styles.part}>
						<h3>Co nabízíme?</h3>
						<ul className={styles.list}>
							<li>Mladý a přátelský tým</li>
							<li>Neformální pracovní prostředí, ve kterém společně odstraňujeme překážky a snažíme se neustále zlepšovat</li>
							<li>Zajímavou práci v digitálním byznysu a možnost se neustále pracovně, ale i osobně rozvíjet</li>
							<li>Kolektiv srdcařů, kteří umí vzít za práci</li>
							<li>Pestrou práci a žádný stereotyp</li>
							<li>
								<strong>
									Spoustu firemních benefitů (sick-days, multisport, teambuildingy, firemní snídaně, dog-friendly office, přístup na Forbes
									předplatné apod.){' '}
								</strong>
							</li>
							<li>Smlouvu na HPP/IČO</li>
						</ul>
					</div>
					<div className={styles.part}>
						<p>
							<strong>V případě zájmu prosím zašli Tvoje CV.</strong>
						</p>
						<p>
							<strong>Budeme se těšit.</strong>
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
