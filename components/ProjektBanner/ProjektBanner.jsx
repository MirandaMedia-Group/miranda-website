import styles from './ProjektBanner.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function ProjektBanner() {
	return (
		<div className={`${styles.projektBanner}`}>
			<div className={styles.container}>
				<h2>Tady začínají nové příběhy, na které jsme právem pyšní</h2>
				<p>
					Miranda od počátku tvrdí, že je to hlavně o lidech, co umí vzít za práci a do každýho projektu přinesou pořádnej zápal a nadšení! Tahle
					energie se šíří napříč celým týmem. Není pak divu, že vznikaj projekty, na který můžete být právem pyšní!
				</p>
				<Link href='/kontakty'>
					<a className='btn btn-primary'>
						<span>Spojit se s Mirandou</span>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default ProjektBanner
