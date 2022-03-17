import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Pozice from '../components/Pozice/Pozice'

export default function Home() {

  const pozice = [
    {
      id: 1,
      nazev: "Projektový manažer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
      link: "/projektovy-manazer"
    },
    {
      id: 2,
      nazev: "Obchodní manažer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
      link: "/obchodni-manazer"
    },
    {
      id: 3,
      nazev: "Seniorní grafik/grafička",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
      link: "seniorni-grafik"
    },
    {
      id: 4,
      nazev: "Full-stack developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
      link: "/fullstack-developer"
    }
  ] 

  const poziceItems = pozice.map((pozic) =>
    <Pozice key={pozic.id} nazev={pozic.nazev} text={pozic.text} link={pozic.link}/>
  )

  return (
    <>
      <HeroStatic 
        title="Kariéra" 
        subtitle="Potřebujete poradit lorem ipsum dolor sit amet." 
        image="/img/heroBanner-min.png" 
        />
      <section className={`container negative-margin`}>
       {poziceItems}
      </section>
      <section>
        <ProjektBanner />
      </section>
    </>
  )
}