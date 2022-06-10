import { fetchAPI } from '../../lib/api'
import FetchedImage from '../../components/FetchedImage/FetchedImage'
import ReactMarkdown from 'react-markdown'
import styles from './clanek.module.scss'
import HeroStaticSlim from '../../components/HeroStaticSlim/HeroStaticSlim'

const Clanek = ({ clanek, autor }) => {
	console.log(clanek)
	return (
		<article>
			<section className='no-margin'>
				<HeroStaticSlim image='/img/clanek-hero.jpg' />
			</section>
			<section className={styles.mainSection}>
				<div className={styles.container}>
					<div className={styles.heroImage}>
						<FetchedImage image={clanek.attributes.obrazek} />
					</div>
					<div className={styles.contentWrapper}>
						<main>
							<div className={styles.kategorie}>
								{clanek.attributes.kategorie_clankus.data.map((cat, index) => {
									return <span key={index}>{cat.attributes.nazev}</span>
								})}
							</div>
							<h1>{clanek.attributes.nazev}</h1>
							<ReactMarkdown>{clanek.attributes.content}</ReactMarkdown>
						</main>
						<aside>
							<div>
								<span className={styles.readTime}>Doba čtení článku {clanek.attributes.read_duration}</span>
							</div>
							<strong>Autor</strong>
							<div className={styles.author}>
								<div className={styles.image}>
									<FetchedImage image={autor.attributes.avatar} />
								</div>
								<div className={styles.info}>
									<span>{autor.attributes.jmeno}</span>
									<span>{autor.attributes.pozice}</span>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
			<section className={styles.heroArticle}>
				<div className={`${styles.heroTexts}`}>
					<div className='container'>
						<div className={styles.heroCat}></div>
					</div>
				</div>
			</section>
			<section></section>
		</article>
	)
}

export async function getStaticPaths() {
	const clankyRes = await fetchAPI('/clanky', { fields: ['slug'] })

	return {
		paths: clankyRes.data.map((clanek) => ({
			params: {
				slug: clanek.attributes.slug,
			},
		})),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const clanekRes = await fetchAPI('/clanky', {
		filters: {
			slug: params.slug,
		},
		populate: '*',
	})
	const authorRes = await fetchAPI(`/autors/${clanekRes.data[0].attributes.autor.data.id}`, {
		populate: '*',
	})

	return {
		props: { clanek: clanekRes.data[0], autor: authorRes.data },
		revalidate: 1,
	}
}

export default Clanek
