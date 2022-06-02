import HeroStatic from '../../components/HeroStatic/HeroStatic';
import CareerForm from '../../components/CareerForm/CareerForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './detailKariera.module.scss';
import Image from 'next/image';

const detailKariera = () => {
	return (
		<>
			<HeroStatic
				title='Tvůj nový začátek'
				subtitle='Miranda není jenom práce. Je to místo, kde se vzájemná důvěra, respekt a úcta jednoho k druhému stávají základními stavebními kameny spolupráce. Je to prostředí, kde vznikají skvělé myšlenky a rodí se nové projekty. Možná je to právě Ta práce, kterou si vždycky hledal...'
				image='/img/kariera-hero.jpg'
				bigFont
			></HeroStatic>
			<section className={`negative-margin ${styles.overallWrapper}`}>
				<div className='container-thin'>
					<div className={styles.head}>
						<h2>Projektový manažer</h2>
						<span className={styles.logo}>Praha</span>
						<a className={`btn btn-primary`} href='#kontakt'>
							<span data-hover='Mám zájem'>Mám zájem</span>
						</a>
					</div>
					<p className={styles.biggerFont}>
						Obsahová + digitální agentura se spojila, aby vznikla
						MirandaMedia Group, s.r.o., která rychle roste a posouvá
						se kupředu. Budeš součástí?
					</p>
					<p>
						Koho hledáme? Jednoduše projekťáka nebo projekťačku,
						který/která bude enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in.
					</p>
					<div className={styles.part}>
						<h3>Co tě u nás čeká za práci?</h3>
						<ul className={styles.list}>
							<li>
								Řídit projekty v on-line světě a dohlížet na
								jejich hladký průběh
							</li>
							<li>
								<strong>
									Precizně nastavovat a dodržovat harmonogramy
									a specifikace projektů{' '}
								</strong>
							</li>
							<li>
								Komunikovat dovnitř i ven z firmy na velmi dobré
								úrovni
							</li>
							<li>
								„Nacítit“ klienta a vnímat jeho potřeby, včas
								reagovat
							</li>
							<li>
								Rychle se orientovat v různých oborech napříč
								trhem
							</li>
							<li>
								Připravovat kvalitní zadání, rozdělovat a hlídat
								plnění úkolů mezi jednotlivými členy týmů
								(grafici, kopíci, kodéři ad.)
							</li>
							<li>Mít přehled o on-line světě vč. e-commerce</li>
							<li>
								Zvládat práci (tu a tam) pod tlakem a držet
								dohodnuté termíny
							</li>
						</ul>
						<Image
							src='/img/photo-to-be.jpg'
							width={900}
							height={540}
							alt=''
						/>
						<p className={styles.marginTop}>
							Pojď pomáhat vylepšovat e-shopy naším stávajícím
							klientům enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in.
						</p>
					</div>
					<div className={styles.part}>
						<h3>Požadujeme: </h3>
						<ul className={styles.list}>
							<li>
								Perfektní organizační a vyjednávací dovednosti
							</li>
							<li>
								Analytické schopnosti, mapování a vyhodnocování
							</li>
							<li>
								<strong>
									Dobrou znalost projektového řízení
								</strong>
							</li>
							<li>
								Zkušenost s digitálním marketingem a procesy v
								e-shopu výhodou
							</li>
							<li>
								<strong>Vysoké pracovní nasazení</strong>
							</li>
							<li>Orientaci na výsledek</li>
						</ul>
						<Image
							src='/img/photo-to-be.jpg'
							width={900}
							height={540}
							alt=''
						/>
					</div>
					<div className={styles.part}>
						<h3>Co nabízíme?</h3>
						<ul className={styles.list}>
							<li>Práci v mladém týmu digitální agentury</li>
							<li>Kolektiv srdcařů, kteří umí vzít za práci</li>
							<li>
								Účast na různorodých a mnohdy velmi zajímavých
								projektech napříč trhem včetně TOP značek
							</li>
							<li>Pestrou práci a žádný stereotyp</li>
							<li>
								Kariérní růst a když budeš dobrý / dobrá –
								možnost vést v budoucnu vlastní tým projekťáků
							</li>
							<li>
								Práci, za kterou jsou vidět jasné a konkrétní
								výsledky
							</li>
							<li>
								Být součástí agenturního týmu, který si neklade
								malé cíle 😉
							</li>
							<li>
								<strong>Práce na IČO</strong>
							</li>
						</ul>
						<p className={styles.hideMobil}>Jdeš do toho? 🙂</p>
						<a
							href='#kontakt'
							className={`btn btn-primary ${styles.hideMobil} `}
						>
							<span data-hover='No jistě!'>No jistě!</span>
						</a>
					</div>
				</div>
			</section>
			<section className='no-margin'>
				<ContactForm />
			</section>
		</>
	);
};

export default detailKariera;
