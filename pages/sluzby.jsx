//import Head from 'next/head'
import ProjektBanner from '../components/ProjektBanner/ProjektBanner'
import HeroStatic from '../components/HeroStatic/HeroStatic'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <HeroStatic 
        title="Služby"
        subtitle="Potřebujete poradit lorem ipsum dolor sit amet."
        image="/img/heroBanner-min.png" 
      />
      <div className='container sluzby'>
        <div className="sluzby-div">
          <div className="green-background">
            <div className='sluzby-img'>
              <Image src="/img/mockup_eshopy.png" width={1200} height={750} />
            </div>
          </div>
          <div>
            <h3>E-shopy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='buttons-wrapper'>
              <Link href="/reference">
                <a className="btn btn-secondary">Hotové projekty</a>
              </Link>
              <Link href="/reference">
                <a className="btn btn-secondary">Case study</a>
              </Link>
              <Link href="/kontakty">
                <a className="btn btn-primary">Poptat řešení</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="sluzby-div">
          <div>
            <h3>Webové řešení</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='buttons-wrapper'>
              <Link href="/reference">
                <a className="btn btn-secondary">Hotové projekty</a>
              </Link>
              <Link href="/reference">
                <a className="btn btn-secondary">Case study</a>
              </Link>
              <Link href="/kontakty">
                <a className="btn btn-primary">Poptat řešení</a>
              </Link>
            </div>
          </div>
          <div className="green-background">
            <div className='sluzby-img'>
              <Image src="/img/mockups_webs.png" width={1200} height={750} />
            </div>
          </div>
        </div>
        <div className="sluzby-div">
        <div className="green-background">
            <div className='sluzby-img'>
              <Image src="/img/Mockups_insta.png" width={1200} height={750} />
            </div>
          </div>
          <div>
            <h3>Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='buttons-wrapper'>
              <Link href="/reference">
                <a className="btn btn-secondary">Hotové projekty</a>
              </Link>
              <Link href="/reference">
                <a className="btn btn-secondary">Case study</a>
              </Link>
              <Link href="/kontakty">
                <a className="btn btn-primary">Poptat řešení</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="sluzby-div">
          <div>
            <h3>Analýza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='buttons-wrapper'>
              <Link href="/reference">
                <a className="btn btn-secondary">Hotové projekty</a>
              </Link>
              <Link href="/reference">
                <a className="btn btn-secondary">Case study</a>
              </Link>
              <Link href="/kontakty">
                <a className="btn btn-primary">Poptat řešení</a>
              </Link>
            </div>
          </div>
          <div className="green-background">
            <div className='sluzby-img'>
              <Image src="/img/Mockups_analyza.png" width={1200} height={750} />
            </div>
          </div>
        </div>
      </div>
      <ProjektBanner />
    </>
  )
}