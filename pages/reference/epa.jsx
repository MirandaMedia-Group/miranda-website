import ReferenceHead from '../../components/ReferenceHead/ReferenceHead'
import Image from 'next/image'
import styles from '../../styles/reference.module.scss'
import CaseStudy from '../../components/CaseStudy/CaseStudy'
import { fetchAPI } from '../../lib/api'

const ReferenceEpa = ({ reference }) => {
	return (
		<>
			<section>
				<ReferenceHead title='EPA - svítidla Svítidla a osvětlení' image='/img/reference-epa.png' url='www.epasvitidla.cz' />
			</section>
			<section className={`container columns col-1-4 wider align-center ${styles.section}`}>
				<div className='column'>
					<h2>Nový začátek</h2>
					<p>
						Pro EPA svítidla jsme vymysleli zbrusu novou grafiku na míru na kompletně nový e-shop na platformě Shoptet. Grafický návrh e-shopu byl
						uzpůsoben tak, aby odpovídal těm nejmodernějším trendům v oblasti e-commerce, včetně nejnovějšího řešení UX / UI.
					</p>
				</div>
				<div className={`column row ${styles.images} `}>
					<Image src={'/img/epa-grid.png'} width={808} height={636} alt='' priority={true} />
				</div>
			</section>
			<section className={`${styles.spolupraceGrid} hidden container`}>
				<div className={`${styles.item} ${styles.large}`}>
					<h2>Výsledky spolupráce</h2>
					<p>
						Spolupráce již od prvních měsíců vykazovala velký nárůst v počt objednávek. Celkový obrat tak vystřelil raketově vzhůru! Toho jsme
						docílili zejména vhodnou kombinací PPC kampaní (Google Ads, Sklik, Facebook a zbožové vyhledávače). Díky pravidelné a důkladné práci s
						webovou analytikou jsme reklamní systémy optimalizovali k až naprosté dokonalosti.
					</p>
				</div>
				<div className={styles.item}>
					<p>
						<span>+305%</span>Nárůst obratu
					</p>
				</div>
				<div className={styles.item}>
					<Image src='/img/epaVysledky.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true} />
				</div>
				<div className={styles.item}>
					<Image src='/img/epaVysledky2.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true} />
				</div>
				<div className={styles.item}>
					<p>
						<span>-53%</span>Snížení PNO (již první měsíc)
					</p>
				</div>
				<div className={styles.item}>
					<Image src='/img/epaVysledky3.jpg' alt='' layout='fill' objectFit='cover' objectPosition='center' priority={true} />
				</div>
				<div className={styles.item}>
					<p>
						<span>2,26%</span>Konverzní poměr (již první měsíc)
					</p>
				</div>
			</section>
			<section className={`${styles.banner} container`}>
				<div>
					<Image src='/img/epaBanner.jpg' width={1440} height={574} alt='epa' priority={true} />
				</div>
				<div className={styles.mobilHide}>
					<Image src='/img/epaBannerMobil.jpg' width={335} height={689} alt='epa' priority={true} />
				</div>
				<div className={styles.text}>
					<h2>Příběh pokračuje</h2>
					<p>
						Klient EPA svítidla je pro nás jasným příkladem dobře fungujícího e-shopu, jehož konverzní míra stále vzrůstá a v součinnosti s tím
						roste i velikost celého elektronického obchodu. Jeho jednoznačně nejlepší vizitkou jsou další a další spokojení zákazníci.
					</p>
				</div>
			</section>
			<section className='hidden container'>
				<CaseStudy reference={reference}></CaseStudy>
			</section>
		</>
	)
}

export default ReferenceEpa

export async function getStaticProps() {
	const referenceRes = await fetchAPI('/references', { populate: '*', pagination: { page: 1, pageSize: 6 } })

	return {
		props: {
			reference: referenceRes.data,
		},
		revalidate: 1,
	}
}
