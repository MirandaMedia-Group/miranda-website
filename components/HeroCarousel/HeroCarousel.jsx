import styles from './HeroCarousel.module.scss'
import { useState, useEffect, useRef } from 'react'
// import TypeAnimation from 'react-type-animation'
import TypeWriter from '../TypeWriter/TypeWriter'

const HeroCarousel = () => {
	const [isDesktop, setDesktop] = useState()
	const videoRef = useRef(null)

	const handleLoop = () => {
		videoRef.current.setAttribute('poster', '/intro-loop-poster.png')
		videoRef.current.src = '/intro-hp-loop.mp4'
		videoRef.current.setAttribute('loop', true)
	}

	useEffect(() => {
		setDesktop(window.innerWidth > 830)
		window.addEventListener('resize', () => {
			setDesktop(window.innerWidth > 830)
		})
		return () => {
			window.removeEventListener('resize', () => {
				setDesktop(window.innerWidth > 830)
			})
		}
	}, [])

	useEffect(() => {
		let element = videoRef.current
		if (element) element.addEventListener('ended', handleLoop)

		return () => {
			if (element) element.removeEventListener('ended', handleLoop)
		}
	}, [videoRef?.current])

	return (
		<div className={styles.carousel}>
			{isDesktop && (
				<video autoPlay playsInline muted preload='auto' ref={videoRef}>
					<source src='/intro-hp-nove.mp4' type='video/mp4' />
				</video>
			)}
			{!isDesktop && (
				<video
					poster='/img/hp-video-poster-mobile.png'
					autoPlay
					playsInline
					muted
					preload='auto'
				>
					<source src='/hp-video-mobile.mp4' type='video/mp4' />
				</video>
			)}
			<div className={`container ${styles.itemTexts}`}>
				<div className={styles.subheading}>Miranda Media</div>
				<div className={styles.headingWrapper}>
					{/* <TypeWriter 
                        content='E-shopy a weby na klíč, výkononstní marketing a design'
                    /> */}
					<h1>
						<span>E-shopy a weby na klíč</span>
						<span>Výkonnostní marketing</span>
						<span>Kreativa</span>
					</h1>
					<a href='#' className='btn btn-tertiary'>
						<span data-hover='Přehrát showreal'>
							Přehrát showreal
						</span>
					</a>
				</div>
				{/* <h1>E-shopy a weby na&nbsp;klíč, výkononstní marketing a design</h1> */}
			</div>
			<div className={`container ${styles.scrollDown}`}>
				<div className={styles.arrow}>
					<svg
						width='24'
						height='155'
						viewBox='0 0 24 155'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10.9393 154.061C11.5251 154.646 12.4749 154.646 13.0607 154.061L22.6066 144.515C23.1924 143.929 23.1924 142.979 22.6066 142.393C22.0208 141.808 21.0711 141.808 20.4853 142.393L12 150.879L3.51472 142.393C2.92893 141.808 1.97918 141.808 1.3934 142.393C0.80761 142.979 0.80761 143.929 1.3934 144.515L10.9393 154.061ZM10.5 -1.78873e-08L10.5 153L13.5 153L13.5 1.78873e-08L10.5 -1.78873e-08Z'
							fill='white'
						/>
					</svg>
					<span>Scrolluj</span>
				</div>
			</div>
		</div>
	)
}

export default HeroCarousel
