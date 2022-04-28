import Head from 'next/head'
import Link from 'next/link'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import Reference from '../components/Reference/Reference'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import ProjektBanner  from '../components/ProjektBanner/ProjektBanner'
import PravaMiranda from '../components/PravaMiranda/PravaMiranda'
import Spoluprace from '../components/Spoluprace/Spoluprace'
import Projekty from '../components/Projekty/Projekty'
import NabidkaSluzeb from '../components/NabidkaSluzeb/NabidkaSluzeb'

export default function Home() {
  return (
    <>
      <Head>
        
      </Head>
      <section>
        <HeroCarousel></HeroCarousel>
      </section>
      <section className="container">
        <div className={`columns col-1-4 align-center reference`}>
            <div className="column">
                <h2>Na co jsme hrdí</h2>
            </div>
            <div className="column">
                <p>Našim skvělým partnerům pomáháme <strong>s návrhem a tvorbou úspěšných e-shopů a webů, správou marketingových aktivit se zaměřením na výkonnostní PPC kampaně,</strong> tvorbou značek a nových produktů, ale nejen to. V Mirandě najdete vše, co potřebujete k e-podnikání na jednom místě.</p>
            </div>
        </div>
        <Reference></Reference>
        <div className="buttons-wrapper justify-center">
            <Link href="/reference">
                <a className="btn btn-primary">Objevit další projekty</a>
            </Link>
        </div>
      </section>
      <section>
        <PravaMiranda></PravaMiranda>
      </section>
      <section>
        <NabidkaSluzeb></NabidkaSluzeb>
      </section>
      <section>
        <Spoluprace></Spoluprace>
      </section>
      <section>
        <CoONasRikaji></CoONasRikaji>
      </section>
      <section>
        <Projekty />
      </section>
      <section className='visible'>
        <ProjektBanner></ProjektBanner>
      </section>
    </>
  )
}
