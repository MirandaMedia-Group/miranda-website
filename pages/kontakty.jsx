import Image from 'next/image'
import Link from 'next/link'
import Formular from '../components/Formular/Formular'
import ContactForm from '../components/ContactForm/ContactForm'
import styles from '../styles/kontakty.module.scss'
import { Wrapper } from '@googlemaps/react-wrapper'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import GoogleMapMarker from '../components/GoogleMapMarker/GoogleMapMarker'

export default function Home() {
	// const render = (status) => {
	//   return <h2>{status}</h2>
	// }
	return (
		<>
			<section className='no-margin'>
				<div className={styles.hero}>
					<Image src='/img/kontakty-hero.jpg' alt='' layout='fill' objectFit='cover' priority={true} />
					<div className={styles.itemTexts}>
						<div className={`container ${styles.columns} ${styles.maxWidth}`}>
							<div className={styles.column}>
								<h1>Kontakty</h1>
								<p>
									<strong>Fakturační údaje</strong>
								</p>
								<p>
									MirandaMedia Group, s.r.o.
									<br />
									Jankovcova 1596/14b
									<br />
									Praha 7 - Holešovice
								</p>
								<p>
									<strong>IČO: 08272930</strong>
									<br />
									<strong>DIČ: CZ08272930</strong>
								</p>
								<p>
									<strong>BÚ: 2201649999/2010</strong>
								</p>
							</div>
							<div className={`${styles.column} ${styles.tilesDesktop}`}>
								<a href='mailto:info@mirandamedia.cz'>
									<div className={styles.mail}>
										<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M12 12H60C63.3 12 66 14.7 66 18V54C66 57.3 63.3 60 60 60H12C8.7 60 6 57.3 6 54V18C6 14.7 8.7 12 12 12Z'
												stroke='#222E27'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path d='M66 18L36 39L6 18' stroke='#222E27' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
										</svg>
										<span>info@mirandamedia.cz</span>
									</div>
								</a>
								<a href='tel:00420732254251'>
									<div className={styles.phone}>
										<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M66.0042 50.7603V59.7603C66.0076 60.5958 65.8364 61.4228 65.5017 62.1883C65.167 62.9539 64.6761 63.6411 64.0604 64.2059C63.4448 64.7707 62.7179 65.2007 61.9264 65.4684C61.135 65.7361 60.2963 65.8355 59.4642 65.7603C50.2327 64.7572 41.3652 61.6027 33.5742 56.5503C26.3257 51.9443 20.1802 45.7988 15.5742 38.5503C10.5041 30.7239 7.34892 21.8133 6.36419 12.5403C6.28923 11.7107 6.38782 10.8746 6.6537 10.0852C6.91957 9.29576 7.34691 8.57036 7.90849 7.95515C8.47008 7.33995 9.15361 6.84842 9.91557 6.51186C10.6775 6.17529 11.5012 6.00108 12.3342 6.00029H21.3342C22.7901 5.98596 24.2016 6.50153 25.3055 7.45089C26.4094 8.40025 27.1304 9.71863 27.3342 11.1603C27.7141 14.0405 28.4185 16.8685 29.4342 19.5903C29.8378 20.6641 29.9252 21.831 29.6859 22.9529C29.4466 24.0748 28.8908 25.1046 28.0842 25.9203L24.2742 29.7303C28.5449 37.2409 34.7636 43.4596 42.2742 47.7303L46.0842 43.9203C46.8999 43.1137 47.9297 42.5578 49.0516 42.3186C50.1734 42.0793 51.3404 42.1667 52.4142 42.5703C55.136 43.5859 57.964 44.2904 60.8442 44.6703C62.3015 44.8759 63.6324 45.6099 64.5838 46.7328C65.5352 47.8556 66.0407 49.289 66.0042 50.7603Z'
												stroke='#222E27'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>+420 732 264 251</span>
									</div>
								</a>
								<div className={styles.address}>
									<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M56.7143 28.8571C56.7143 31.7598 55.3838 35.4791 53.2578 39.5208C51.1482 43.5315 48.324 47.734 45.4824 51.5669C42.6435 55.3961 39.8024 58.8363 37.6698 61.3202C36.604 62.5617 35.7162 63.563 35.0957 64.2532C35.0111 64.3472 34.9315 64.4355 34.8571 64.5178C34.7827 64.4355 34.7032 64.3472 34.6186 64.2532C33.998 63.563 33.1103 62.5617 32.0444 61.3202C29.9119 58.8363 27.0707 55.3961 24.2319 51.5669C21.3903 47.734 18.5661 43.5315 16.4565 39.5208C14.3305 35.4791 13 31.7598 13 28.8571C13 16.7858 22.7858 7 34.8571 7C46.9285 7 56.7143 16.7858 56.7143 28.8571Z'
											stroke='#222E27'
											strokeWidth='2'
										/>
										<circle cx='34.8573' cy='27.7142' r='10.4286' stroke='#222E27' strokeWidth='2' />
									</svg>
									<p>
										Jankovcova 1596/14b, 170 00
										<br />
										Praha 7 - Holešovice
										<br />
										Vchod B
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='container'>
					<div className={`${styles.sidlo} ${styles.sidloMobile}`}>
						<h2>Sídlo společnosti:</h2>
						<p>
							MirandaMedia Group, s.r.o.
							<br />
							Jankovcova 1596/14b, 170 00
							<br />
							Praha 7 - Holešovice
						</p>
						<p>
							<strong>IČO:</strong> 08272930
							<br />
							<strong>DIČ:</strong> CZ08272930
						</p>
						<p>
							<strong>BÚ:</strong> 2201649999/2010
						</p>
					</div>
				</div> */}
				<div className={`container ${styles.scrollDown}`}>
					<div className={styles.arrow}>
						<svg width='24' height='155' viewBox='0 0 24 155' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.9393 154.061C11.5251 154.646 12.4749 154.646 13.0607 154.061L22.6066 144.515C23.1924 143.929 23.1924 142.979 22.6066 142.393C22.0208 141.808 21.0711 141.808 20.4853 142.393L12 150.879L3.51472 142.393C2.92893 141.808 1.97918 141.808 1.3934 142.393C0.80761 142.979 0.80761 143.929 1.3934 144.515L10.9393 154.061ZM10.5 -1.78873e-08L10.5 153L13.5 153L13.5 1.78873e-08L10.5 -1.78873e-08Z'
								fill='white'
							/>
						</svg>
						<span>Scrolluj</span>
					</div>
				</div>
			</section>
			<section className={`${styles.tilesMobile} container`}>
				<div className={`${styles.tilesGrid}`}>
					<a href='mailto:info@mirandamedia.cz'>
						<div className={styles.mail}>
							<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M12 12H60C63.3 12 66 14.7 66 18V54C66 57.3 63.3 60 60 60H12C8.7 60 6 57.3 6 54V18C6 14.7 8.7 12 12 12Z'
									stroke='#222E27'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path d='M66 18L36 39L6 18' stroke='#222E27' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
							<span>info@mirandamedia.cz</span>
						</div>
					</a>
					<a href='tel:00420732254251'>
						<div className={styles.phone}>
							<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M66.0042 50.7603V59.7603C66.0076 60.5958 65.8364 61.4228 65.5017 62.1883C65.167 62.9539 64.6761 63.6411 64.0604 64.2059C63.4448 64.7707 62.7179 65.2007 61.9264 65.4684C61.135 65.7361 60.2963 65.8355 59.4642 65.7603C50.2327 64.7572 41.3652 61.6027 33.5742 56.5503C26.3257 51.9443 20.1802 45.7988 15.5742 38.5503C10.5041 30.7239 7.34892 21.8133 6.36419 12.5403C6.28923 11.7107 6.38782 10.8746 6.6537 10.0852C6.91957 9.29576 7.34691 8.57036 7.90849 7.95515C8.47008 7.33995 9.15361 6.84842 9.91557 6.51186C10.6775 6.17529 11.5012 6.00108 12.3342 6.00029H21.3342C22.7901 5.98596 24.2016 6.50153 25.3055 7.45089C26.4094 8.40025 27.1304 9.71863 27.3342 11.1603C27.7141 14.0405 28.4185 16.8685 29.4342 19.5903C29.8378 20.6641 29.9252 21.831 29.6859 22.9529C29.4466 24.0748 28.8908 25.1046 28.0842 25.9203L24.2742 29.7303C28.5449 37.2409 34.7636 43.4596 42.2742 47.7303L46.0842 43.9203C46.8999 43.1137 47.9297 42.5578 49.0516 42.3186C50.1734 42.0793 51.3404 42.1667 52.4142 42.5703C55.136 43.5859 57.964 44.2904 60.8442 44.6703C62.3015 44.8759 63.6324 45.6099 64.5838 46.7328C65.5352 47.8556 66.0407 49.289 66.0042 50.7603Z'
									stroke='#222E27'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span>+420 732 264 251</span>
						</div>
					</a>
					<div className={styles.address}>
						<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M56.7143 28.8571C56.7143 31.7598 55.3838 35.4791 53.2578 39.5208C51.1482 43.5315 48.324 47.734 45.4824 51.5669C42.6435 55.3961 39.8024 58.8363 37.6698 61.3202C36.604 62.5617 35.7162 63.563 35.0957 64.2532C35.0111 64.3472 34.9315 64.4355 34.8571 64.5178C34.7827 64.4355 34.7032 64.3472 34.6186 64.2532C33.998 63.563 33.1103 62.5617 32.0444 61.3202C29.9119 58.8363 27.0707 55.3961 24.2319 51.5669C21.3903 47.734 18.5661 43.5315 16.4565 39.5208C14.3305 35.4791 13 31.7598 13 28.8571C13 16.7858 22.7858 7 34.8571 7C46.9285 7 56.7143 16.7858 56.7143 28.8571Z'
								stroke='#222E27'
								strokeWidth='2'
							/>
							<circle cx='34.8573' cy='27.7142' r='10.4286' stroke='#222E27' strokeWidth='2' />
						</svg>
						<p>
							Jankovcova 1596/14b, 170 00
							<br />
							Praha 7 - Holešovice
							<br />
							Vchod B
						</p>
					</div>
				</div>
			</section>
			<section className={`text-center`}>
				<Wrapper apiKey={'AIzaSyAu8MzTDuTbDCe9Jvwy10SqJtDxy-W9Uc0'}>
					<GoogleMap>
						<GoogleMapMarker position={{ lat: 50.1080258, lng: 14.4544731 }} title='MirandaMedia Group' icon={'/img/icon/marker.png'} />
					</GoogleMap>
				</Wrapper>
				{/* <div className={`${styles.mapSection}`}>
        </div> */}
			</section>
			<section>
				<div className='container text-center'>
					<h2>Naše marketingové oddělení</h2>
					<div className={styles.grid}>
						<div className={styles.item}>
							<Image src={'/img/marketing1.jpg'} width={465} height={465} alt='' priority={true}></Image>
							<div className={styles.texts}>
								<h3>Martin Mrštík</h3>
								<span>Head of marketing</span>
								<div className={styles.hover}>
									<a href='#'>martin.mrstik@mirandamedia.cz</a>
									<a href='#'>+420 604 118 932</a>
								</div>
							</div>
						</div>
						<div className={styles.item}>
							<Image src={'/img/marketing1.jpg'} width={465} height={465} alt='' priority={true}></Image>
							<div className={styles.texts}>
								<h3>Martin Mrštík</h3>
								<span>Head of marketing</span>
								<div className={styles.hover}>
									<a href='#'>martin.mrstik@mirandamedia.cz</a>
									<a href='#'>+420 604 118 932</a>
								</div>
							</div>
						</div>
						<div className={styles.item}>
							<Image src={'/img/marketing1.jpg'} width={465} height={465} alt='' priority={true}></Image>
							<div className={styles.texts}>
								<h3>Martin Mrštík</h3>
								<span>Head of marketing</span>
								<div className={styles.hover}>
									<a href='#'>martin.mrstik@mirandamedia.cz</a>
									<a href='#'>+420 604 118 932</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='no-margin'>
				<ContactForm />
			</section>
		</>
	)
}
