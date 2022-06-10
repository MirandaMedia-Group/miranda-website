import ReferenceHead from '../../components/ReferenceHead/ReferenceHead'
import CaseStudy from '../../components/CaseStudy/CaseStudy'
import { fetchAPI } from '../../lib/api'

const Post = ({ reference }) => {
	return (
		<>
			<section>
				<ReferenceHead title='' image='' />
			</section>
			<section className='hidden container'>
				<CaseStudy reference={reference}></CaseStudy>
			</section>
		</>
	)
}

// export async function getStaticPaths() {
// 	const clankyRes = await fetchAPI('/references', { fields: ['slug'] })
// 	return {
// 		paths: clankyRes.data.map((reference) => ({
// 			params: {
// 				slug: reference.attributes.slug,
// 			},
// 		})),
// 		fallback: false,
// 	}
// }
// export async function getStaticProps({ params }) {
// 	const referenceRes = await fetchAPI('/references', {
// 		filters: {
// 			slug: params.slug,
// 		},
// 		populate: '*',
// 	})

// 	return {
// 		props: { reference: referenceRes.data[0] },
// 		revalidate: 1,
// 	}
// }
export default Post

export async function getServerSideProps() {
	const referenceRes = await fetchAPI('/references', { populate: '*', pagination: { page: 1, pageSize: 6 } })

	return {
		props: {
			reference: referenceRes.data,
		},
	}
}
