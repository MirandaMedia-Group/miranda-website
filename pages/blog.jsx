import styles from '../styles/blog.module.scss'
import FetchedImage from '../components/FetchedImage/FetchedImage'
import { fetchAPI } from '../lib/api'
import Link from 'next/link'
import HeroStaticSlim from '../components/HeroStaticSlim/HeroStaticSlim'

const Blog = ({ clanky }) => {
	return (
		<>
			<section>
				<HeroStaticSlim title='Blog &amp; podcasty' image='/img/blog-hero.jpg' imageMobile='/img/blog-hero-mobile.jpg' />
			</section>
			<section>
				<div className={`container ${styles.grid}`}>
					{clanky.map((item, index) => {
						return (
							<Link key={index} href={`/clanky/${item.attributes.slug}`} passHref>
								<article>
									<div className={styles.image}>
										<FetchedImage image={item.attributes.obrazek} />
										<div className={styles.cat}>
											{item.attributes.kategorie_clankus.data.map((cat, index) => {
												return <span key={index}>{cat.attributes.nazev}</span>
											})}
										</div>
									</div>
									<div className={styles.meta}>
										{item.attributes.read_duration && <span className={styles.reading}>{item.attributes.read_duration}</span>}
										<span className={styles.date}>{new Date(item.attributes.publishedAt).toLocaleDateString('cs-CZ')}</span>
										{item.attributes.autor && <span className={styles.author}>{item.attributes.autor.data.attributes.jmeno}</span>}
									</div>
									<h1>{item.attributes.nazev}</h1>
									<p>{item.attributes.description}</p>
									<div className={styles.readMore}>
										<span>
											<svg width='52' height='24' viewBox='0 0 52 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z' />
											</svg>
										</span>
									</div>
								</article>
							</Link>
						)
					})}
				</div>
			</section>
		</>
	)
}

export async function getStaticProps() {
	const clankyRes = await fetchAPI('/clanky', { populate: '*', sort: 'publishedAt:desc' })

	return {
		props: {
			clanky: clankyRes.data,
		},
		revalidate: 1,
	}
}

export default Blog
