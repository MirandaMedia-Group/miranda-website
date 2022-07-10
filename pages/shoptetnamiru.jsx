import Link from 'next/link'
import Image from 'next/image'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Sluzby from '../components/Sluzby/Sluzby'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import ContactForm from '../components/ContactForm/ContactForm'
import styles from '../styles/e-shopy.module.scss'
import { fetchAPI } from '../lib/api'
import { useEffect, useRef, useState } from 'react'
import Reference from '../components/Reference/Reference'

export default function EShopy({ reference, coONas }) {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		setWindowWidth(window.innerWidth)
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth)
		})
	}, [])

	return (
		<>
			<section>
				<HeroStatic
					title='Postavíme vám Shoptet na míru'
					subtitle='Kompletní e-shopové řešení za nejkratší možnou dobu'
					image='/img/shoptetnamiru-hero.jpg'
					// video='/shoptetnamiru.mp4'
					imageMobile='/img/shoptetnamiru-hero-mobile.jpg'
					buttons
					maxWidth
					// logo='/img/shoptetpremium.png'
				></HeroStatic>
			</section>
			<section className={`container ${styles.anchors}`}>
				<nav>
					<ul>
						<li>
							<a href='#sluzby'>Služby</a>
						</li>
						<li>
							<a href='#reference'>Reference</a>
						</li>
						<li>
							<a href='#proc-shoptet'>Proč Shoptet</a>
						</li>
						<li>
							<a href='#reakce'>Reakce zákazníků</a>
						</li>
						<li>
							<a href='#konfigurator'>Konfigurátor Shoptet</a>
						</li>
						<li>
							<a href='#sprava'>Správa e-shopu</a>
						</li>
						<li>
							<a href='#kontakt'>Kontakty</a>
						</li>
					</ul>
				</nav>
			</section>
			<section id='reference' className='hidden'>
				<div className='container text-center'>
					<h2>Naše e-shopy na Shoptetu na míru</h2>
					<Reference data={reference} />
				</div>
			</section>
			<section id='sluzby' className='container'>
				<Sluzby></Sluzby>
			</section>
			<section className='container'>
				<Link href='/reference/expresmenu' passHref>
					<div className={styles.banner} style={{ backgroundColor: '#F7F4D5' }}>
						<div className={styles.logo}>
							<Image src='/img/expremenu-black.png' width={200} height={80} alt='ExpresMenu' priority={true}></Image>
						</div>
						<div className={styles.text}>
							<p>
								<strong>o 3278 %</strong> nárůst tržeb.
							</p>
						</div>
						<div className={styles.image}>
							<Image src={'/img/expresmenu-mockup.png'} alt='' width={559} height={350} />
						</div>
						<div className={styles.arrow}>
							<svg width='52' height='24' viewBox='0 0 52 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z' />
							</svg>
						</div>
					</div>
				</Link>
			</section>
			<section id='proc-shoptet' className={`container ${styles.procShoptet}`}>
				<div className='columns col-1-2'>
					<div className='column' style={{ position: 'relative', overflow: 'visible' }}>
						{windowWidth > 767 && <Image src={'/img/mobil-mockup.png'} width={629} height={816} alt='' layout='responsive' priority={true}></Image>}
					</div>
					<div className='column'>
						<h2>Proč zvolit Shoptet?</h2>
						<p className='large'>
							Jednička mezi e-commerce platformami v Česku a na na Slovensku s obrovskou podporou a minimálními náklady na provoz.
						</p>
						{windowWidth <= 767 && (
							<Image src={'/img/mobil-mockup-mobile.jpg'} width={335} height={250} alt='' layout='responsive' priority={true}></Image>
						)}
						<div className={styles.grid}>
							<div className={styles.item}>
								<span className={styles.number}>01</span>
								<p>
									Shoptet je na českém trhu <strong>TOP on-line platforma</strong> určená pro provozování e-shopu.{' '}
									<strong>S Mirandou dokážete</strong> krabicové řešení posunout na úroveň <strong>řešení na míru!</strong>
								</p>
							</div>
							<div className={styles.item}>
								<span className={styles.number}>02</span>
								<p>
									<strong>Shoptet na míru znamená vlastní e-shop</strong> s možností individuálních a téměř neomezených úprav grafiky,
									struktury a funkcionalit.
								</p>
							</div>
							<div className={styles.item}>
								<span className={styles.number}>03</span>
								<p>
									<strong>Řešení na míru od Mirandy</strong> vám pomůže vystoupit z davu a odlišit se od konkurence.
								</p>
							</div>
							<div className={styles.item}>
								<span className={styles.number}>04</span>
								<p>
									<strong>Intuitivní a jednoduchá obsluha</strong>, kterou zvládne každý a hlavně vám vše vysvětlíme a do administrace{' '}
									<strong>zaškolíme</strong>.
								</p>
							</div>
						</div>
						{windowWidth <= 767 && (
							<div className={styles.systemy}>
								<Image src={'/img/eso9.png'} width={150} height={150} alt='Eso9' />
								<Image src={'/img/moneys5.png'} width={150} height={150} alt='Money S5' />
								<Image src={'/img/helios.png'} width={150} height={150} alt='Helios' />
								{/* <Image src={'/img/abra.png'} width={150} height={150} alt='Abra' /> */}
								<Image src={'/img/pohoda.png'} width={150} height={150} alt='Pohoda' />
								<Image src={'/img/k2.png'} width={150} height={150} alt='K2' />
								<Image src={'/img/nevim.png'} width={150} height={150} alt='Nevim' />
							</div>
						)}
						<h3>Napojíme váš Shoptet na pokladní, informační, účetní a podnikové systémy ERP a CRM</h3>
						<ul>
							<li>Synchronizace dat v reálném čase</li>
							<li>Možnost doprogramovat vlastní funkcionality</li>
						</ul>
					</div>
				</div>
				{windowWidth > 767 && (
					<div className={styles.systemy}>
						<Image src={'/img/eso9.png'} width={150} height={150} alt='Eso9' />
						<Image src={'/img/moneys5.png'} width={150} height={150} alt='Money S5' />
						<Image src={'/img/helios.png'} width={150} height={150} alt='Helios' />
						<Image src={'/img/abra.png'} width={150} height={150} alt='Abra' />
						<Image src={'/img/pohoda.png'} width={150} height={150} alt='Pohoda' />
						<Image src={'/img/k2.png'} width={150} height={150} alt='K2' />
						<Image src={'/img/nevim.png'} width={150} height={150} alt='Nevim' />
					</div>
				)}
				<div className='buttons-wrapper text-center justify-center'>
					<Link href='#kontakt'>
						<a className='btn btn-secondary'>Pojďme se dohodnout</a>
					</Link>
				</div>
			</section>
			<section className='container'>
				<Link href='/reference/epiderma' passHref>
					<div className={styles.banner} style={{ backgroundColor: '#F4EBE4' }}>
						<div className={styles.logo}>
							<Image src='/img/epiderma-logo-black.png' width={175} height={160} alt='Café Imperial Dolce' priority={true}></Image>
						</div>
						<div className={styles.text}>
							<p>
								<strong>305%</strong> nárůst obratu po redesignu
							</p>
						</div>
						<div className={styles.image}>
							<Image src={'/img/epiderma-mockup.png'} alt='' width={559} height={350} />
						</div>
						<div className={styles.arrow}>
							<svg width='52' height='24' viewBox='0 0 52 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z' />
							</svg>
						</div>
					</div>
				</Link>
			</section>
			{/* <section className='systemy'>
				<div className='container columns col-2 align-center'>
					<div className='column'>
						<Image
							src='/img/systemy-bg.png'
							width={821}
							height={738}
							alt=''
							layout='responsive'
							priority={true}
						></Image>
					</div>
					<div className='column'>
						<h2>
							Napojení Shoptet na pokladní, informační, účetní a
							podnikové systémy ERP a CRM
						</h2>
						<ul className='styled'>
							<li>Synchronizace dat v reálném čase</li>
							<li>Možnost doprogramovat vlastní funkcionality</li>
						</ul>
						<div
							className='buttons-wrapper'
							style={{ marginTop: '20px' }}
						>
							<Link href='/kontakt'>
								<a className='btn btn-tertiary'>
									<span data-hover='Pojďme najít řešení'>
										Pojďme najít řešení
									</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section> */}
			{/* <section className='hidden container'>
				<div className='custom-swiper-wrapper'>
						<Swiper
							modules={[Navigation, Pagination]}
							slidesPerView={1}
							spaceBetween={20}
							navigation={{
								prevEl: swiperPrev.current,
								nextEl: swiperNext.current,
							}}
							onBeforeInit={(swiper) => {
								swiper.params.navigation.prevEl =
									swiperPrev.current;
								swiper.params.navigation.nextEl =
									swiperNext.current;
							}}
							pagination
						>
							<SwiperSlide className='reference-banner'>
								<div className='columns col-2'>
									<div className='column'>
										<div className='logo'>
											<Image
												src='/img/expremenu-black.png'
												width={251}
												height={100}
												alt='ExpresMenu'
												priority={true}
											></Image>
										</div>
										<h3>
											Navýšili jsme o{' '}
											<strong>125%</strong>
										</h3>
										<Link href='/reference/expresmenu'>
											<a className='btn btn-primary'>
												<span data-hover='Zjistit více'>
													Zjistit více
												</span>
											</a>
										</Link>
									</div>
									<div className='column'>
										<Image
											src='/img/reference-banner-EM.png'
											width={720}
											height={520}
											alt=''
											layout='responsive'
										></Image>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide
								className='reference-banner'
								style={{ backgroundColor: '#EFE7DC' }}
							>
								<div className='columns col-2'>
									<div className='column'>
										<div className='logo'>
											<Image
												src='/img/epiderma-black.png'
												width={365}
												height={75}
												alt='Epiderma'
											></Image>
										</div>
										<h3>
											Navýšili jsme o{' '}
											<strong>125%</strong>
										</h3>
										<Link href='/reference/epiderma'>
											<a className='btn btn-primary'>
												<span data-hover='Zjistit více'>
													Zjistit více
												</span>
											</a>
										</Link>
									</div>
									<div className='column'>
										<Image
											src='/img/reference-banner-epiderma.png'
											width={720}
											height={520}
											alt=''
											layout='responsive'
										></Image>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide
								className='reference-banner'
								style={{ backgroundColor: '#F7F0EA' }}
							>
								<div className='columns col-2'>
									<div className='column'>
										<div className='logo'>
											<Image
												src='/img/dolce-black.png'
												width={240}
												height={75}
												alt='Café Imperial Dolce'
											></Image>
										</div>
										<h3>
											Navýšili jsme o{' '}
											<strong>125%</strong>
										</h3>
										<Link href='/reference/dolce'>
											<a className='btn btn-primary'>
												<span data-hover='Zjistit více'>
													Zjistit více
												</span>
											</a>
										</Link>
									</div>
									<div className='column'>
										<Image
											src='/img/reference-banner-dolce.png'
											width={720}
											height={520}
											alt=''
											layout='responsive'
										></Image>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
						<div
							className='swiper-button-prev'
							ref={swiperPrev}
						></div>
						<div
							className='swiper-button-next'
							ref={swiperNext}
						></div>
					</div>
			</section> */}
			{windowWidth > 767 && (
				<section id='reakce' className='hidden'>
					<CoONasRikaji data={coONas}></CoONasRikaji>
				</section>
			)}
			<section id='konfigurator' className='container visible'>
				<div className='konfigurator'>
					<div className='pripravujeme'>
						<Image src='/img/pripravujeme.svg' width={210} height={214} alt='' priority={true}></Image>
					</div>
					<div className='columns col-2'>
						<div className='column'>
							<h2>Zkuste si nakonfigurovat váš Shoptet na míru</h2>
							<p>
								<strong>Zaberete jo jen chvílku</strong> (pár drag&amp;drop),{' '}
								<strong>dáte nám váš email a my vám obratem pošleme orientační nabídku.</strong> Kromě toho máte jedinečnou příležitost poznat,
								na čem závisí a z jakých kroků se skládá tvorba skutečně úspěšného e-shopu na Shoptetu.
							</p>

							<a className='btn btn-secondary disabled'>Přejít na konfigurátor</a>
						</div>
						<div className='column'></div>
					</div>
				</div>
			</section>
			{/* <section className="container balicky">
				<div className={`columns col-2-3 reference`}>
					<div className="column">
						<h2>3 programy pro shoptet bez starostí</h2>
					</div>
					<div className="column">
						<p>Máte hotový e-shop a nechcete platit vysoké částky za vývojový tým? Uvítali byste mít po ruce šikovné programátory a grafiky? 
							Naše programy Miranda/partner jsou tu právě pro vás! Každý měsíc se o vás postaráme a zajistíme nezbytné úpravy, aktualizace, 
							nastavování, tvorbu bannerů a rozšíření e-shopu dle vašich aktuálních potřeb, které potřebujete neprodleně vyřešit a nemáte dostatečné kapacity ve vašem týmu.</p>
					</div>
				</div>
				<table className='balicky-table'>
					<tbody>
						<tr>
							<th></th>
							<th>Start</th>
							<th>Business</th>
							<th>Korpo</th>
						</tr>
						<tr>
							<td>Pravidelné aktualizace v ceně</td>
							<td className='cross'></td>
							<td className="checked"></td>
							<td className="checked"></td>
						</tr>
						<tr>
							<td>Kodérské a programátorské práce</td>
							<td className='cross'></td>
							<td className="checked"></td>
							<td className="checked"></td>
						</tr>
						<tr>
							<td>Grafické práce</td>
							<td className="checked"></td>
							<td className="checked"></td>
							<td className="checked"></td>
						</tr>
						<tr>
							<td>Dedikovaný projekt manažer</td>
							<td className='cross'></td>
							<td className="checked"></td>
							<td className='cross'></td>
						</tr>
						<tr>
							<td>Vyřízení požadavků nejpozději do 8 hodin</td>
							<td className="checked"></td>
							<td className="checked"></td>
							<td className="checked"></td>
						</tr>
						<tr>
							<td>Řešení klíčových servisních incidentů</td>
							<td className="checked"></td>
							<td className="checked"></td>
							<td className="checked"></td>
						</tr>
						<tr>
							<td>Zálohování dat na oddělené úložiště</td>
							<td className='cross'></td>
							<td className="checked"></td>
							<td className="checked"></td>
						</tr>
						<tr>
							<td>Rozumná cena</td>
							<td>1 995 Kč</td>
							<td>4 590 Kč</td>
							<td>Cena na vyžádání</td>
						</tr>
						<tr className='buttons'>
							<td></td>
							<td>
								<Link href="#">
									<a className="btn btn-secondary">Poptat řešení</a>
								</Link>
							</td>
							<td>
								<Link href="#">
									<a className="btn btn-secondary">Poptat řešení</a>
								</Link>
							</td>
							<td>
								<Link href="#">
									<a className="btn btn-secondary">Poptat řešení</a>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</section> */}
			<section id='kontakt' className='no-margin'>
				<ContactForm></ContactForm>
			</section>
		</>
	)
}

export async function getStaticProps() {
	const referenceRes = await fetchAPI(
		'/references',
		{
			populate: '*',
			sort: 'priorita',
			// pagination: { page: 1, pageSize: 7 },
		},
		{},
		'&filters[kategorie][nazev]=E-shop'
	)
	const coONasRes = await fetchAPI('/co-o-nas-rikajis', { populate: '*' })
	return {
		props: {
			reference: referenceRes.data,
			coONas: coONasRes.data,
		},
		revalidate: 1,
	}
}
