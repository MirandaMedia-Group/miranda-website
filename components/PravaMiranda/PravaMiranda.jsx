import styles from './PravaMiranda.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import PravaMirandaImage from './PravaMirandaImage'
import PravaMirandaLink from './PravaMirandaLink'
import PravaMirandaContentMobile from './PravaMirandaContentMobile'

const PravaMiranda = () => {
	const ppc = useRef(null)
	const weby = useRef(null)
	const soc = useRef(null)
	const design = useRef(null)
	const influence = useRef(null)
	const ppcMob = useRef(null)
	const webyMob = useRef(null)
	const socMob = useRef(null)
	const designMob = useRef(null)
	const influenceMob = useRef(null)
	const [displayRef, setDisplayRef] = useState(ppc)
	const [displayRefMob, setDisplayRefMob] = useState(null)
	const displayMobileContent = (ref) => {
		setDisplayRefMob(ref)
		ref.current.scrollIntoView()
	}

	const data = {
		ppc: {
			imageSrc: '/img/ppc-bg.jpg',
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		},
		weby: {
			imageSrc: '/img/weby-bg.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			hashtags: [
				'Shoptet & Shoptet PREMIUM',
				'Software na míru',
				'Copywriting',
				'Webová analytika',
				'Projektové řízení',
				'UX/UI',
				'Datové služby',
				'Školení',
			],
		},
		soc: {
			imageSrc: '/img/soc-bg.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			hashtags: ['Firemní identita', 'Copywriting'],
		},
		design: {
			imageSrc: '/img/design-bg.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			hashtags: ['Produktové fotografie', 'Návrh značek'],
		},
		influence: {
			imageSrc: '/img/influence-bg.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	}
	return (
		<>
			<div className='narrow text-center'>
				<h2>Miranda je ta pravá</h2>
				<p>
					Uvařit pořádně hutnej a dlouhodobej výkon v digitálu není jen tak, ale když se spojí dobrý nápad s vytrvalostí a zápalem a k tomu přidáte
					pár nadšených profíků, může z toho vzniknout něco, na co budete právem pyšní!{' '}
				</p>
			</div>
			<div className={`columns col-2 ${styles.sluzbyWrapper}`}>
				<div className={`column ${styles.columnImage}`} style={{ position: 'relative' }}>
					{displayRef == ppc && (
						<>
							<PravaMirandaImage imageSrc={data.ppc.imageSrc} text={data.ppc.text} />
						</>
					)}
					{displayRef == weby && (
						<>
							<PravaMirandaImage imageSrc={data.weby.imageSrc} text={data.weby.text} hashtags={data.weby.hashtags} />
						</>
					)}
					{displayRef == soc && (
						<>
							<PravaMirandaImage imageSrc={data.soc.imageSrc} text={data.soc.text} hashtags={data.soc.hashtags} />
						</>
					)}
					{displayRef == design && (
						<>
							<PravaMirandaImage imageSrc={data.design.imageSrc} text={data.design.text} hashtags={data.design.hashtags} />
						</>
					)}
					{displayRef == influence && (
						<>
							<PravaMirandaImage imageSrc={data.influence.imageSrc} text={data.influence.text} />
						</>
					)}
				</div>
				<div className='column'>
					<ul className={styles.sluzbyList}>
						<li
							ref={ppc}
							onMouseEnter={() => {
								setDisplayRef(ppc)
							}}
							onClick={() => {
								displayMobileContent(ppc)
							}}
						>
							<PravaMirandaLink title='PPC kampaně' url='/sluzby/ppc-vyhledavace' />
							{displayRef == ppc && <PravaMirandaContentMobile text={data.ppc.text} hashtags={data.ppc.hashtags} />}
						</li>
						<li
							ref={weby}
							onMouseEnter={() => {
								setDisplayRef(weby)
							}}
							onClick={() => {
								displayMobileContent(weby)
							}}
						>
							<PravaMirandaLink title='Weby &amp; e-shopy' url='/sluzby/weby' />
							{displayRef == weby && <PravaMirandaContentMobile text={data.weby.text} hashtags={data.weby.hashtags} />}
						</li>
						<li
							ref={soc}
							onMouseEnter={() => {
								setDisplayRef(soc)
							}}
							onClick={() => {
								displayMobileContent(soc)
							}}
						>
							<PravaMirandaLink title='Sociální sítě' url='/sluzby/socialni-site' />
							{displayRef == soc && <PravaMirandaContentMobile text={data.soc.text} hashtags={data.soc.hashtags} />}
						</li>
						<li
							ref={design}
							onMouseEnter={() => {
								setDisplayRef(design)
							}}
							onClick={() => {
								displayMobileContent(design)
							}}
						>
							<PravaMirandaLink title='Kreativa' url='/sluzby/design' />
							{displayRef == design && <PravaMirandaContentMobile text={data.design.text} hashtags={data.design.hashtags} />}
						</li>
						<li
							ref={influence}
							onMouseEnter={() => {
								setDisplayRef(influence)
							}}
							onClick={() => {
								displayMobileContent(influence)
							}}
						>
							<PravaMirandaLink title='Influencing' url='/sluzby/influencer' />
							{displayRef == influence && <PravaMirandaContentMobile text={data.influence.text} hashtags={data.influence.hashtags} />}
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default PravaMiranda
