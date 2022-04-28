import Link from 'next/link'
import Image from 'next/image'
import styles from './ReferenceHead.module.scss'

export default function ReferenceHead () {
    return (
        <div className={styles.referenceHead} style={{backgroundColor: 'lightBlue'}}>
            <Image src="/img/peugeot.png"  width={1169} height={881} />
            <div className='container'>
                <h1>Autorizovaný prodej vozů Renault a Dacia</h1>
                <Link href="https://www.autotop-ul.cz">
                    <a>www.autotop-ul.cz</a>
                </Link>
            </div>
        </div>
    )
}