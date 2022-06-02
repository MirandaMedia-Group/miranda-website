import Link from 'next/link';
import Image from 'next/image';
import styles from './Pozice.module.scss';

const Pozice = (props) => {
	return (
		<div className={styles.position}>
			<div className={styles.image}>
				<Image
					src={props.image}
					width={500}
					height={500}
					alt={props.nazev}
					priority={true}
				/>
			</div>
			<div className={styles.info}>
				<h3>{props.nazev}</h3>
				<p>{props.text}</p>
				<Link href={props.link}>
					<a className='btn btn-primary'>
						<span data-hover='Zobrazit pozici'>
							Zobrazit pozici
						</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Pozice;
