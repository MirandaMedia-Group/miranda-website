import styles from './PravaMiranda.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import PravaMirandaImage from './PravaMirandaImage'
import PravaMirandaLink from './PravaMirandaLink'
import PravaMirandaContentMobile from './PravaMirandaContentMobile'

const PravaMiranda = () => {
	const ppc = useRef(null)
	const weby = useRef(null)
	const soc = useRef(null)
	const design = useRef(null)
	const influence = useRef(null)
	const ppcMob = useRef(null)
	const webyMob = useRef(null)
	const socMob = useRef(null)
	const designMob = useRef(null)
	const influenceMob = useRef(null)
	const [displayRef, setDisplayRef] = useState(ppc)
	const [displayRefMob, setDisplayRefMob] = useState(null)
	const displayMobileContent = (ref) => {
		if (window.innerWidth < 1048) {
			if (ref != displayRefMob) {
				setDisplayRefMob(ref)
				setTimeout(() => {
					ref.current.scrollIntoView()
				}, 150)
			} else {
				setDisplayRefMob(null)
			}
		}
	}

	const data = {
		ppc: {
			imageSrc: '/img/ppc-bg.jpg',
			text: 'Mirandina partička nápadama vyzbrojenejch markeťáků poskytuje komplexní služby internetového marketingu. Onlinový PPC kampaně, co podávaj solidní výkon, SEO vychytávky pro tučnej traffic z organicu, správu sociálních sítí Facebook & Instagram pro hladový fanoušky, zbožové vyhledávače, e-mailing, webovou analytiku a další neodmyslitelný marketovky pro váš do maxima vyladěný onlajnový flow.',
			hashtags: ['Google Ads', 'Sklik', 'Sociální sítě', 'Zbožové vyhledávače', 'Webová analytika', 'PPC', 'Google Analytics'],
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
		},
		soc: {
			imageSrc: '/img/soc-bg.jpg',
			text: 'Mirandiny digitální pavučiny se nebezpečně rozvíjej napříč tímhle sociálním prostorem a pochytávaj kdejakého fanouška. Přidělenej stratég sociálních mega-sítí, co tuní obsah, četuje a ladí vizuály s grafikem, bude měsíc co měsíc sedět nad vaším profilem.',
			hashtags: ['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube', 'Strategie', 'Firemní identita', 'Copywriting'],
		},
		design: {
			imageSrc: '/img/design-bg.jpg',
			text: 'Vyladěná grafika od Mirandy, co má hlavu plnou nápadů a hýří kreativitou, to je pane kumšt. Obzvlášť, když přijde na takovou korporátní identitu, to se pak jeden zapotí, než to začne lícovat. Všechny tyhle bannery, tiskoviny, letáky a loga.',
			hashtags: ['Produktové fotografie', 'Webdesign', 'Návrh značek', 'Tiskoviny', 'Korporátní design a identita', 'Reklamní bannery'],
		},
		influence: {
			imageSrc: '/img/influence-bg.jpg',
			text: 'Zajistíme ty správný influencery pro tvý vymazlený kampaně. Disponujeme top databází těch nejvlivnějších týpků, co pozvednou tvůj brand na úplně jinej level.',
			hashtags: ['Influencer marketing', 'Microinfluencing'],
		},
	}
	return (
		<>
			<div className='narrow text-center'>
				<h2>Miranda je ta pravá</h2>
				<p>
					Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu přidáte
					pár nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní!{' '}
				</p>
			</div>
			<div className={`columns col-2 ${styles.sluzbyWrapper}`}>
				<div className={`column ${styles.columnImage}`} style={{ position: 'relative' }}>
					{displayRef == ppc && (
						<>
							<PravaMirandaImage imageSrc={data.ppc.imageSrc} text={data.ppc.text} hashtags={data.ppc.hashtags} />
						</>
					)}
					{displayRef == weby && (
						<>
							<PravaMirandaImage imageSrc={data.weby.imageSrc} text={data.weby.text} hashtags={data.weby.hashtags} />
						</>
					)}
					{displayRef == soc && (
						<>
							<PravaMirandaImage imageSrc={data.soc.imageSrc} text={data.soc.text} hashtags={data.soc.hashtags} />
						</>
					)}
					{displayRef == design && (
						<>
							<PravaMirandaImage imageSrc={data.design.imageSrc} text={data.design.text} hashtags={data.design.hashtags} />
						</>
					)}
					{displayRef == influence && (
						<>
							<PravaMirandaImage imageSrc={data.influence.imageSrc} text={data.influence.text} hashtags={data.influence.hashtags} />
						</>
					)}
				</div>
				<div className='column'>
					<ul className={styles.sluzbyList}>
						<li
							ref={ppcMob}
							onMouseEnter={() => {
								setDisplayRef(ppc)
							}}
							onClick={() => {
								displayMobileContent(ppcMob)
							}}
						>
							<PravaMirandaLink title='PPC kampaně' url='/sluzby/ppc-vyhledavace' />
							{displayRefMob == ppcMob && <PravaMirandaContentMobile text={data.ppc.text} hashtags={data.ppc.hashtags} />}
						</li>
						<li
							ref={webyMob}
							onMouseEnter={() => {
								setDisplayRef(weby)
							}}
							onClick={() => {
								displayMobileContent(webyMob)
							}}
						>
							<PravaMirandaLink title='Weby &amp; e-shopy' url='/sluzby/weby' />
							{displayRefMob == webyMob && <PravaMirandaContentMobile text={data.weby.text} hashtags={data.weby.hashtags} />}
						</li>
						<li
							ref={socMob}
							onMouseEnter={() => {
								setDisplayRef(soc)
							}}
							onClick={() => {
								displayMobileContent(socMob)
							}}
						>
							<PravaMirandaLink title='Sociální sítě' url='/sluzby/socialni-site' />
							{displayRefMob == socMob && <PravaMirandaContentMobile text={data.soc.text} hashtags={data.soc.hashtags} />}
						</li>
						<li
							ref={designMob}
							onMouseEnter={() => {
								setDisplayRef(design)
							}}
							onClick={() => {
								displayMobileContent(designMob)
							}}
						>
							<PravaMirandaLink title='Kreativa' url='/sluzby/design' />
							{displayRefMob == designMob && <PravaMirandaContentMobile text={data.design.text} hashtags={data.design.hashtags} />}
						</li>
						<li
							ref={influenceMob}
							onMouseEnter={() => {
								setDisplayRef(influence)
							}}
							onClick={() => {
								displayMobileContent(influenceMob)
							}}
						>
							<PravaMirandaLink title='Influencing' url='/sluzby/influencer' />
							{displayRefMob == influenceMob && <PravaMirandaContentMobile text={data.influence.text} hashtags={data.influence.hashtags} />}
						</li>
					</ul>
				</div>
			</div>
			<div className='buttons-wrapper text-center justify-center'>
				<Link href='/kontakty#kontakt'>
					<a className='btn btn-secondary'>Poptat službu</a>
				</Link>
			</div>
		</>
	)
}

export default PravaMiranda
