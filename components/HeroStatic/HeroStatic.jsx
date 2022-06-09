import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroStatic.module.scss'

const HeroStatic = (props) => {
	return (
		<div className={`${styles.hero} ${props.overlay && styles.overlay} ${props.bigFont && styles.large}`}>
			{props.video && (
				<video autoPlay playsInline muted preload='auto'>
					<source src={props.video} />
				</video>
			)}
			{props.image && (
				<div className={styles.heroImage}>
					<Image src={props.image} alt='' layout='fill' objectFit='cover' priority={true} />
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
		</div>
	)
}

export default HeroStatic
