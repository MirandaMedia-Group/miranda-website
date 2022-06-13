import HeroStatic from '../components/HeroStatic/HeroStatic'
import styles from '../styles/proc-s-nami.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<section>
				<HeroStatic title='' subtitle='' image='/img/proc-s-nami.jpg' />
			</section>
			<section className='text-center'>
				<div className='container narrow'>
					<h2>Miranda</h2>
					<p>
						Tahle partička kolem Mirandiny rodiny má pěkně zvostra našlápnuto a tuní si to ladně podle svejch vlastních pravidel. Onlinový PPC
						kampaně, co podávaj solidní výkon, SEO vychytávky pro tučnej traffic z organicu, správu sociálních sítí Facebook &amp; Instagram pro
						hladový fanoušky, zbožové vyhledávače, e-mailing, webovou analytiku a další neodmyslitelný marketovky pro váš do maxima vyladěný
						onlajnový flow.
					</p>
				</div>
				<div className={`container ${styles.grid}`}>
					<div className={`${styles.itemWide} ${styles.textItem}`}>
						<h3>Jak to všechno začalo</h3>

						<p>
							Michal stojí za úspěšnou digitální agenturou s řadou známých klientů a značek. Za svou více jak 10letou praxi získal bohaté
							zkušenosti z on-line marketingu a v oblasti Business Development. Založil několik úspěšných e-shopů a pěknou řádku let působil v
							oblasti mediálního plánování.
						</p>
					</div>
					<div className={`${styles.itemWide} ${styles.itemBuchta}`}>
						<Image src='/img/buchta.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div>
						<Image src='/img/epiderma-casopis.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={`${styles.textItem} ${styles.mobileWide}`}>
						<p>
							Tomáš je v obchodu a marketingu jak ryba ve vodě. 5 let působil v pozici Head of Sales pro investiční skupinu Banky ochrany
							životního prostředí. V průběhu práce si odskočil zastudovat na Business Institut v oboru Marketing, media &amp; sofskills. Založil
							obsahovou agenturu a podílel se na řadě marketingových aktivit pro české i mezinárodní společnosti.{' '}
						</p>
						<p>Když se potkal s Tomášem, slovo dalo slovo a vznikla Miranda. </p>
					</div>
					<div>
						<Image src='/img/miranda-lounge.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={`${styles.textItem} text-center`}>
						<p>
							<strong>
								25 <span>profesionálů</span>
							</strong>
						</p>
					</div>
					<div>
						<Image src='/img/grid2.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div>
						<Image src='/img/grid20.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={`${styles.itemWider} ${styles.textItem}`}>
						<p>
							Na vymýšlení všemožných strategií, postupů a nápadů posbíralo Mirandino holešovický crew už nějaký ty body zkušeností. Dneska jsme
							nabušenej tým profíků ze všech oborů napříč digitálem a odbavujem hustý projekty, který nás baví.
						</p>
						{/* <Link href='/jak-to-funguje'>
							<a className='btn btn-secondary'>Zjisti jak to u nás funguje</a>
						</Link> */}
					</div>
					<div>
						<Image src='/img/grid5.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div>
						<Image src='/img/grid6.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div>
						<Image src='/img/grid8.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div>
						<Image src='/img/grid9.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={styles.itemWider}>
						<Image src='/img/grid10.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={`text-center ${styles.mobileWide} ${styles.textItem}`}>
						<p>
							<strong>
								15 let <span>zkušeností</span>
							</strong>
						</p>
					</div>
					<div>
						<Image src='/img/grid11.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={`${styles.mobileWide} ${styles.textItem}`}>
						<p>
							<strong>
								Tomáš Cina <span>Zakladatel společnosti</span>
							</strong>
						</p>
						<p>
							<strong>
								Michal Baloun <span>Zakladatel společnosti</span>
							</strong>
						</p>
						{/* <p>
							Tomáš je v obchodu a marketingu jak ryba ve vodě. 5 let působil v pozici Head of Sales pro investiční skupinu Banky ochrany
							životního prostředí. V průběhu práce si odskočil zastudovat na Business Institut v oboru Marketing, media &amp; sofskills. Založil
							obsahovou agenturu a podílel se na řadě marketingových aktivit pro české i mezinárodní společnosti.
						</p> */}
					</div>
					<div>
						<Image src='/img/grid12.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={`${styles.textItem} text-center`}>
						<p>
							<strong>
								247+ <span>projektů</span>
							</strong>
						</p>
					</div>
					<div>
						<Image src='/img/grid13.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div>
						<Image src='/img/grid14.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
				</div>
			</section>
		</>
	)
}
