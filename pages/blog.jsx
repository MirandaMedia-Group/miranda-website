import styles from '../styles/blog.module.scss'
import FetchedImage from '../components/FetchedImage/FetchedImage'
import { fetchAPI } from '../lib/api'
import Link from 'next/link'

const Blog = ({ clanky }) => {
    return (
        <>
        <section>
            {clanky[0] && (<article className={styles.heroArticle}>
                <FetchedImage 
                    image={clanky[0].attributes.obrazek}
                />
                <div className={`${styles.heroTexts}`}>
                    <div className="container">
                        <div className={styles.heroCat}>
                            {clanky[0].attributes.kategorie_clankus.data.map((cat, index) => {
                                return <span key={index}>{cat.attributes.nazev}</span>
                            })}
                        </div>
                        <h1>{clanky[0].attributes.nazev}</h1>
                        <Link href={`/clanky/${clanky[0].attributes.slug}`}>
                            <a className="btn btn-primary">
                                <span data-hover="Přečíst článek">
                                    Přečíst článek
                                </span>
                            </a>
                        </Link>
                    </div>
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
                                <div className={styles.readMore}>
                                    <span className="btn-sm"></span><span>Celý článek</span>
                                </div>
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