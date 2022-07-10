import qs from 'qs'

export function getStrapiURL(path = '') {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://backend.mirandamedia.cz'}${path}`
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}, filters) {
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		...options,
	}

	const queryString = qs.stringify(urlParamsObject)
	let requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`
	requestUrl = filters ? requestUrl + filters : requestUrl

	const response = await fetch(requestUrl, mergedOptions)

	if (!response.ok) {
		console.error(response.statusText)
		throw new Error('Vyskytla se chyba, zkuste to prosim znovu')
	}

	const data = await response.json()
	return data
}
