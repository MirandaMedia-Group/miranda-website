import ReferenceHead from '../../components/ReferenceHead/ReferenceHead'
import Image from 'next/image'
import styles from '../../styles/reference.module.scss'
import CaseStudy from '../../components/CaseStudy/CaseStudy'
import { fetchAPI } from '../../lib/api'

const ReferenceExpresmenu = ({ reference }) => {
	return (
		<>
			<section>
				<ReferenceHead
					title='Tradiční česká jídla z Krkonoš, která šetří čas i peníze'
					image='/img/reference-expresmenu.png'
					url='www.expresmenu.com'
				/>
			</section>
			<section className={`container columns col-1-4 wider align-center ${styles.section}`}>
				<div className='column'>
					<h2>Nový začátek</h2>
					<p>
						Pro Expresmenu jsme vymysleli zbrusu novou komunikaci na sociálních sítích. Tak, aby odpovídala nejmodernějším trendům. Uzpůsobena byla
						primárně pro zvýšení tržeb a povědomí o značce. Včetně nových grafických podkladů.
					</p>
				</div>
				<div className={`column row ${styles.images} `}>
					<Image src={'/img/expresmenu-grid.png'} width={808} height={636} alt='' priority={true} />
				</div>
			</section>
			<section className={`container ${styles.spolupraceGrid}`}>
				<div className={`${styles.item} ${styles.large}`}>
					<h2>Výsledky spolupráce</h2>
					<p>
						Spolupráce již od prvního měsíce vykazovala obrovský nárůst v počtu objednávek. Celkový obrat vystřelil raketově vzhůru a to primárně
						díky nové detailně promyšlené komunikaci. Díky pravidelné a důkladné práci se nám podařilo zakončit první měsíc s neuvěřitelným posunem
						oproti měsíci, kdy jsme klienta přebírali
					</p>
				</div>
				<div className={styles.item}>
					<p>
						<span>+3287%</span>Nárust tržeb
					</p>
				</div>
				<div className={styles.item}>
					<p>
						<span>+4304%</span>Zvýšení zobrazení reklam
					</p>
				</div>
				<div className={styles.item}>
					<p>
						<span>-131%</span>Snížení nákladů
					</p>
				</div>
				<div className={styles.item}>
					<p>
						<span>-14%</span>Snížení PNO
					</p>
				</div>
				<div className={styles.item}>
					<Image src='/img/expresmenuVysledky.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true} />
				</div>
				<div className={styles.item}>
					<p>
						<span>-200 KČ</span>Snížení nákladu na jeden nákup
					</p>
				</div>
			</section>
			<section className={`container ${styles.banner}`}>
				<div>
					<Image src='/img/expresmenuBanner.jpg' width={1440} height={574} alt='expresmenu' priority={true} />
				</div>
				<div className={styles.mobilHide}>
					<Image src='/img/expresmenuBannerMobil.jpg' width={335} height={655} alt='expresmenu' priority={true} />
				</div>
				<div className={styles.text}>
					<h2>Příběh pokračuje</h2>
					<p>
						Klient Expresmenu je pro nás jasným příkladem dobře odvedené práce. Jsme rádi, že jsme sociální sítě mohli převzít a vymyslet novou
						strategii. Konverzní poměr šel raketově nahoru a to i díky tomu, že se staráme již nyní o kompletně celý marketing klienta.
					</p>
				</div>
			</section>
			<section className='hidden container'>
				<CaseStudy reference={reference}></CaseStudy>
			</section>
		</>
	)
}

export default ReferenceExpresmenu

export async function getStaticProps() {
	const referenceRes = await fetchAPI('/references', { populate: '*', pagination: { page: 1, pageSize: 6 } })

	return {
		props: {
			reference: referenceRes.data,
		},
		revalidate: 1,
	}
}
