import HeroStatic from '../components/HeroStatic/HeroStatic'

export default function Home() {
  return (
    <>
      <section>
        <HeroStatic 
          title=""
          subtitle=""
          image="/img/proc-s-nami.jpg"
          buttons='false'
        />
      </section>
      <section className='text-center'>
        <div className="container narrow">
          <h2>Miranda</h2>
          <p>Jsme mladá agentura, ale se spoustou zkušeností elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
        </div>
      </section>
    </>
  )
}