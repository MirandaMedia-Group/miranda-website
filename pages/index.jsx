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
                <h2>Reference</h2>
            </div>
            <div className="column">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
      <section className="no-margin">
        <ProjektBanner></ProjektBanner>
      </section>
    </>
  )
}
