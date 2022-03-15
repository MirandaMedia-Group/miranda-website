import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Reference from '../components/Reference/Reference'

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
		</>
	)
}