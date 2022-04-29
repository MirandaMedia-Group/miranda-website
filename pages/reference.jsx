import HeroStatic from '../components/HeroStatic/HeroStatic'
import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import CoONasRikaji from '../components/CoONasRikaji/CoONasRikaji'
import Reference from '../components/Reference/Reference'

export default function Home() {
  return (
    <>
     <HeroStatic 
      title="Reference"
      subtitle="Tohle je naše výkladní skříň, tak se tu porozhlédni a třeba najdeš zrovna tu správnou inspiraci pro svůj vlastní projekt."
      image="/img/referenceBackground.jpg"
     />
     <div className='container'>
        <Reference />
     </div>
    
    
      <CoONasRikaji />
    </>
  )
}