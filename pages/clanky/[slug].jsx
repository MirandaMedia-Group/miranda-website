import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import FetchedImage from '../../components/FetchedImage/FetchedImage'
import Link from "next/link"
import Moment from "react-moment"
import ReactMarkdown from "react-markdown"
import styles from './clanek.module.scss'

const Clanek = ({ clanek }) => {
    return (
        <article>
            <section className={styles.heroArticle}>
                <FetchedImage 
                    image={clanek.attributes.obrazek}
                />
                <div className={`${styles.heroTexts}`}>
                    <div className="container">
                        <div className={styles.heroCat}>
                            {clanek.attributes.kategorie_clankus.data.map((cat, index) => {
                                return <span key={index}>{cat.attributes.nazev}</span>
                            })}
                        </div>
                        <h1>{clanek.attributes.nazev}</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className={`${styles.articleContainer} container`}>
                    <ReactMarkdown>
                        {clanek.attributes.content}
                    </ReactMarkdown>
                </div>
            </section>     
        </article>
    )
}

export async function getStaticPaths() {
    const clankyRes = await fetchAPI('/clanky', { fields: ['slug'] })

    return {
        paths: clankyRes.data.map(clanek => ({
            params: {
                slug: clanek.attributes.slug,
            }
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const clanekRes = await fetchAPI('/clanky', {
        filters: {
            slug: params.slug,
        },
        populate: '*',
    })

    return {
        props: { clanek: clanekRes.data[0] },
        revalidate: 1,
    }
}

export default Clanek