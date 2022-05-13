import Link from 'next/link'
import Image from 'next/image'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Sluzby from '../components/Sluzby/Sluzby'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import ContactForm from '../components/ContactForm/ContactForm'
import styles from '../styles/e-shopy.module.scss'
import { fetchAPI } from '../lib/api'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

export default function EShopy({ coONas }) {

	return (
		<>
			<section>
				<HeroStatic 
					title="Postavíme vám Shoptet na míru" 
					subtitle="Kompletní e-shopové řešení za nejkratší možnou dobu"
					image=""
					video="/shoptetnamiru.mp4"
					buttons
					overlay
					>
				</HeroStatic>
			</section>
			<section className='container'>
				<Sluzby></Sluzby>
			</section>
			<section className='hidden'>
				<div className="container text-center">
					<h2>Naše hotové e-shopy na míru na Shoptetu</h2>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={20}
						slidesPerView={1}
						navigation
						pagination={{
							clickable: true
						}}
						breakpoints={{
							992: {
								slidesPerView: 3,
							},
							600: {
								slidesPerView: 2,
							}
						}}
					>
						<SwiperSlide>
							<Link href="#" passHref>
								<div className={styles.slideItem}>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<a href="www.rebelbean.cz" target="_blank" className={styles.anchor}>www.rebelbean.cz</a>
								</div>
							</Link>
							<Link href="#" passHref>
								<div className={styles.slideItem}>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<a href="www.rebelbean.cz" target="_blank" className={styles.anchor}>www.rebelbean.cz</a>
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="#" passHref>
								<div className={styles.slideItem}>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<a href="www.rebelbean.cz" target="_blank" className={styles.anchor}>www.rebelbean.cz</a>
								</div>
							</Link>
							<Link href="#" passHref>
								<div className={styles.slideItem}>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<a href="www.rebelbean.cz" target="_blank" className={styles.anchor}>www.rebelbean.cz</a>
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="#" passHref>
								<div className={styles.slideItem}>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<a href="www.rebelbean.cz" target="_blank" className={styles.anchor}>www.rebelbean.cz</a>
								</div>
							</Link>
							<Link href="#" passHref>
								<div className={styles.slideItem}>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<a href="www.rebelbean.cz" target="_blank" className={styles.anchor}>www.rebelbean.cz</a>
								</div>
							</Link>
						</SwiperSlide>
					</Swiper>
					<div className={styles.buttonsWrap}>
						<Link href="/reference">
							<a className="btn btn-tertiary">
								<span data-hover="Zobrazit všechny reference">
									Zobrazit všechny reference
								</span>
							</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="systemy">
				<div className="container columns col-2 align-center">
					<div className="column">
						<Image src="/img/systemy-bg.png" width={821} height={738} alt="" layout='responsive'></Image>
					</div>
					<div className="column">
						<h2>Napojení Shoptet na pokladní, informační,
							účetní a podnikové systémy ERP a CRM</h2>
						<ul className='styled'>
							<li>Synchronizace dat v reálném čase</li>
							<li>Možnost doprogramovat vlastní funkcionality</li>
						</ul>
						<div className="buttons-wrapper" style={{marginTop: '20px'}}>
							<Link href="/kontakt">
								<a className="btn btn-tertiary">
									<span data-hover="Pojďme najít řešení">
										Pojďme najít řešení
									</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='hidden'>
				<div className="container">
					<Swiper
						modules={[Navigation, Pagination]}
						slidesPerView={1}
						spaceBetween={20}
						navigation
						pagination
					>
						<SwiperSlide className='reference-banner'>
							<div className="columns col-2 align-center">
								<div className="column">
									<h3>Navýšili jsme o <strong>125%</strong></h3>
									<p>lorem ipsum dolor sit amet adipsicing lorem  ipsum dolor sit amet adispcing lorem ipsum dolor sti amet.</p>
									<Link href="/reference/expresmenu">
										<a className='btn btn-primary'>
											<span data-hover="Zjistit více">
												Zjistit více
											</span>
										</a>
									</Link>
								</div>
								<div className="column">
									<Image src="/img/reference-banner-EM.png" width={720} height={520} alt="" layout="responsive"></Image>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='reference-banner'>
							<div className="columns col-2 align-center">
								<div className="column">
									<h3>Navýšili jsme o <strong>125%</strong></h3>
									<p>lorem ipsum dolor sit amet adipsicing lorem  ipsum dolor sit amet adispcing lorem ipsum dolor sti amet.</p>
									<Link href="/reference/expresmenu">
										<a className='btn btn-primary'>
											<span data-hover="Případová studie">
												Případová studie
											</span>
										</a>
									</Link>
								</div>
								<div className="column">
									<Image src="/img/reference-banner-EM.png" width={720} height={520} alt="" layout="responsive"></Image>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='reference-banner'>
							<div className="columns col-2 align-center">
								<div className="column">
									<h3>Navýšili jsme o 125%</h3>
									<p>lorem ipsum dolor sit amet adipsicing lorem  ipsum dolor sit amet adispcing lorem ipsum dolor sti amet.</p>
									<Link href="/reference/expresmenu">
										<a className='btn btn-primary'>
											<span data-hover="Případová studie">
												Případová studie
											</span>
										</a>
									</Link>
								</div>
								<div className="column">
									<Image src="/img/reference-banner-EM.png" width={720} height={520} alt="" layout="responsive"></Image>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
			<section className="proc-shoptet">
				<div className="container narrow text-center">
					<h2>Proč zvolit Shoptet?</h2>
					<p>Jednička mezi e-commerce platformami v Česku a na na Slovensku s obrovskou podporou a minimálními náklady na provoz.</p>
				</div>
				<div className="container">
					<div className="proc-shoptet-block">
						<div className="bg-img">
							<Image src="/img/proc-shoptet-bg.svg" width={1369} height={916} alt=""></Image>
						</div>
						<div className="item">
							<span className="number">01</span>
							<p>Shoptet je na českém trhu <strong>TOP on-line platforma</strong> určená pro provozování elektronického obchodu. <strong>S Mirandou dokážete</strong> krabicové řešení 
								posunout na úroveň <strong>řešení na míru!</strong></p>
						</div>
						<div className="item">
							<span className="number">02</span>
							<p><strong>Shoptet na míru znamená vlastní e-shop</strong> s možností individuálních a téměř neomezených úprav grafiky, struktury a funkcionalit</p>
						</div>
						<div className="item">
							<span className="number">03</span>
							<p><strong>Řešení na míru od Mirandy</strong> vám pomůže vystoupit z davu a odlišit se od konkurence</p>
						</div>
						<div className="item">
							<span className="number">04</span>
							<p><strong>Intuitivní a jednoduchá obsluha</strong>, kterou zvládne každý a hlavně vám vše vysvětlíme a do administrace <strong>zaškolíme</strong>.</p>
						</div>
						<div className="mockup">
							<Image src="/img/mobile-mockup.png" width={595} height={862} alt=""></Image>
						</div>
					</div>
				</div>
			</section>
			<section className='hidden'>
				<CoONasRikaji data={coONas}></CoONasRikaji>
			</section>
			<section className="container visible">
				<div className="konfigurator">
					<div className="pripravujeme">
						<Image src="/img/pripravujeme.svg" width={210} height={214} alt=""></Image>
					</div>
					<div className="columns col-2">
						<div className="column">
							<h2>Zkuste si nakonfigurovat váš Shoptet na míru</h2>
							<p><strong>Zaberete jo jen chvílku</strong> (pár drag&amp;drop), <strong>dáte nám váš email a my vám obratem pošleme orientační nabídku.</strong> Kromě toho máte jedinečnou příležitost poznat, 
								na čem závisí a z jakých kroků se skládá tvorba skutečně úspěšného e-shopu na Shoptetu.</p>
							
								<a className='btn btn-primary disabled'>
									<span data-hover="Přejít na konfigurátor">
										Přejít na konfigurátor
									</span>
								</a>
							
						</div>
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
			<section id='kontakt' className="kontakt-form visible container">
				<ContactForm></ContactForm>
			</section>
		</>
	)
}

export async function getStaticProps() {
	const coONasRes = await fetchAPI('/co-o-nas-rikajis', { populate: '*' })
  
	return {
		props: {
			coONas: coONasRes.data,
		},
		revalidate: 1,
	}
  }