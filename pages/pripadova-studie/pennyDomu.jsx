import CaseStudy from '../../components/CaseStudy/CaseStudy'
import PripadovkyHead from '../../components/PripadovkyHead/PripadovkyHead'
import Image from 'next/image'
import styles from '../../styles/pennyDomu.module.scss'
import { fetchAPI } from '../../lib/api'

const pennyDomu = ({ reference, props }) => {
	const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

	return (
		<>
			<PripadovkyHead
				image='/img/pennyHead.png'
				text='Než potkalo Penny Mirandu, nebylo u nich jak nakoupit, aniž byste museli vytáhnout paty 
            z domu. Dneska frčí e-shop na plný obrátky 
            a spokojení zákazníci posílají jednu 
            objednávku za druhou.'
				logo='/img/pennyLogo.svg'
				width='528'
				height='150'
				pozadi='linear-gradient(107.56deg, #B82426 0%, #DF4E20 100%)'
				url='www.pennydomu.cz'
			/>
			<section>
				<ul className={styles.nav}>
					<li>
						<a href='#oPenny'>O Penny</a>
					</li>
					<li>
						<a href='#cile'>Společné cíle</a>
					</li>
					<li>
						<a href='#oProjektu'>Co o projektu říká</a>
					</li>
					<li>
						<a href='#ukazky'>Ukázka webu</a>
					</li>
				</ul>
			</section>
			<div className='container'>
				<section className={styles.row} id='oPenny'>
					<Image src='/img/pennyImg.jpg' width={710} height={710} alt='' />
					<div className={styles.text}>
						<div>
							<h2>Kdo by neznal Penny Market</h2>
							<p>
								Penny Market s.r.o. je dceřinou společností mezinárodního obchodního řetězce REWE, který provozuje přes 15 000 prodejen v 20
								evropských zemích a zaměstnává kolem 330 000 lidí. PENNY kromě České republiky najdete i v Německu, Rakousku, Itálii, Maďarsku a
								Rumunsku.
							</p>
						</div>
					</div>
				</section>
				<section className={styles.cile} id='cile'>
					<h2>Naše společné cíle</h2>
					<p>
						Jednoho dne zazvonil v Mirandě telefon, že prý Penny Market poptává digitální agenturu na tvorbu nového e-shopu. Od té chvíle se spustil
						kolotoč schůzek a jednání, které nás dovedly k výhradní spolupráci na vytvoření e-commerce platformy na klíč.
					</p>
					<div>
						<ul>
							<li>Analýza zadávací technické dokumentace</li>
							<li>Návrh řešení a časová osa projektu</li>
							<li>Návrh struktury a grafického designu e-shopu</li>
							<li>Napojení na dopravce DoDo</li>
							<li>Kódování na platformu Shoptet</li>
							<li>Naprogramování požadovaných funcionalit</li>
							<li>Napojení na reklamní systémy</li>
						</ul>
						<p>..a mnohem, mnohem více</p>
					</div>
				</section>
			</div>
			<section className={styles.background} id='oProjektu'>
				<div className='container'>
					<div className={styles.image}>
						<div className={styles.coRikaMobil}>
							<div className={styles.tile}></div>
							<img src='/img/icon/coRikaMobil.svg' alt=''></img>
						</div>
						<div className={styles.quotes}>
							<Image src='/img/michal.jpg' width={992} height={992} alt='' />
							<div className={styles.coRika}>
								<img src='/img/icon/coRika.svg' alt=''></img>
							</div>
							<div className={styles.tiles}>
								{tiles.map((tile, index) => {
									return <div className={styles.tile} key={index}></div>
								})}
							</div>
						</div>
					</div>
					<div className={styles.text}>
						<p className={styles.bigger}>
							E-shop Penny Market byl pro všechny strany velkou výzvou. Už jen pro to, že jsme celou platformu vystavěli od počátku na Shoptetu.
						</p>
						<p>
							Samotné zadání ze strany partnera obnášelo funkcionality a požadavky, které nebyly součástí &quot;krabice&quot; Shoptet. Vývojový
							tým v tomto ohledu sehrál nenahraditelnou roli a pomocí tzv. komunikační mezivrstvy dokázal s Shoptetem udělat zdánlivě nemožné.
							Jedním z požadavků bylo např. naprogramování funkcionality &quot;Výběr časových oken s ověřením akčních cen&quot;. Doplněk zobrazuje
							u každé položky v košíku cenu, která platí dnes společně s cenou, která bude platit v den doručení v závislosti na akčním letáku.
						</p>
						<p>
							To a dlouhou řadu dalších &quot;vychytávek&quot; zvládla Miranda na jedničku a my děkujeme partnerovi Penny, že jsme mohli být
							součástí!
						</p>
						<h4>Michal Baloun</h4>
						<p className={styles.small}>
							Partner <span className={styles.green}>MirandaMedia Group s.r.o.</span>
						</p>
					</div>
				</div>
			</section>
			<section className={styles.eshop} id='ukazky'>
				<div className='container'>
					<div className={styles.text}>
						<h2>Ukázka hotového e-shopu</h2>
						<p>
							Podívej se, jak vypadá e-shop Pennydomu.cz na Shoptetu. Kompletně navržená struktura a grafika na základě brand manuálu, jednotný a
							rozum dá, že plně responzivní design, který jsme testovali na všech možných zařízeních, co to jen šlo. Tak to projeď a rovnou něco
							objednej, když už tam budeš.
						</p>
						<a href='https://www.pennydomu.cz/' className='btn btn-primary'>
							<span data-hover='Zobrazit web'>Zobrazit web</span>
						</a>
					</div>
					<div className={styles.img}>
						<Image src='/img/pennyRuka.png' width={1010} height={877} alt='' />
					</div>
				</div>
			</section>
			<section className={styles.images}>
				<div>
					<Image src='/img/penny1.jpg' width={950} height={535} alt='' />
				</div>
				<div>
					<Image src='/img/penny2.jpg' width={950} height={535} alt='' />
				</div>
				<div className={styles.mobilHide}>
					<Image src='/img/penny3.jpg' width={464} height={535} alt='' />
				</div>
				<div className={styles.mobilHide}>
					<Image src='/img/penny4.jpg' width={950} height={535} alt='' />
				</div>
				<div className={styles.mobilHide}>
					<Image src='/img/penny5.jpg' width={464} height={535} alt='' />
				</div>
				<div className={styles.mobilShow}>
					<Image src='/img/pennyImg1.jpg' width={160} height={160} alt='' />
				</div>
				<div className={styles.mobilShow}>
					<Image src='/img/pennyImg2.jpg' width={160} height={160} alt='' />
				</div>
				<div className={styles.mobilShow}>
					<Image src='/img/pennyImg3.jpg' width={160} height={160} alt='' />
				</div>
				<div className={styles.mobilShow}>
					<Image src='/img/pennyImg4.jpg' width={160} height={160} alt='' />
				</div>
				<div className={styles.mobilShow}>
					<Image src='/img/pennyImg5.jpg' width={160} height={160} alt='' />
				</div>
				<div className={styles.mobilShow}>
					<Image src='/img/pennyImg6.jpg' width={160} height={160} alt='' />
				</div>
			</section>
			<section className='hidden'>
				<CaseStudy reference={reference}></CaseStudy>
			</section>
		</>
	)
}

export default pennyDomu

export async function getStaticProps() {
	const referenceRes = await fetchAPI('/references', { populate: '*' })

	return {
		props: {
			reference: referenceRes.data,
		},
		revalidate: 1,
	}
}
