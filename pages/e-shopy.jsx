import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Reference from '../components/Reference/Reference'
import Sluzby from '../components/Sluzby/Sluzby'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'

export default function EShopy() {
	return (
		<>
			<Head>
				
			</Head>
			<section>
				<HeroStatic 
					title="Připravíme vám Shoptet na míru" 
					subtitle="Kompletní e-shopové řešení za nejkratší možnou dobu"
					image="/img/eshopy-hero.png"
					>
				</HeroStatic>
			</section>
			<section className="container">
				<h2>Naše práce</h2>
				<Reference></Reference>
				<div className="buttons-wrapper justify-center">
					<Link href="/reference">
						<a className="btn btn-secondary">Další reference</a>
					</Link>
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
		</>
	)
}