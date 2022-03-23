import Image from 'next/image'
import HeroStatic from "../components/HeroStatic/HeroStatic"
import Formular from '../components/Formular/Formular'

export default function Home() {
  return (
    <>
      <HeroStatic 
        title="Kontakty"
        subtitle="Potřebujete poradit lorem ipsum dolor sit amet"
        image="/img/HeroBanner.png"
      />
      <div className='adresa-section'>
        <div className="adresa">
          <h4>Adresa:</h4>
          <ul>
            <li>Jankovcova 1595/14, 170 00</li>
            <li>Praha 7 -  Holešovice</li>
            <li>vchod A</li>
          </ul>
          <h4>Fakturační adresa</h4>
          <ul>
            <li>MirandaMedia Group, s.r.o.</li>
            <li>Jankovcova 1595/14, 170 00</li>
            <li>Praha 7 - Holešovice</li>
            <br />
            <li><strong>IČO:</strong> 08272930</li>
            <li><strong>DIČ:</strong>CZ08272930</li>
            <br />
            <li><strong>BÚ:</strong> 2201649999/2010</li>
          </ul>
        </div>
        <div className="mapa">
          <Image src="/img/mapa-kontakt.jpg" width={1205} height={1034} />
        </div>
        </div>
        <Formular />
    </>
  )
}