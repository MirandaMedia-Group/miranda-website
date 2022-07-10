import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './HeroStatic.module.scss'

const HeroStatic = (props) => {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		setWindowWidth(window.innerWidth)
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth)
		})
	}, [])

	return (
		<div className={`${styles.hero} ${props.overlay && styles.overlay} ${props.bigFont && styles.large}`}>
			{props.video && (
				<video autoPlay playsInline muted preload='auto'>
					<source src={props.video} />
				</video>
			)}
			{props.image && windowWidth > 767 && (
				<div className={styles.heroImage}>
					<Image src={props.image} alt='' layout='fill' objectFit='cover' priority={true} />
				</div>
			)}
			{props.imageMobile && windowWidth <= 767 && (
				<div className={styles.heroImage}>
					<Image src={props.imageMobile} alt='' layout='fill' objectFit='cover' priority={true} />
				</div>
			)}
			<div className={styles.itemTexts}>
				<div className={`container ${props.maxWidth && styles.maxWidth}`}>
					{props.logo && <Image src={props.logo} width={110} height={110} alt='' />}
					<h1>{props.title}</h1>
					<p>{props.subtitle}</p>
					{props.url && (
						<a href={`https://${props.url}`} className={styles.url} target='_blank' rel='noreferrer'>
							{props.url}
						</a>
					)}
					{props.buttons && (
						<div className='buttons-wrapper'>
							<a href='#kontakt' className='btn btn-primary'>
								<span data-hover='Chci Shoptet na klíč'>Chci Shoptet na klíč</span>
							</a>
						</div>
					)}
				</div>
			</div>
			<div className={`container ${styles.scrollDown}`}>
				<a href='#scroll'>
					<div className={styles.arrow}>
						<svg width='24' height='155' viewBox='0 0 24 155' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.9393 154.061C11.5251 154.646 12.4749 154.646 13.0607 154.061L22.6066 144.515C23.1924 143.929 23.1924 142.979 22.6066 142.393C22.0208 141.808 21.0711 141.808 20.4853 142.393L12 150.879L3.51472 142.393C2.92893 141.808 1.97918 141.808 1.3934 142.393C0.80761 142.979 0.80761 143.929 1.3934 144.515L10.9393 154.061ZM10.5 -1.78873e-08L10.5 153L13.5 153L13.5 1.78873e-08L10.5 -1.78873e-08Z'
								fill='white'
							/>
						</svg>
						<span>Scrolluj</span>
					</div>
				</a>
			</div>
		</div>
	)
}

export default HeroStatic
