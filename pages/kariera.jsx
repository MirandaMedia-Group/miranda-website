import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import HeroStaticSlim from '../components/HeroStaticSlim/HeroStaticSlim'
import Pozice from '../components/Pozice/Pozice'

export default function Home() {
	const pozice = [
		{
			id: 1,
			nazev: 'Sales manager',
			text: '',
			link: '/kariera/sales-manager',
			image: '/img/sales-manazer.jpg',
		},
		{
			id: 2,
			nazev: 'Zkušený/á PPC specialista/ka',
			text: '',
			link: '/kariera/ppc-specialista',
			image: '/img/kariera3.jpg',
		},
		{
			id: 3,
			nazev: 'Front-end Developer',
			text: '',
			link: '/kariera/frontend-developer',
			image: '/img/kariera3.jpg',
		},
		{
			id: 4,
			nazev: 'Seniorní grafik/designér',
			text: '',
			link: '/kariera/grafik',
			image: '/img/grafik.jpg',
		},
		{
			id: 5,
			nazev: 'Office manažerka - asistentka vedení',
			text: '',
			link: '/kariera/office',
			image: '/img/office-manazerka.jpg',
		},
	]

	const poziceItems = pozice.map((pozic) => <Pozice key={pozic.id} nazev={pozic.nazev} text={pozic.text} link={pozic.link} image={pozic.image} />)

	return (
		<>
			<section>
				<HeroStaticSlim title='Kariéra v Mirandě' image='/img/kariera-hero.jpg' imageMobile='/img/kariera-hero-mobile.jpg' />
			</section>
			<section className={`container`}>{poziceItems}</section>
		</>
	)
}
