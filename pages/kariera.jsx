import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import HeroStatic from '../components/HeroStatic/HeroStatic'

export default function Home() {
  return (
    <>
    <HeroStatic 
        title="Kariéra" 
        subtitle="Potřebujete poradit lorem ipsum dolor sit amet." 
        image="/img/eshopy-hero.png" />
      <section>
        <ProjektBanner />
      </section>
      
    </>
  )
}