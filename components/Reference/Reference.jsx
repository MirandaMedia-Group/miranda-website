import Image from 'next/image'
import Link from 'next/link'
import ReferenceItem from '../ReferenceItem/ReferenceItem'
import { useState, useEffect } from 'react'

import styles from './Reference.module.scss'


const Reference = () => {
    const [referenceData, setReferenceData] = useState([])

    const getReference = async () => {
        try {
            const res = await fetch('http://164.92.206.112:1337/api/references?populate=*', {
                method: 'GET',
                // headers: '',
            })
            const data = await res.json()
            setReferenceData(data.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect( () => {
        getReference()
    }, [])

    return (
        <>
            <div className={`columns col-1-4 align-center ${styles.reference}`}>
                <div className="column">
                    <h2>Reference</h2>
                </div>
                <div className="column">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className={styles.referenceGrid}>
                { referenceData.map( (item, index) => {
                    return <ReferenceItem key={index} data={item}></ReferenceItem>
                }) }
            </div>
            <div className={styles.partnersBrands}>

            </div>
            <div className={styles.buttons}>
                <Link href="/reference">
                    <a className={`btn btn-secondary ${styles.btnSecondary}`}>Přejít na reference</a>
                </Link>
                <Link href="/kontakty">
                    <a className="btn btn-primary">Poptat řešení</a>
                </Link>
            </div>
        </>
    )
}

export default Reference
