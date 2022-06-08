import Image from 'next/image'
import styles from './PripadovkyHead.module.scss'

const PripadovkyHead = (props) => {
	return (
		<div className={styles.pripadovkyHead} style={{ background: props.pozadi }}>
			<div className={styles.image}>{props.image && <Image src={props.image} width='1370' height='979' alt='' priority={true} />}</div>
			<div className={styles.itemTexts}>
				<div className='container'>
					{props.logo && <Image src={props.logo} width={props.width} height={props.height} alt='' priority={true} />}
					<p>{props.text}</p>
					{props.url && (
						<a href={`https://${props.url}`} className={styles.url} target='_blank' rel='noreferrer'>
							{props.url}
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default PripadovkyHead
