import Head from 'next/head'
import Link from 'next/link'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import Reference from '../components/Reference/Reference'
import Zamereni from '../components/Zamereni/Zamereni'
import Cesta from '../components/Cesta/Cesta'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import ProjektBanner  from '../components/ProjektBanner/ProjektBanner'

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
                <p>Prohlédněte si naše referenční projekty, které jsme realizovali napříč obory a segmenty podnikání. Našim skvělým partnerům pomáháme <strong>s návrhem a tvorbou úspěšných e-shopů a webů, správou marketingových aktivit se zaměřením na výkonnostní PPC kampaně,</strong> tvorbou značek a nových produktů, ale nejen to. U nás najdete vše, co potřebujete k e-podnikání na jednom místě.</p>
            </div>
        </div>
        <Reference></Reference>
        <div className="buttons-wrapper justify-center">
            <Link href="/reference">
                <a className="btn btn-secondary">Přejít na reference</a>
            </Link>
            <Link href="/kontakty">
                <a className="btn btn-primary">Poptat řešení</a>
            </Link>
        </div>
      </section>
      <section>
        <Zamereni></Zamereni>
      </section>
      <section>
        <Cesta></Cesta>
      </section>
      <section>
        <CoONasRikaji></CoONasRikaji>
      </section>
      <section>
        <ProjektBanner></ProjektBanner>
      </section>
    </>
  )
}
