import styles from '../styles/blog.module.scss'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
    const [clankyData, setClankyData] = useState([])
    const apiURL = 'https://backend.mirandamedia.cz'

    const getClanky = async () => {
        try {
            const res = await fetch(`${apiURL}/api/clanky?populate=*`, {
                method: 'GET',
                cors: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json()
            setClankyData(data.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect( () => {
        getClanky()
    }, [])

    

    return (
        <>
        <section>
            {clankyData[0] && (<article className={styles.heroArticle}>
                <Image src={`${apiURL}${clankyData[0].attributes.obrazek.data.attributes.url}`}
                    width={clankyData[0].attributes.obrazek.data.attributes.width}
                    height={clankyData[0].attributes.obrazek.data.attributes.height}
                    alt=""
                    layout='responsive'
                />
                <div className={`${styles.heroTexts} container`}>
                    <div className={styles.heroCat}>
                        {clankyData[0].attributes.kategorie_clankus.data.map((cat, index) => {
                            return <span key={index}>{cat.attributes.nazev}</span>
                        })}
                    </div>
                    <h1>{clankyData[0].attributes.nazev}</h1>
                </div>
            </article>)}
        </section>
        <section>
            <div className={`container ${styles.grid}`}>
                { clankyData.map( (item, index) => {
                    return (
                        <article key={index}>
                            <div className={styles.image}>
                                <Image src={`${apiURL}${item.attributes.obrazek.data.attributes.formats.thumbnail.url}`} 
                                    width={item.attributes.obrazek.data.attributes.formats.thumbnail.width} 
                                    height={item.attributes.obrazek.data.attributes.formats.thumbnail.height} 
                                    alt=""
                                    layout='responsive'
                                />
                            </div>
                            <div className={styles.cat}>
                                {item.attributes.kategorie_clankus.data.map((cat, index) => {
                                    return <span key={index}>{cat.attributes.nazev}</span>
                                })}
                            </div>
                            <h1>{item.attributes.nazev}</h1>
                            <div>
                                { (new Date(item.attributes.publishedAt)).toLocaleDateString('cs-CZ')  }
                            </div>
                            <p>{item.attributes.description}</p>
                        </article>
                    )
                }) }
            </div>
        </section>
        </>
    )
}