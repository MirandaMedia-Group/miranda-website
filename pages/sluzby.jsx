import HeroStaticSlim from '../components/HeroStaticSlim/HeroStaticSlim'
// import PravaMiranda from '../components/PravaMiranda/PravaMiranda'
import Image from 'next/image'
import ContactForm from '../components/ContactForm/ContactForm'

import styles from '../styles/sluzby.module.scss'

export default function Home() {
	const data = {
		ppc: {
			imageSrc: '/img/ppc-bg.jpg',
			text: 'Mirandina partička nápadama vyzbrojenejch markeťáků poskytuje komplexní služby internetového marketingu. Onlinový PPC kampaně, co podávaj solidní výkon, SEO vychytávky pro tučnej traffic z organicu, správu sociálních sítí Facebook & Instagram pro hladový fanoušky, zbožové vyhledávače, e-mailing, webovou analytiku a další neodmyslitelný marketovky pro váš do maxima vyladěný onlajnový flow.',
			hashtags: ['Google Ads', 'Sklik', 'Sociální sítě', 'Zbožové vyhledávače', 'Webová analytika', 'PPC', 'Google Analytics'],
			title: 'PPC kampaně',
		},
		weby: {
			imageSrc: '/img/weby-bg.jpg',
			text: 'Vytuněný webovky a nabušenej e-shop je naše specializace a opus magnum. Vaši onlajnovou výkladní skříň podnikání si vezmeme celou na starost. Zajistíme návrh UX/UI, pořádně vymazlenou grafiku, programování a kódování. Pak to celé otestujeme, napojíme na kdejaký měřící nástroje a přivedeme tam plnotučnej trafiic, to dá přeci rozum.',
			hashtags: [
				'Shoptet',
				'Shoptet PREMIUM',
				'API napojení',
				'SEO',
				'Analytika',
				'Projektové řízení',
				'UX/UI',
				'Datové služby',
				'Školení',
				'Copywriting',
			],
			title: 'Weby & e-shopy',
		},
		soc: {
			imageSrc: '/img/soc-bg.jpg',
			text: 'Mirandiny digitální pavučiny se nebezpečně rozvíjej napříč tímhle sociálním prostorem a pochytávaj kdejakého fanouška. Přidělenej stratég sociálních mega-sítí, co tuní obsah, četuje a ladí vizuály s grafikem, bude měsíc co měsíc sedět nad vaším profilem.',
			hashtags: ['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube', 'Strategie', 'Firemní identita', 'Copywriting'],
			title: 'Sociální sítě',
		},
		design: {
			imageSrc: '/img/design-bg.jpg',
			text: 'Vyladěná grafika od Mirandy, co má hlavu plnou nápadů a hýří kreativitou, to je pane kumšt. Obzvlášť, když přijde na takovou korporátní identitu, to se pak jeden zapotí, než to začne lícovat. Všechny tyhle bannery, tiskoviny, letáky a loga.',
			hashtags: ['Produktové fotografie', 'Webdesign', 'Návrh značek', 'Tiskoviny', 'Korporátní design a identita', 'Reklamní bannery'],
			title: 'Kreativa',
		},
		influence: {
			imageSrc: '/img/influence-bg.jpg',
			text: 'Zajistíme ty správný influencery pro tvý vymazlený kampaně. Disponujeme top databází těch nejvlivnějších týpků, co pozvednou tvůj brand na úplně jinej level.',
			hashtags: ['Influencer marketing', 'Microinfluencing'],
			title: 'Influencing',
		},
	}

	return (
		<>
			<section>
				<HeroStaticSlim title='Naše služby' image='/img/sluzby-hero.jpg' imageMobile='/img/sluzby-hero-mobile.jpg' />
			</section>
			{/* <section>
				<div className='container sluzby'>
					<PravaMiranda className={styles.pravaMiranda} />
				</div>
			</section> */}
			<section className='container'>
				{data &&
					Object.keys(data).map((item, index) => {
						let itemData = data[item]
						return (
							<div key={index} id={item} className={`columns col-2 align-center ${styles.item}`}>
								<div className={`column ${styles.image}`}>
									<Image src={itemData.imageSrc} width={806} height={806} alt='' priority={true} layout='responsive' />
									<div className={styles.hashtags}>
										{itemData.hashtags &&
											itemData.hashtags.map((hash, index) => {
												return (
													<span key={index} className={styles.hashtag}>
														# {hash}
													</span>
												)
											})}
									</div>
								</div>
								<div className={`column ${styles.texts}`}>
									<div className={styles.title}>
										<span>Miranda</span>
										<h2>{itemData.title}</h2>
									</div>
									<div>
										<p>{itemData.text}</p>
										<a href='#kontakt' className='btn btn-secondary'>
											Spojit se s Mirandou
										</a>
									</div>
								</div>
							</div>
						)
					})}
			</section>
			<section className='no-margin'>
				<ContactForm />
			</section>
		</>
	)
}
