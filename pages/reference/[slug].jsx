import ReferenceHead from '../../components/ReferenceHead/ReferenceHead'
import { fetchAPI } from '../../lib/api'

const Post = () => {
	return (
		<>
			<section>
				<ReferenceHead title='Litujeme, k této referenci zatím nemáme více informací' image='' />
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
