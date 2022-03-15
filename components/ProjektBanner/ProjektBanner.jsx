import styles from './ProjektBanner.module.scss'
import Link from 'next/link'

function ProjektBanner () {
    return (
        <div className={`container ${styles.projektBanner}`}>
            <div>
                <h2>Nastartujte <span>váš projekt</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href="/kontakty">
                    <a className="btn">Kontaktujte nás</a>
                </Link>
            </div>
        </div>
    )
}

export default ProjektBanner