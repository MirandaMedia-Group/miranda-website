import HeroStatic from '../components/HeroStatic/HeroStatic'
import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import Reference from '../components/Reference/Reference'

export default function Home() {
  return (
    <>
     <HeroStatic 
      title="Reference"
      subtitle="Lorem ipsum dolor sit amet adpisicng lorem
      ipsum."
      image="/img/referenceBackground.jpg"
     />
     <div className='container'>
        <Reference />
     </div>
    
    
      <CoONasRikaji />
      <ProjektBanner />
    </>
  )
}