import Head from 'next/head'
import Link from 'next/link'
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
		</>
	)
}