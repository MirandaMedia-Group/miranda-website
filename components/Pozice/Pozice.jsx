import Link from 'next/link'
import Image from 'next/image'
import styles from './Pozice.module.scss'

const Pozice = (props) => {
	return (
		<Link href={props.link} passHref>
			<div className={styles.position}>
				<div className={styles.image}>
					<Image src={props.image} width={500} height={500} alt={props.nazev} priority={true} />
				</div>
				<div className={styles.info}>
					<h3>{props.nazev}</h3>
					<p>{props.text}</p>
					<a className='btn btn-secondary'>Zobrazit pozici</a>
				</div>
			</div>
		</Link>
	)
}

export default Pozice
