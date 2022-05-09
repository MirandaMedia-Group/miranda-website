import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import Reference from '../components/Reference/Reference'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import PravaMiranda from '../components/PravaMiranda/PravaMiranda'
import Spoluprace from '../components/Spoluprace/Spoluprace'
import Projekty from '../components/Projekty/Projekty'
import NabidkaSluzeb from '../components/NabidkaSluzeb/NabidkaSluzeb'
import { fetchAPI } from '../lib/api'

export default function Home({ reference }) {
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
                <p>Našim skvělým partnerům pomáháme <strong>s návrhem a tvorbou úspěšných e-shopů a webů, správou marketingových aktivit se zaměřením na výkonnostní PPC kampaně.</strong> Tvoříme značky a nové produkty, spravujeme sociální sítě a nejen to.</p>
            </div>
        </div>
        <Reference data={reference}></Reference>
        <div className="buttons-wrapper justify-center">
            <Link href="/reference">
                <a className="btn btn-primary">
                  <span data-hover="Objevit další projekty">
                    Objevit další projekty
                  </span>
                </a>
            </Link>
        </div>
      </section>
      <section>
        {/* <div className="container narrow text-center">
          <h2 className="miranda-title">Miranda je ta pravá</h2>
          <p>Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu přidáte pár nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní! </p>
        </div> */}
        <div className="container">
          <PravaMiranda></PravaMiranda>
          <div className='text-center'>
            <Link href="/sluzby">
              <a className="btn btn-tertiary">Kompletní nabídka služeb</a>
            </Link>
          </div>
        </div>
      </section>
      {/* <section>
        <NabidkaSluzeb></NabidkaSluzeb>
      </section> */}
      <section>
        <Spoluprace></Spoluprace>
      </section>
      <section>
        <CoONasRikaji></CoONasRikaji>
      </section>
      <section>
        <div className="columns col-2 align-center container podcast">
          <div className="column">
            <h3>Miranda podcast</h3>
            <p>Pokud tě zajímá svět digitálních a marketingových agentur, autentické a inspirativní příběhy napříč všemi oblastmi podnikání nebo chceš jednoduše vyplnit volný čas, tak pouštej!</p>
            <Link href="/sluzby/podcast">
              <a className='btn btn-primary'>Poptat podcast</a>
            </Link>
          </div>
          <div className="column">
           
          </div>
        </div>
      </section>
      {/* <section>
        <Projekty />
      </section> */}
    </>
  )
}

export async function getStaticProps() {
  const referenceRes = await fetchAPI('/references', { populate: '*', sort: 'priorita', pagination: { page: 1, pageSize: 6 } })

  return {
      props: {
          reference: referenceRes.data,
      },
      revalidate: 1,
  }
}
