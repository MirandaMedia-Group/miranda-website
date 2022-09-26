import { fetchAPI } from '../../lib/api'
import FetchedImage from '../../components/FetchedImage/FetchedImage'
import ReactMarkdown from 'react-markdown'
import styles from './clanek.module.scss'
import HeroStaticSlim from '../../components/HeroStaticSlim/HeroStaticSlim'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'next-share'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import { useEffect, useState } from 'react'

const Clanek = ({ clanek, autor }) => {
	const [fullUrl, setFullUrl] = useState(null)
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		setFullUrl(window.location.href)
		setWindowWidth(window.innerWidth)
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth)
		})
	}, [fullUrl])

	return (
		<article>
			<section className='no-margin'>
				<HeroStaticSlim image='/img/clanek-hero.jpg' />
			</section>
			<section className={styles.mainSection}>
				<div className={styles.container}>
					<div className={styles.heroImage}>{clanek.attributes.obrazek && <FetchedImage image={clanek.attributes.obrazek} />}</div>
					<div className={styles.contentWrapper}>
						<main>
							<div className={styles.perexWrapper}>
								<div className={styles.kategorie}>
									{clanek.attributes.kategorie_clankus.data.map((cat, index) => {
										return <span key={index}>{cat.attributes.nazev}</span>
									})}
								</div>
								<h1>{clanek.attributes.nazev}</h1>
								{windowWidth <= 992 && (
									<div>
										<span className={styles.readTime}>Doba čtení článku {clanek.attributes.read_duration}</span>
									</div>
								)}
								<p className={styles.perex}>{clanek.attributes.description}</p>
							</div>
							<ReactMarkdown>{clanek.attributes.content}</ReactMarkdown>
						</main>
						<aside>
							{windowWidth > 992 && (
								<div>
									<span className={styles.readTime}>Doba čtení článku {clanek.attributes.read_duration}</span>
								</div>
							)}
							<strong>Autor</strong>
							<div className={styles.author}>
								<div className={styles.image}>{autor.attributes.avatar && <FetchedImage image={autor.attributes.avatar} />}</div>
								<div className={styles.info}>
									<span>{autor.attributes.jmeno}</span>
									<span>{autor.attributes.pozice}</span>
								</div>
							</div>
							<strong>Sdílejte článek</strong>
							<div className={styles.shared}>
								<div>
									<FacebookShareButton url={fullUrl}>
										<svg width='12' height='24' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M11.5748 7.77H7.7948V5.28C7.7948 4.33 8.3948 4.14 8.8448 4.14H11.5348V0H7.8448C3.7148 0 2.8148 3.09 2.8148 5.03V7.77H0.424805V12H2.8148V24H7.7948V12H11.1848L11.5748 7.77Z'
												fill='#59DC8E'
											/>
										</svg>
									</FacebookShareButton>
								</div>
								<div>
									<TwitterShareButton url={fullUrl}>
										<svg width='30' height='24' viewBox='0 0 30 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M29.8203 2.80659C28.7088 3.2759 27.5355 3.59701 26.3375 3.76991C27.6096 3.01655 28.5482 1.81857 28.9805 0.410645C27.7949 1.11461 26.4981 1.63332 25.1395 1.91738C22.8424 -0.527974 19.0015 -0.651477 16.5561 1.64567C15.3334 2.79424 14.6418 4.38743 14.6418 6.05471C14.6418 6.52402 14.7036 6.98098 14.8271 7.43794C9.93639 7.20328 5.37914 4.90614 2.27923 1.12696C1.77287 2.04088 1.50116 3.0783 1.50116 4.12807C1.50116 6.15351 2.51389 8.0431 4.20587 9.16697C3.2302 9.12992 2.27923 8.85822 1.43941 8.38891V8.45066C1.43941 11.3406 3.46485 13.823 6.29306 14.3911C5.762 14.5393 5.21859 14.6134 4.67518 14.6258C4.29232 14.6134 3.90946 14.5764 3.53896 14.5023C4.34172 16.96 6.60182 18.6396 9.18302 18.7014C7.02173 20.381 4.36642 21.2949 1.62467 21.2826C1.14301 21.2949 0.661347 21.2826 0.179688 21.2332C2.95849 23.0487 6.21896 24.012 9.54118 23.9996C19.0262 24.0614 26.7574 16.4289 26.8192 6.94393C26.8192 6.86983 26.8192 6.79573 26.8192 6.70927V5.93121C27.9925 5.06669 29.0052 4.01692 29.8203 2.80659Z'
												fill='#59DC8E'
											/>
										</svg>
									</TwitterShareButton>
								</div>
								<div>
									<LinkedinShareButton href={fullUrl}>
										<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M22.1447 0.000390816H1.85516C0.895179 -0.0196088 0.0951949 0.730376 0.0751953 1.70036C0.0751953 1.71036 0.0751953 1.73036 0.0751953 1.74036V22.2699C0.0751953 23.2299 0.85518 23.9999 1.81516 23.9999C1.82516 23.9999 1.84516 23.9999 1.85516 23.9999H22.1447C23.1147 24.0099 23.9047 23.2299 23.9247 22.2599V1.74036C23.8947 0.770375 23.1047 0.0103906 22.1447 0.000390816ZM7.30505 20.05H3.68512V9.2502H7.30505V20.05ZM5.47509 7.76023C4.45511 7.85023 3.54513 7.09025 3.45513 6.07027C3.44513 6.01027 3.44513 5.94027 3.44513 5.88027C3.44513 4.84029 4.29511 3.99031 5.34509 4.00031C5.38509 4.00031 5.43509 4.00031 5.47509 4.00031C6.51507 3.93031 7.41505 4.7103 7.49505 5.75027C7.49505 5.79027 7.49505 5.83027 7.49505 5.88027C7.53504 6.88025 6.76506 7.73023 5.76508 7.77023C5.66508 7.77023 5.57508 7.77023 5.47509 7.76023ZM20.2748 20.05H16.6549V14.2701C16.6549 12.8201 16.1249 11.8102 14.8249 11.8102C13.9949 11.8102 13.2649 12.3301 12.9949 13.1101C12.9049 13.3901 12.8749 13.6801 12.8949 13.9801V20H9.27501C9.27501 20 9.32501 10.1702 9.27501 9.1602H12.8849V10.7002C13.5549 9.5602 14.7949 8.88021 16.1149 8.92021C18.4748 8.92021 20.2648 10.4602 20.2648 13.7901L20.2748 20.05Z'
												fill='#59DC8E'
											/>
										</svg>
									</LinkedinShareButton>
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
