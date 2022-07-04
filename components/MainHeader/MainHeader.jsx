import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'
import styles from './MainHeader.module.scss'

const Navbar = () => {
	const router = useRouter()
	const [submenuVisible, setSubmenuVisible] = useState(false)
	const [actualHour, setActualHour] = useState(null)
	const [shopyVisible, setShopyVisible] = useState(false)
	const [sluzbyVisible, setSluzbyVisible] = useState(false)
	const [scrollY, setScrollY] = useState(0)
	const [scrolledTop, setScrolledTop] = useState(false)
	const [fadeOut, setFadeOut] = useState(false)

	const toggleNav = () => {
		submenuVisible ? setSubmenuVisible(false) : setSubmenuVisible(true)
	}

	const handleScroll = () => {
		const position = window.scrollY
		if (position > 300) {
			if (position < scrollY) {
				if (!scrolledTop) setScrolledTop(true)
			} else {
				if (scrolledTop) {
					setFadeOut(true)
					setTimeout(() => {
						setScrolledTop(false)
						setFadeOut(false)
					}, 300)
				}
			}
		} else {
			if (scrolledTop) {
				setFadeOut(true)
				setTimeout(() => {
					setScrolledTop(false)
					setFadeOut(false)
				}, 300)
			}
		}
		setScrollY(position)
	}
	useEffect(async () => {
		const day = new Date().getDay()
		const isHoliday = await fetchIsHoliday()

		if (day === 0 || day === 6 || isHoliday == true) {
			setActualHour(18)
		} else {
			setActualHour(new Date().getHours())
		}

		setInterval(() => {
			if (day === 0 || day === 6 || isHoliday == true) {
				setActualHour(18)
			} else {
				setActualHour(new Date().getHours())
			}
		}, 60000)

		router.events.on('routeChangeStart', () => setSubmenuVisible(false))
	}, [router.events])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	const fetchIsHoliday = async () => {
		const res = await axios.get('https://svatkyapi.cz/api/day/')
		return res.data.isHoliday
	}

	return (
		<header
			className={`${styles.mainHeader} ${submenuVisible ? styles.submenuVisible : ''} ${scrolledTop ? styles.scrolledTop : ''} ${
				fadeOut ? styles.fadeOut : ''
			}`}
		>
			<div className={`${styles.logo}`}>
				<Link href='/' passHref>
					<svg width='67' height='55' viewBox='0 0 67 55' xmlns='http://www.w3.org/2000/svg'>
						<path d='M0 0H6.76955V6.54484H0V0ZM0 8.08755H6.76955V14.6324H0V8.08755ZM0 16.1517H6.76955V22.6966H0V16.1517ZM0 24.2159H6.76955V30.7607H0V24.2159ZM0 32.3034H6.76955V38.8483H0V32.3034ZM0 40.3676H6.76955V46.9125H0V40.3676ZM0 48.4552H6.76955V55H0V48.4552ZM8.60104 0H15.3706V6.54484H8.60104V0ZM8.60104 8.08755H15.3706V14.6324H8.60104V8.08755ZM8.60104 16.1517H15.3706V22.6966H8.60104V16.1517ZM8.60104 24.2159H15.3706V30.7607H8.60104V24.2159ZM8.60104 32.3034H15.3706V38.8483H8.60104V32.3034ZM8.60104 40.3676H15.3706V46.9125H8.60104V40.3676ZM8.60104 48.4552H15.3706V55H8.60104V48.4552ZM17.2253 8.08755H23.9948V14.6324H17.2253V8.08755ZM17.2253 16.1517H23.9948V22.6966H17.2253V16.1517ZM17.2253 24.2159H23.9948V30.7607H17.2253V24.2159ZM17.2253 32.3034H23.9948V38.8483H17.2253V32.3034ZM25.8263 16.1517H32.5959V22.6966H25.8263V16.1517ZM25.8263 24.2159H32.5959V30.7607H25.8263V24.2159ZM25.8263 32.3034H32.5959V38.8483H25.8263V32.3034ZM25.8263 40.3676H32.5959V46.9125H25.8263V40.3676ZM34.4273 16.1517H41.1969V22.6966H34.4273V16.1517ZM34.4273 24.2159H41.1969V30.7607H34.4273V24.2159ZM34.4273 32.3034H41.1969V38.8483H34.4273V32.3034ZM34.4273 40.3676H41.1969V46.9125H34.4273V40.3676ZM43.0284 8.08755H49.7979V14.6324H43.0284V8.08755ZM43.0284 16.1517H49.7979V22.6966H43.0284V16.1517ZM43.0284 24.2159H49.7979V30.7607H43.0284V24.2159ZM43.0284 32.3034H49.7979V38.8483H43.0284V32.3034ZM51.6294 0H58.399V6.54484H51.6294V0ZM51.6294 8.08755H58.399V14.6324H51.6294V8.08755ZM51.6294 16.1517H58.399V22.6966H51.6294V16.1517ZM51.6294 24.2159H58.399V30.7607H51.6294V24.2159ZM51.6294 32.3034H58.399V38.8483H51.6294V32.3034ZM51.6294 40.3676H58.399V46.9125H51.6294V40.3676ZM51.6294 48.4552H58.399V55H51.6294V48.4552ZM60.2305 0H67V6.54484H60.2305V0ZM60.2305 8.08755H67V14.6324H60.2305V8.08755ZM60.2305 16.1517H67V22.6966H60.2305V16.1517ZM60.2305 24.2159H67V30.7607H60.2305V24.2159ZM60.2305 32.3034H67V38.8483H60.2305V32.3034ZM60.2305 40.3676H67V46.9125H60.2305V40.3676ZM60.2305 48.4552H67V55H60.2305V48.4552Z' />
					</svg>
				</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li className={router.pathname == '/o-nas' ? `${styles.active}` : ''}>
						<Link href='/o-nas' passHref>
							<a>O nás</a>
						</Link>
					</li>
					<li className={router.pathname == '/reference' ? `${styles.active}` : ''}>
						<Link href='/reference'>
							<a>Reference</a>
						</Link>
					</li>
					<li className={`${router.pathname == '/shoptetnamiru' ? styles.active : ''}`}>
						<Link href='/shoptetnamiru'>
							<a>Shoptet na míru</a>
						</Link>
						{/* <ul className={styles.menuLevel2}>
                <li>
                  <Link href="/jak-to-funguje">
                    <a>Jak to u nás funguje</a>
                  </Link>
                </li>
              </ul> */}
					</li>
					<li className={`${router.pathname.includes('/sluzby') ? `${styles.active}` : ''}`}>
						<Link href='/sluzby'>
							<a>Služby</a>
						</Link>
						{/* <ul className={styles.menuLevel2}>
							<li>
								<Link href='/sluzby/ppc-vyhledavace'>
									<a>PPC &amp; zbožové vyhledávače</a>
								</Link>
							</li>
							<li>
								<Link href='/sluzby/design'>
									<a>Produktový design &amp; grafika</a>
								</Link>
							</li>
							<li>
								<Link href='/sluzby/socialni-site'>
									<a>Sociální sítě</a>
								</Link>
							</li>
							<li>
								<Link href='/sluzby/weby'>
									<a>Weby &amp; e-shopy na klíč</a>
								</Link>
							</li>
							<li>
								<Link href='/sluzby/influencer'>
									<a>Influencer</a>
								</Link>
							</li>
						</ul> */}
					</li>
					<li>
						<Link href='/blog'>
							<a className={router.pathname == '/blog' ? `${styles.active}` : ''}>Blog</a>
						</Link>
					</li>
					<li>
						<Link href='/kariera'>
							<a className={router.pathname == '/kariera' ? `${styles.active}` : ''}>Kariéra</a>
						</Link>
					</li>
					<li>
						<Link href='/kontakty'>
							<a className={router.pathname == '/kontakty' ? `${styles.active}` : ''}>Kontakty</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.mobileNavigation}>
				<div onClick={toggleNav} className={`${styles.hamburger} ${submenuVisible ? styles.visible : ''}`}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav className={submenuVisible ? styles.visible : ''}>
					<ul>
						<li className={router.pathname == '/o-nas' ? `${styles.active}` : ''}>
							<Link href='/o-nas' passHref>
								<a>O nás</a>
							</Link>
						</li>
						<li className={router.pathname == '/reference' ? `${styles.active}` : ''}>
							<Link href='/reference'>
								<a>Reference</a>
							</Link>
						</li>
						<li className={`${router.pathname == '/shoptetnamiru' ? styles.active : ''}`}>
							<Link href='/shoptetnamiru'>
								<a>Shoptet na míru</a>
							</Link>
							{/* <span>
                  <span className={styles.lvl2Toggle} onClick={() => {
                    shopyVisible ? setShopyVisible(false) : setShopyVisible(true)
                  }}></span>
                </span> */}
							{/* <ul className={styles.menuLevel2}>
                  <li>
                    <Link href="/jak-to-funguje">
                      <a>Jak to u nás funguje</a>
                    </Link>
                  </li>
                </ul> */}
						</li>
						<li className={`${router.pathname.includes('/sluzby') ? `${styles.active}` : ''} ${sluzbyVisible && styles.lvl2Visible}`}>
							<span>
								<Link href='/sluzby'>
									<a>Služby</a>
								</Link>
								{/* <span
									className={styles.lvl2Toggle}
									onClick={() => {
										sluzbyVisible ? setSluzbyVisible(false) : setSluzbyVisible(true)
									}}
								></span> */}
							</span>
							{/* <ul className={styles.menuLevel2}>
								<li>
									<Link href='/sluzby/ppc-vyhledavace'>
										<a>PPC &amp; zbožové vyhledávače</a>
									</Link>
								</li>
								<li>
									<Link href='/sluzby/design'>
										<a>Produktový design &amp; grafika</a>
									</Link>
								</li>
								<li>
									<Link href='/sluzby/socialni-site'>
										<a>Sociální sítě</a>
									</Link>
								</li>
								<li>
									<Link href='/sluzby/weby'>
										<a>Weby &amp; e-shopy na klíč</a>
									</Link>
								</li>
								<li>
									<Link href='/sluzby/influencer'>
										<a>Influencer</a>
									</Link>
								</li>
							</ul> */}
						</li>
						<li>
							<Link href='/blog'>
								<a className={router.pathname == '/blog' ? `${styles.active}` : ''}>Blog</a>
							</Link>
						</li>
						<li>
							<Link href='/kariera'>
								<a className={router.pathname == '/kariera' ? `${styles.active}` : ''}>Kariéra</a>
							</Link>
						</li>
						<li>
							<Link href='/kontakty'>
								<a className={router.pathname == '/kontakty' ? `${styles.active}` : ''}>Kontakty</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.contacts}>
				<a href='tel:00420732264251' className={styles.projectPhone}>
					<span className={`${actualHour > 8 && actualHour < 17 ? styles.online : styles.offline} ${styles.status}`}></span>
					+420 732 264 251
				</a>
				<a href='mailto:info@mirandamedia.cz' className={styles.projectMail}>
					info@mirandamedia.cz
				</a>
			</div>
		</header>
	)
}

export default Navbar
