import HeroStatic from '../components/HeroStatic/HeroStatic'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import Reference from '../components/Reference/Reference'
import { fetchAPI } from '../lib/api'

export default function Home({ reference }) {
  return (
    <>
      <section>
        <HeroStatic 
          title="Reference"
          subtitle="Tohle je naše výkladní skříň, tak se tu porozhlédni a třeba najdeš zrovna tu správnou inspiraci pro svůj vlastní projekt."
          image="/img/referenceBackground.jpg"
        />
      </section>
      <section className='container'>
        <Reference data={reference} />
      </section>
      <section>
        <CoONasRikaji />
      </section>
    </>
  )
}

export async function getStaticProps() {
  const referenceRes = await fetchAPI('/references', { populate: '*' })

  return {
      props: {
          reference: referenceRes.data,
      },
      revalidate: 1,
  }
}