import Image from 'next/image'
import Link from 'next/link'
import ReferenceItem from '../ReferenceItem/ReferenceItem'
import { useState, useEffect } from 'react'

import styles from './Reference.module.scss'


const Reference = () => {
    const [referenceData, setReferenceData] = useState([])

    const getReference = async () => {
        try {
            const res = await fetch('https://backend.mirandamedia.cz/api/references?populate=*', {
                method: 'GET',
                cors: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
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
            <div className={styles.referenceGrid}>
                { referenceData.map( (item, index) => {
                    return <ReferenceItem key={index} data={item}></ReferenceItem>
                }) }
            </div>
            <div className={styles.partnersBrands}>

            </div>
        </>
    )
}

export default Reference
