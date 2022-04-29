import Link from 'next/link'
import Image from 'next/image'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Sluzby from '../components/Sluzby/Sluzby'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import ContactForm from '../components/ContactForm/ContactForm'
import styles from '../styles/e-shopy.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

export default function EShopy() {
	return (
		<>
			<section>
				<HeroStatic 
					title="Postavíme vám Shoptet na míru" 
					subtitle="Kompletní e-shopové řešení za nejkratší možnou dobu"
					image=""
					video="/shoptetnamiru.mp4"
					buttons="true"
					>
				</HeroStatic>
			</section>
			<section>
				<div className="container text-center">
					<h2>Naše hotové e-shopy na míru na Shoptetu</h2>
					<Swiper
						modules={[Navigation]}
						spaceBetween={20}
						slidesPerView={3}
						navigation
						pagination
					>
						<SwiperSlide className={styles.slideItem}>
							<Link href="#" passHref>
								<>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<span className={styles.anchor}>www.rebelbean.cz</span>
								</>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.slideItem}>
							<Link href="#" passHref>
								<>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<span className={styles.anchor}>www.rebelbean.cz</span>
								</>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.slideItem}>
							<Link href="#" passHref>
								<>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<span className={styles.anchor}>www.rebelbean.cz</span>
								</>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.slideItem}>
							<Link href="#" passHref>
								<>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<span className={styles.anchor}>www.rebelbean.cz</span>
								</>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.slideItem}>
							<Link href="#" passHref>
								<>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<span className={styles.anchor}>www.rebelbean.cz</span>
								</>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.slideItem}>
							<Link href="#" passHref>
								<>
									<Image src="/img/rebelbean.jpg" width={466} height={466} alt="Rebel-bean.cz" layout='responsive'></Image>
									<span className={styles.anchor}>www.rebelbean.cz</span>
								</>
							</Link>
						</SwiperSlide>
					</Swiper>
					<div className={styles.buttonsWrap}>
						<Link href="/reference">
							<a className="btn btn-tertiary">Zobrazit všehny reference</a>
						</Link>
					</div>
				</div>
			</section>
			<section className='container'>
				<Sluzby></Sluzby>
			</section>
			<section className="systemy">
				<div className="container columns col-2 align-center">
					<div className="column">
						<div className="img-wrapper">
							<Image src="/img/systemy-bg.png" width={771} height={731} alt=""></Image>
						</div>
					</div>
					<div className="column">
						<h2>Napojujeme na jakýkoliv systém, který potřebujete</h2>
						<p>Potřebujete napojit systém, který jste zde nenašli?<br />Kontaktujte nás a najdeme se řešení i pro vás!</p>
						<div className="buttons-wrapper">
							<Link href="/kontakt">
								<a className="btn btn-secondary">Pojďme najít řešení</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="proc-shoptet">
				<div className="container">
					<h2>Proč byste si měli vybrat pro vaše úspěšné podnikání právě Shoptet</h2>
					<p>Jednička mezi e-commerce platformami v Česku a na Slovensku.</p>
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
			<section>
				<CoONasRikaji></CoONasRikaji>
			</section>
			<section className="container konfigurator">
				<div className="columns col-2">
					<div className="column">
						<h2>Zkuste si nakonfigurovat váš e-shop</h2>
						<p><strong>Zaberete jo jen chvílku</strong> (pár draganddrop), dáte nám váš email a my vám obratem pošleme nabídku adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
							laboris nisi ut aliquip ex ea commodo consequat.</p>
						<Link href="#">
							<a className='btn btn-primary'>Přejít na konfigurátor</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="container balicky">
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
			</section>
			<section className="kontakt-form">
				<ContactForm></ContactForm>
			</section>
		</>
	)
}