import Head from 'next/head'
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
			</section>
			<section className='container'>
				<Sluzby></Sluzby>
			</section>
		</>
	)
}