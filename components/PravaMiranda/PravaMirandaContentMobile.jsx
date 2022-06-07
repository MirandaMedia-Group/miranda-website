import styles from './PravaMirandaContentMobile.module.scss'

const PravaMirandaContentMobile = (props) => {
	return (
		<>
			<div className={styles.imageWrapper}>
				<div className={styles.texts}>
					<p>{props.text}</p>
					<div className={styles.hashtags}>
						{props.hashtags &&
							props.hashtags.map((tag, index) => {
								return (
									<span
										key={index}
										className={styles.hashtag}
									>
										# {tag}
									</span>
								)
							})}
					</div>
				</div>
			</div>
		</>
	)
}

export default PravaMirandaContentMobile
