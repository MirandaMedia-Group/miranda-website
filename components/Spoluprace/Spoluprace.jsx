import styles from './Spoluprace.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Spoluprace = () => {
	return (
		<>
			<div className={`columns col-1-4 wider align-center ${styles.section}`}>
				<div className='column'>
					<h2>Proč si začít s Mirandou?</h2>
					<p>
						Protože tahle agenturní dáma umí být věrná a spolehlivá každým coulem. Pro svého zákazníka udělá, co mu na očích vidí a nikdy nenechá
						ležet kdejakou pořádnou výzvu bokem.
					</p>
					<div className={styles.mobileHidden}>
						<Link href='/proc-s-nami'>
							<a className='btn btn-secondary'>Více o nás</a>
						</Link>
					</div>
				</div>
				<div className={`column ${styles.images}`}>
					<Image src={'/img/spoluprace-grid-imgs.png'} width={808} height={636} alt='' />
				</div>
			</div>
			<div className={`buttons-wrapper ${styles.desktopHidden}`}>
				<Link href='/proc-s-nami'>
					<a className='btn btn-secondary'>Více o nás</a>
				</Link>
			</div>
		</>
	)
}

export default Spoluprace
