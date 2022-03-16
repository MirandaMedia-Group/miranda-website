import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Reference from '../components/Reference/Reference'
import Sluzby from '../components/Sluzby/Sluzby'

export default function EShopy() {
	return (
		<>
			<Head>
				
			</Head>
			<section>
				<HeroStatic></HeroStatic>
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
						<div className="item">
							
						</div>
					</div>
				</div>
			</section>
		</>
	)
}