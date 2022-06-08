import Image from 'next/image'
import styles from './ReferenceHead.module.scss'

export default function ReferenceHead(props) {
	return (
		<div className={styles.referenceHead}>
			<div className={styles.image}>{props.image && <Image src={props.image} width='1062' height='815' alt='' priority={true} />}</div>
			<div className={styles.itemText}>
				<div className='container'>
					<h1>{props.title}</h1>
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
