import $store from '@/store'
import uni_request from './uni_request.js'

const host = 'https://yinchengnuo.com'
const path = '/dwbsapp'

const request = uni_request({ baseURL: `${host}${path}` })

request.interceptors.request.use(config => {
	config.header.Authorization = 'Bearer ' + $store.state.app.token
	return config
})

request.interceptors.response.use(async (response, ...args) => {
	if (response.statusCode === 200) {
		// ...
	} else if (response.statusCode === 401) {
		// ...
	} else {
		// ...
	}
	return response
})

request.onerror = e => console.log(e)

export default request