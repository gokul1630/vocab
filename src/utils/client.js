import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const client = async (endPoint, { ...configs }) => {
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	}

	const config = {
		...configs,
		headers: headers,
	}
	config.url = `${BACKEND_URL}${endPoint}`
	let response = await axios(config)
	if (response.statusText === 'OK') {
		return Promise.resolve(response.data)
	} else {
		return Promise.reject(response.data)
	}
}

export default client
