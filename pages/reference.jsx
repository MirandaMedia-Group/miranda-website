import HeroStatic from '../components/HeroStatic/HeroStatic'
import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'

export default function Home() {
  return (
    <>
     <HeroStatic 
      title="Reference"
      subtitle="Lorem ipsum dolor sit amet adpisicng lorem
      ipsum."
      image="/img/referenceBackground.jpg"
     />
    
      <CoONasRikaji />
      <ProjektBanner />
    </>
  )
}