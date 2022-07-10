import styles from './HeroCarousel.module.scss'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import TypeAnimation from 'react-type-animation'
// import TypeWriter from '../TypeWriter/TypeWriter'

const HeroCarousel = () => {
	const [isDesktop, setDesktop] = useState()
	const [videoPlayed, setVideoPlayed] = useState(false)
	const videoRef = useRef(null)
	const videoRef2 = useRef(null)

	const handleLoop = () => {
		setVideoPlayed(true)
		videoRef2.current.play()
	}

	useEffect(() => {
		setDesktop(window.innerWidth > 767)
		window.addEventListener('resize', () => {
			setDesktop(window.innerWidth > 767)
		})
		return () => {
			window.removeEventListener('resize', () => {
				setDesktop(window.innerWidth > 767)
			})
		}
	}, [])

	useEffect(() => {
		let element = videoRef.current
		if (element) element.addEventListener('ended', handleLoop, false)

		return () => {
			if (element) element.removeEventListener('ended', handleLoop, false)
		}
	}, [])

	return (
		<div className={styles.carousel}>
			{isDesktop && (
				<video poster='/intro-loop-poster.png' playsInline muted preload='auto' loop ref={videoRef2}>
					<source src='/intro-hp-loop.mp4' type='video/mp4' />
				</video>
			)}
			{!videoPlayed && isDesktop && (
				<div className={styles.videoAbsolute}>
					<video poster='/img/blank-black.jpg' autoPlay playsInline muted preload='auto' ref={videoRef}>
						<source src='/intro-hp-nove.mp4' type='video/mp4' />
					</video>
				</div>
			)}
			<div className={styles.mobileVideoWrapper}>
				{/* {!isDesktop && (
					<video poster='/intro-loop-poster.png' playsInline muted preload='auto' loop ref={videoRef2}>
						<source src='/intro-hp-mobile.mp4' type='video/mp4' />
					</video>
				)}
				{!isDesktop && !videoPlayed && (
					<div className={styles.videoAbsolute}>
						<video poster='/img/blank-black.jpg' autoPlay playsInline muted preload='auto' ref={videoRef}>
							<source src='/intro-hp-mobile.mp4' type='video/mp4' />
						</video>
					</div>
				)} */}
				{!isDesktop && <Image src='/img/hp-hero-mobile.jpg' width={1125} height={1125} alt=''></Image>}
			</div>
			<div className={`container ${styles.itemTexts}`}>
				{/* <div className={styles.subheading}>MirandaMedia</div> */}
				<div className={styles.headingWrapper}>
					{/* <TypeWriter 
                        content='E-shopy a weby na klíč, výkononstní marketing a design'
                    /> */}
					<h1>Marketingová digitální agentura</h1>
					<span>Tvoříme ziskové e-shopy a weby, navrhujeme design produktů a značek, staráme se o výkon kampaní, ctíme fair play</span>
					{/* <a href='#' className='btn btn-primary'>
						<span data-hover='Přehrát showreal'>Přehrát showreal</span>
					</a> */}
				</div>
				{/* <h1>E-shopy a weby na&nbsp;klíč, výkononstní marketing a design</h1> */}
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

export default HeroCarousel
