import HeroStaticSlim from '../components/HeroStaticSlim/HeroStaticSlim'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import Reference from '../components/Reference/Reference'
import { fetchAPI } from '../lib/api'

export default function Home({ reference, coONas }) {
  return (
    <>
      <section>
        <HeroStaticSlim
          title="Reference"
          // image="/img/referenceBackground.jpg"
        />
      </section>
      <section className='container'>
        <Reference data={reference} />
      </section>
      <section className='hidden'>
        <CoONasRikaji data={coONas}/>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const referenceRes = await fetchAPI('/references', { populate: '*', sort: 'priorita' })
  const coONasRes = await fetchAPI('/co-o-nas-rikajis', { populate: '*' })

  return {
      props: {
          reference: referenceRes.data,
          coONas: coONasRes.data,
      },
      revalidate: 1,
  }
}