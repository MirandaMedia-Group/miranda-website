import ReferenceHead from '../../components/ReferenceHead/ReferenceHead'
import Image from 'next/image'
import styles from '../../styles/reference.module.scss'
import CaseStudy from '../../components/CaseStudy/CaseStudy'
import { fetchAPI } from '../../lib/api'

const ReferenceRenault = ({ reference }) => {
	const referenceData = [
		{
			id: 1,
			nazev: 'renault',
		},
		{
			id: 2,
			nazev: 'epiderma',
		},
	]
	return (
		<>
			<section className={styles.reference}>
				<ReferenceHead title='Autorizovaný prodej vozů Renault a Dacia' image='/img/reference-renault.png' url='www.autohornat.cz' />
			</section>
			<section className={`container columns col-1-4 wider align-center ${styles.section}`}>
				<div className='column'>
					<h2>Nový začátek</h2>
					<p>
						Pro Autoavant, tradičního dealera vozů Renault a Dacia jsme začali spravovat PPC kampaně pomocí Google Ads, Sklik a sociální sítě
						Facebook. Vše s jasným cílem, optimalizovat současné kampaně a zajistit zvýšení zájmu o nákup a servis vozů.
					</p>
				</div>
				<div className={`column row ${styles.images} `}>
					<Image src={'/img/renault-grid.png'} width={808} height={636} alt='' priority={true} />
				</div>
			</section>
			<section className={`container ${styles.spolupraceGrid}`}>
				<div className={`${styles.item} ${styles.large}`}>
					<h2>Výsledky spolupráce</h2>
					<p>
						Ihned po optimalizaci kampaní jsme sledovali obrovské zlepšení z pohledu všech metrik – nárůst návštěvnosti webu, online poptávky na
						nové vozy, čas strávený na webu a s tím spojená míra okamžitého opuštění stránek. Nárust těchto metrik vedl k požadovanému nárůstu tržeb
						na straně klienta.
					</p>
				</div>
				<div className={styles.item}>
					<p>
						<span>-79,4%</span>Snížení nákladů na 1 online poptávku : <span>SNÍŽENÍ PNO</span>
					</p>
				</div>
				<div className={styles.item}>
					<Image src='/img/renaultVysledky.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true} />
				</div>
				<div className={styles.item}>
					<Image src='/img/renaultVysledky2.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true} />
				</div>
				<div className={styles.item}>
					<p>
						<span>+109%</span>Do 3 měsíců od zahájení spolupráce: <span>Nárůst poptávek</span>
					</p>
				</div>
				<div className={styles.item}>
					<Image src='/img/renaultVysledky3.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true} />
				</div>
				<div className={styles.item}>
					<p>
						<span>+445%</span>Zvýšení relevantních fanoušků na sociálních sítích:{' '}
					</p>
				</div>
			</section>
			<section className={`container ${styles.banner}`}>
				<div>
					<Image src='/img/renaultBanner.jpg' width={1440} height={574} alt='renault' priority={true} />
				</div>
				<div className={styles.mobilHide}>
					<Image src='/img/renaultBannerMobil.jpg' width={335} height={655} alt='renault' priority={true} />
				</div>
				<div className={styles.text}>
					<h2>Příběh pokračuje</h2>
					<p>
						Nadále jsme marketingovou a strategickou součástí společnosti Fair Autotop. Máme společný dlouhodobý a jasný cíl – udržovat povědomí o
						prémiové kvalitě dodávaných služeb, podpořit prodej nových vozů a nadále zvyšovat spokojenost stávajících klientů.
					</p>
				</div>
			</section>
			<section className='hidden container'>
				<CaseStudy reference={reference}></CaseStudy>
			</section>
		</>
	)
}

export default ReferenceRenault

export async function getStaticProps() {
	const referenceRes = await fetchAPI('/references', { populate: '*', pagination: { page: 1, pageSize: 6 } })

	return {
		props: {
			reference: referenceRes.data,
		},
		revalidate: 1,
	}
}
