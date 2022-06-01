import { useState } from 'react';
import HeroStaticSlim from '../components/HeroStaticSlim/HeroStaticSlim';
import PravaMiranda from '../components/PravaMiranda/PravaMiranda';
import Link from 'next/link';
import styles from '../styles/sluzby.module.scss';

export default function Home() {
	// const [style, setStyle] = useState('true')

	// const handleText = () => {
	//   console.log('working')
	// }

	return (
		<>
			{/* <HeroStatic
        title="Vše pro digital na jednom místě"
        subtitle="Miranda plnohodnotně působí jako full servis digitální - marketingová & kreativní agentura. Jeden by řekl, že toho je na samotnou agenturu poměrně hodně, ale už od počátku bylo naším cílem poskytovat služby, které spolu úzce souvisí tzv. pod jednou střechou. Tento komplexní přístup šetří našim klientům ve výsledku čas i peníze. Na své potřeby v digitální světě si snadno vystačí s jedním, silným partnerem."
        image="/img/heroBanner-min.png" 
        bigFont
      /> */}
			<section>
				<HeroStaticSlim
					title='Naše služby'
					image='/img/sluzby-hero.jpg'
				/>
			</section>
			<section>
				<div className='container sluzby'>
					<PravaMiranda className={styles.pravaMiranda} />
				</div>
			</section>
			{/* <section>
        <div className='container'>
          <div className={styles.sluzby}>
            <div className={styles.sluzbyLeft}>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>01</span>Shoptet &amp; Shoptet Premium</h4><Link href="/e-shopy">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  <p>Když potřebuješ Shoptet na míru nebo rovnou na klíč , nenajdeš zkušenějšího parťáka nebo vlastně parťačku než právě Mirandu. Na téhle krabici jsme navrhli a postavili už hromadu e-shopů včetně Penny Marketu, Autosalonu Klokočka nebo taky on-line obchůdek pro ten zatraceně dobrej Svijanskej Pivovar.</p>
                  <p>Tenhle vymakanej systém si za víc jak 13 let svého působení dokázal přitáhnout přes 30.000 e-shopů v Český a Slovenský republice. A Miranda, tak ta je nejenom Zlatým a Prémiovým parťákem týhle super platformy, ale především místem, kde se on-lajn výkladní skříň tvýho podnikání posouvá na zcela jinej level! Pakliže hledáš pořádně vymazlenou grafiku, abys nebyl tuctovej, co je třeba naroubovat na Shoptetí střeva, naprogramovat vlastní vychytaný funkcionality, napojit jakejkoli externí systém přes apíčko nebo snad zajistit dohled nad e-shopem v režimu 24/7 přes komunikační platformu provozovanou v plně redundantním režimu s 2 databázovými servery s master-master replikou, k tomu 2x aplikační server a navrch 2x balancer zajišťující logiku automatického zapojení slave větvě při výpadku některého serveru, tak ačkoli možná nemáš šajna, co to všechno znamená, pak si tu rozhodně na tom správným místě!</p>
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>02</span>Software na míru</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>03</span>Produktové fotografie</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>04</span>Mobilní aplikace</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>05</span>Návrh značek</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>06</span>Firemní identita</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>07</span>Copywriting</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
            </div>
            <div className={styles.sluzbyRight}>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>08</span>Webová analytika</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>09</span>Projektové řízení</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>10</span>UX/UI</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>11</span>Datové služby</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>12</span>Školení</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
              <div className={styles.sluzba}>
                <div>
                  <h4><span>13</span>Podcast</h4><Link href="/#">
                    <a className='btn-sm'></a>
                  </Link>
                </div>
                <div className={styles.text}>
                  #
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
		</>
	);
}
