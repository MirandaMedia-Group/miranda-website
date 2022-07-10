import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './HeroStaticSlim.module.scss'

const HeroStaticSlim = (props) => {
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
				<div className={`container`}>
					<h1>{props.title}</h1>
				</div>
			</div>
		</div>
	)
}

export default HeroStaticSlim
