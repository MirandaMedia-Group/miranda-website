import Head from 'next/head'
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
        <Reference></Reference>
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
