import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"

const Clanek = ({ clanek }) => {
    return (
        <article className="container">
            <h1>{clanek.attributes.nazev}</h1>
        
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