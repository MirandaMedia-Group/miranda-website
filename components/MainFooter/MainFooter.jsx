import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MainFooter.module.scss'

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className='container'>
          <div>
            <div className={styles.logo}>
              <Link href="/" passHref>
                <Image src="/img/logo.png" width="67" height="55" alt="MirandaMedia Group" />
              </Link>
              <ul>
                <li>MirandaMedia Group, s.r.o.</li>
                <li>Jankovcova 1595/14, 170 00</li>
                <li>Praha 7 - Holešovice</li>
              </ul>
              <ul>
                <li><span>IČO:</span> 08272930</li>
                <li><span>DIČ:</span> CZ08272930</li>
                <li><span>BÚ:</span> 2201649999/2010</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Footer