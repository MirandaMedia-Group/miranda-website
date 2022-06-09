import Image from 'next/image'

import styles from './PravaMirandaImage.module.scss'

const PravaMirandaImage = (props) => {
	return (
		<div className={styles.imageWrapper}>
			<Image src={props.imageSrc} layout='fill' objectFit='cover' alt='' priority={true}></Image>
			<div className={styles.texts}>
				<p>{props.text}</p>
				<div className={styles.hashtags}>
					{props.hashtags &&
						props.hashtags.map((tag, index) => {
							return (
								<span key={index} className={styles.hashtag}>
									# {tag}
								</span>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default PravaMirandaImage
