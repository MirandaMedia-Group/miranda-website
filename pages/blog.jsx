import styles from '../styles/blog.module.scss'
import FetchedImage from '../components/FetchedImage/FetchedImage'
import { fetchAPI } from '../lib/api'
import Link from 'next/link'

const Blog = ({ clanky }) => {
    // const [clankyData, setClankyData] = useState([])
    // const apiURL = 'https://backend.mirandamedia.cz'

    // const getClanky = async () => {
    //     try {
    //         const res = await fetch(`${apiURL}/api/clanky?populate=*`, {
    //             method: 'GET',
    //             cors: 'cors',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //         const data = await res.json()
    //         setClankyData(data.data)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect( () => {
    //     getClanky()
    // }, [])

    return (
        <>
        <section>
            {clanky[0] && (<article className={styles.heroArticle}>
                <FetchedImage 
                    image={clanky[0].attributes.obrazek}
                />
                <div className={`${styles.heroTexts} container`}>
                    <div className={styles.heroCat}>
                        {clanky[0].attributes.kategorie_clankus.data.map((cat, index) => {
                            return <span key={index}>{cat.attributes.nazev}</span>
                        })}
                    </div>
                    <h1>{clanky[0].attributes.nazev}</h1>
                    <Link href={`/clanky/${clanky[0].attributes.slug}`}>
                        <a className="btn btn-primary">Přečíst článek</a>
                    </Link>
                </div>
            </article>)}
        </section>
        <section>
            <div className={`container ${styles.grid}`}>
                { clanky.map( (item, index) => {
                    return (
                        <Link key={index} href={`/clanky/${item.attributes.slug}`} passHref>
                            <article>
                                <div className={styles.image}>
                                    <FetchedImage 
                                        image={item.attributes.obrazek}
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
                        </Link>
                    )
                }) }
            </div>
        </section>
        </>
    )
}

export async function getStaticProps() {
    const clankyRes = await fetchAPI('/clanky', { populate: '*' })

    return {
        props: {
            clanky: clankyRes.data,
        },
        revalidate: 1,
    }
}

export default Blog