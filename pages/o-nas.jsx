import HeroStatic from '../components/HeroStatic/HeroStatic'
import styles from '../styles/proc-s-nami.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<section>
				<HeroStatic
					title='Miranda'
					subtitle='Digitální &amp; marketingová agentura se smyslem pro design a fair play.'
					image='/img/proc-s-nami.jpg'
					imageMobile='/img/proc-s-nami.jpg'
				/>
			</section>
			<section className='text-center'>
				<div className='container narrow'>
					<h2>Miranda</h2>
					<p>Digitální & marketingová agentura se smyslem pro design a fair play.</p>
				</div>
				<div className={`container ${styles.grid}`}>
					<div className={`${styles.itemWide} ${styles.textItem}`}>
						<h3>Jak to všechno začalo</h3>
						<p>
							Když se potkal Tomáš s Michalem, měli oba svou vlastní agenturu. Každý se věnoval trochu něčemu jinému. Všechno do sebe začalo
							zapadat až ve chvíli, kdy získali svého prvního společného klienta a pochopili, že dohromady jim to spolu šlape jak hodinky. A tak
							se začal psát příběh Mirandy.
						</p>
					</div>
					<div className={`${styles.itemWide} ${styles.itemBuchta}`}>
						<Image src='/img/buchta.png' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div>
						<Image src='/img/epiderma-casopis.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true}></Image>
					</div>
					<div className={`${styles.textItem} ${styles.mobileWide}`}>
						<p>
							Chcete-li poznat Mirandu a to, kým opravdu je, zastavte se za ní v holešovickém přístavu na Praze 7. Uvítá vás s vřelostí jí
							vlastní, a když si padnete do oka, už nikdy nebudete chtít jinou;)
						</p>
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
							Na vymýšlení všemožných strategií, projektů a nápadů posbírala Miranda už nějaký ty body zkušeností. Možná i proto jí naslouchají
							klienti jako Philips, Zdeněk Pohlreich, Pivovar Svijany, PetCenter a mnozí další...sami se jich zeptejte, co na Mirandu říkají.
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
							<strong className={styles.small}>
								Tomáš Cina <span>Zakladatel společnosti</span>
							</strong>
						</p>
						<p>
							<strong className={styles.small}>
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
