import HeroStaticSlim from '../../components/HeroStaticSlim/HeroStaticSlim'
import CareerForm from '../../components/CareerForm/CareerForm'
import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './detailKariera.module.scss'
import Image from 'next/image'

const detailKariera = () => {
	return (
		<>
			<HeroStaticSlim title='Sales manager' image='/img/kariera-hero.jpg'></HeroStaticSlim>
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
						výkonnostních kampaní, hledá do svých řad nové kolegy a kolegyně na pozici Sales Manager.
					</p>
					<div className={styles.part}>
						<h3>Co od Tebe očekávám?</h3>
						<ul className={styles.list}>
							<li>
								<strong>Základní znalost v oblasti e-shopů (Shoptet výhodou - jsem Premium partner) a výkonnostních - PPC kampaní</strong>
							</li>
							<li>
								Obchodního ducha a <strong>schopnost zvednout telefon a aktivně vyhledávat obchodní příležitosti</strong>
							</li>
							<li>
								Chuť do práce, nebudeš se bát sjednávat schůzky a prezentovat služby – online, osobní schůzky na téma online marketing,
								e-commerce, weby, produktové focení apod.{' '}
							</li>
							<li>Motivaci vydělat slušné a zasloužené peníze</li>
							<li>
								Dobré prodejní a <strong>komunikační dovednosti (vyjednávání a orientace na zákazníka, budování vztahů)</strong>
							</li>
							<li>
								<strong>Proaktivní přístup</strong> a chuť učit se nové věci{' '}
							</li>
							<li>Reprezentativní a příjemné vystupování</li>
							<li>Organizační schopnosti</li>
							<li>Schopnost vytyčit si cíle a jít si za nimi </li>
						</ul>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
						{/* <p className={styles.marginTop}>
							Pojď pomáhat vylepšovat e-shopy naším stávajícím klientům enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in.
						</p> */}
					</div>
					<div className={styles.part}>
						<h3>Co tě čeká?</h3>
						<ul className={styles.list}>
							<li>
								<strong>Aktivní oslovování</strong> nových klientů od prvního callu až po uzavření smlouvy.{' '}
							</li>
							<li>Samostatné vyhledávání nových obchodních příležitostí a jednání s partnery napříč segmenty a obory podnikání. </li>
							<li>Práce s CRM Raynet na každodenní bázi</li>
							<li>
								<strong>Rozvoj a realizace obchodních příležitostí </strong>
							</li>
							<li>Udržování obchodních kontaktů, péče o klíčové zákazníky</li>
							<li>
								<strong>Prezentování a nabídka služeb</strong> klientům společnosti{' '}
							</li>
							<li>Úzká spolupráce s projektovým manažerem a komunikace s vývojovým týmem </li>
						</ul>
						{/* <Image src='/img/photo-to-be.jpg' width={900} height={540} alt='' /> */}
					</div>
					<div className={styles.part}>
						<h3>Na co se můžeš těšit?</h3>
						<ul className={styles.list}>
							<li>
								<strong>
									Základní plat 40 000 - 50 000 Kč po dobu prvních 3 měsíců (záleží na tvých zkušenostech a schopnostech - a hlavně na
									znalosti služeb a oblastí mojí agentury) + dvousložkový provizní systém - shora neomezený již od prvního dne nástupu.{' '}
								</strong>
							</li>
							<li>
								<strong>Po 3 měsících fix + provize </strong>
							</li>
							<li>Notebook, mobil</li>
							<li>
								Práci v mladém týmu digitální agentury a pravidelné setkávání na týmových schůzkách, teambuildingy, pravidelné pondělní snídaně
							</li>
							<li>K dispozici zázemí v našich moderních kancelářích v Holešovicích (24/7)</li>
							<li>Káva, ovoce a Redbull zdarma</li>
							<li>Prostředí, kde si váží jeden druhého</li>
							<li>Kolektiv srdcařů, kteří umí vzít za práci</li>
							<li>
								Účast na různorodých a mnohdy velmi zajímavých projektech napříč trhem a obory. Mezi naše klienty patří např. Penny Market,
								Philips, PetCenter ad.{' '}
							</li>
							<li>
								<strong>Pestrou práci a žádný stereotyp</strong>
							</li>
							<li>Kariérní růst s postupem na vedoucí pozici obchodního manažera a vedení vlastního týmu</li>
							<li>Práci, za kterou jsou vidět jasné a konkrétní výsledky</li>
							<li>
								<strong>Spoustu firemních benefitů (sick-days, multisport, dog-friendly office, přístup na Forbes předplatné apod.) </strong>
							</li>
							<li>
								<strong>Práce na IČO</strong>
							</li>
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
