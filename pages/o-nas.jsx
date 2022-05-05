import HeroStatic from '../components/HeroStatic/HeroStatic'
import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import Image from 'next/image'

export default function Home() {
    return (
      <>
        <HeroStatic 
        title="O nás"
        subtitle="Jsme mladá agentura, ale se spoustou zkušeností elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."
        image="/img/background-onas.png"
      />
      <div className='container'>
        <div className='partneri'>
          <div className='partner'>
            <div>
              <Image src="/img/missing-photo.jpg" width={720} height={720} alt="" />
            </div>
            <div>
              <h4>Michal Baloun</h4>
              <p>Michal stojí za úspěšnou digitální agenturou s řadou známých klientů a značek. Za svou více jak 10letou praxi získal bohaté zkušenosti z on-line marketingu a v oblasti Business Development. Založil několik úspěšných e-shopů a pěknou řádku let působil v oblasti mediálního plánování. Když se potkal s Tomášem, slovo dalo slovo a vznikla Miranda.</p>
              <a href="tel:+420608924359" className='tel'>+420 608 924 359</a>
              <a href="mailto:michal.baloun@mirandamedia.cz">michal.baloun@mirandamedia.cz</a>
            </div>
          </div>
          <div className='partner row-reverse'>
            <div>
              <Image src="/img/missing-photo.jpg" width={720} height={720} alt="" />
            </div>
            <div>
              <h4>Tomáš Cina</h4>
              <p>Tomáš je v obchodu a marketingu jak ryba ve vodě. 5 let působil v pozici Head of Sales pro investiční skupinu Banky ochrany životního prostředí. V průběhu práce si odskočil zastudovat na Business Institut v oboru Marketing, media & sofskills. Založil obsahovou agenturu a podílel se na řadě marketingových aktivit pro české i mezinárodní společnosti.</p>
              <a href="tel:+420774888616" className='tel'>+420 774 888 616</a>
              <a href="mailto:tomas.cina@mirandamedia.cz">tomas.cina@mirandamedia.cz</a>
            </div>
          </div>
        </div>

      </div>

      <ProjektBanner />
      </>
  )
}